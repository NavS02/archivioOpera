<template>
<div>
    <slot name="label">
        <label :for="`field-${field.name}`" class="form-label" v-html="field.label"></label>
    </slot>
    
    <template v-if="item">
        <div class="item d-flex p-2">
            <div class="preview">
                <!-- run the preview function if available -->
                <template v-if="typeof preview == 'function'">
                    {{ preview(item) }}
                </template>
                <!-- show the id otherwise -->
                <template v-else>
                    <span>{{ item.id }}</span>
                </template>
            </div>
            <div class="d-flex ms-auto gap-2">
                <button class="btn btn-sm btn-secondary ms-auto" @click="onSelectExistingClicked">
                    <font-awesome-icon :icon="['fa-solid', 'up-right-from-square']" fixed-width/>
                </button>
                <button class="btn btn-sm btn-danger ms-auto" @click="onRemoveClicked">
                    <font-awesome-icon icon="fa-solid fa-trash" fixed-width/>
                </button>
            </div>

        </div>
        <slot :item="item"></slot>
    </template>
    <template v-else>
        <div class="buttons d-flex gap-2 border border-muted rounded p-2">
            <button class="btn btn-sm btn-primary" @click="onCreateNewClicked">
                <font-awesome-icon icon="fa-solid fa-plus" fixed-width/>
                <span class="ms-1">Crea nuovo</span>
            </button>
            <button class="btn btn-sm btn-primary" @click="onSelectExistingClicked">
                <font-awesome-icon icon="fa-solid fa-list" fixed-width/>
                <span class="ms-1">Aggiungi esistente</span>
            </button>
        </div>
    </template>


    <Drawer ref="createDrawer">
        <template v-slot:header>
            <span>Create item</span>
        </template>
        <!-- {{ newItem }} -->

        <MyForm :fields="newItemFields" v-model="newItem">
        </MyForm>
    </Drawer>

    <Drawer ref="selectDrawer">
        <template v-slot:header>
            <span>Select item</span>

            <div>
                <div class="input-group">
                    <input class="form-control" type="text" v-model.lazy="query" placeholder="3 characters min..."/>
                    <button class="btn btn-sm btn-primary" @click="onSearchClicked">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" fixed-width/>
                        <span class="ms-1">Cerca</span>
                    </button>
                </div>
            </div>
        </template>
        <div>
            <template v-for="(item, index) in results" :key="index">
                <div class="card mt-2">
                    <div class="preview card-body">
                        <input class="form-check-radio" :id="`select-${item.id}`" type="radio" v-model="selectedID" :value="item.id"/>
                        <!-- run the preview function if available -->
                        <label class="form-check-label ms-2" :for="`select-${item.id}`">
                            <template v-if="typeof preview == 'function'">
                                {{ preview(item) }}
                            </template>
                            <!-- show the id otherwise -->
                            <template v-else>
                                <span>{{ item.id }}</span>
                            </template>
                        </label>
                    </div>
                </div>
            </template>
        </div>
    </Drawer>
</div>
</template>

<script setup>
import FormField from '@/models/FormField'
import { ref, toRefs, computed, watch, defineAsyncComponent, reactive } from 'vue'
import {directus} from '@/API/'

/**
 * A relation could be displayed as a number or an object;
 * the object contains an ID when updating and no ID when creating.
 * 
 * @see https://docs.directus.io/reference/introduction.html#relational-data
 * 
 * - number: ID of the associated item
 * - object with no ID: newly created item; will be saved if associated
 * - object with ID: object that has been updated; will be updated when associated
 * 
 * example:
 *   [
 *    1,
 *    2,
 *    {
 *        name: 'john'
 *    },
 *    {
 *        id: 5,
 *        name: 'jane'
 *    },
 *    6
 *   ]
 */



const MyForm = defineAsyncComponent(() => import('../Form/Form.vue'))

const emit = defineEmits([ 'update:modelValue' ])
const props = defineProps({
    modelValue: { type: [Object, Number], default: null }, // v-model
    field: { type: FormField, default: null },
})

// const items = ref([]) // list selected items (numeric form)
const item = ref() // related item
const { modelValue, field } = toRefs(props)
const {
    related, // name of the collection relation
    foreign_key, // field for the connection
    preview, // function used to preview the item
    filter, // filter function used when searching for an item by text
} = field.value


const createDrawer = ref(null) // reference an item in the template
const selectDrawer = ref(null) // reference an item in the template

const selectedID = ref()
/**
 * observe the model (relaetd model ID) once.
 * fetch data and create MetaItem
 */
const unwatch = watch(modelValue, async (_item) => {
    if(!_item?.id) return
    // fetch data of related item
    const element = await getById(_item.id)
    // assign the MetaItem to the `item` reference
    item.value = element
    unwatch() // run just once!
})
/**
 * send the updated ID to the form
 */
watch(item, (_item) => {
    let data = _item?.id ?? null
    if(!data) data = { ..._item }
    emit('update:modelValue', data)
}, {
    deep:true
})

const query = ref('')
const results = ref([])

// data for creating new items
const newItemFields = ref({})
const newItem = ref({})

/**
 * fetch a list of items matching specific IDs 
 */
async function getById(id) {
    // make a request filtering by id
    const item = await directus.items(related).readOne(id)
    return item
}

async function search() {
    const text = query.value
    const params = { limit: -1 } // default params
    params.filter = filter(text) // apply filter if a query is set
    const id = item.value?.id
    if(id) {
        params.filter.id = {
            _nin: [id]
        }
    }
    const response = await directus.items(related).readByQuery(params)
    const {data=[]} = response
    results.value = data
}
async function selectExisting() {
    const _id = selectedID.value
    if(!_id) return
    const element = await getById(_id)
    item.value = element
}
function addNew() {
    // todo: get data directly from the form in the creation drawer
    const data = newItem.value
    if(!data) return
    item.value = data
}
/**
 * search and remove one of the possible items as available in the modelValue:
 * number, object with ID, and object without ID
 * @param {Object} itemToRemove 
 */
function remove() {
    item.value = null // mark the metaitem as deleted
}

/**
 * remove the item from both
 * the ids (triggering the v-model update)
 * and from the items
 * @param {Object} itemToRemove 
 */
function onRemoveClicked(item) { remove()}
async function onCreateNewClicked() {
    newItemFields.value = field.value.fields() // reset
    const response = await createDrawer.value.show()
    if(response===false) return
    else addNew()
}
async function onSelectExistingClicked() {
    selectedID.value = null // reset id
    query.value = '' // reset query
    await search()
    const response = await selectDrawer.value.show()
    if(response===false) return
    else selectExisting()

}
function onSearchClicked() { search() }


</script>

<style scoped>
.item {
    border: solid 1px rgb(0 0 0 / 0.15);
}
</style>