<template>
    <header class="mb-2">
        <router-link :to="{name: 'createAutore'}" custom v-slot="{ isActive, href, navigate }">
            <button class="btn btn-sm btn-primary" @click="navigate">
                <font-awesome-icon icon="fa-solid fa-plus" fixed-width/>
                <span class="ms-1">New</span>
            </button>
        </router-link>
    </header>

    <Table :items="items" :fields="fields">
        <template #cell(actions)="{item, field, value}" >
            <div class="actions">
                <button title="edit" class="btn btn-sm btn-light" @click="onEditClicked(item)">
                    <font-awesome-icon icon="fa-solid fa-pencil" fixed-width/>
                </button>
                <button title="delete" class="btn btn-sm btn-light text-danger" @click="onDeleteClicked(item)">
                    <font-awesome-icon icon="fa-solid fa-trash" fixed-width/>
                </button>
            </div>
        </template>
    </Table>

</template>

<script>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {directus} from '../../API/'
import {autore} from '../../settings/'
import Table from '../common/Table/Table.vue'

// define the collection
const collection = autore.collection
// define the subset of fields you need to view in the table
const collectionFields = autore.tableFields()

export default {
    components: { Table },
    setup() {
        const route = useRoute()
        const router = useRouter()

        const _items = ref([])
        const _fields = ref(collectionFields)

        const items = computed( ()=> _items.value )
        const fields = computed( ()=> _fields.value )


        async function fetchData() {
            const response = await directus.items(collection).readByQuery({limit: -1})
            const {data=[]} = response
            _items.value = data
        }
        async function deleteItem(item) {
            const {id} = item
            await directus.items(collection).deleteOne(id)
            fetchData()
        }
        function onEditClicked(item) {
            router.push({name: 'editAutore', params: { id: item.id }})
        }
        function onDeleteClicked(item) {
            const confirmed = confirm('Are you sure you want to delete this item?')
            if(confirmed) deleteItem(item)
        }


        fetchData()

        return {
            items,fields,
            onEditClicked,onDeleteClicked,
        }
    },
    
}
</script>

<style scoped>
.actions {
    display: flex;
    gap: 5px;
}
</style>