<template>
    <main id="main" class="main">
        <div class="card">
            <div class="card-body">
    <Form :fields="fields">
        <template v-slot:footer="{data}">
            <div class="buttons">
                <button class="btn btn-sm btn-secondary" @click="onCancelClicked()">
                    <font-awesome-icon icon="fa-solid fa-xmark" fixed-width/>
                    <span class="ms-1">Annullare</span>
                </button>
                <button class="btn btn-sm btn-primary" @click="onSaveClicked(data)">
                    <font-awesome-icon icon="fa-solid fa-floppy-disk" fixed-width/>
                    <span class="ms-1">Salva</span>
                </button>
            </div>
        </template>
    </Form>
</div>
</div>
</main>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {directus} from '../../API'
import Form from '../common/Form/Form.vue'
import * as settings from '../../settings/'


export default {
    components: { Form },
    props: {
        collection: { type: String, default: '' }
    },
    setup(props, context) {
        const route = useRoute()
        const router = useRouter()
        
        const collection = ref('')
        const fields = ref([])
        
        // watch the route and update data based on the collection param
        watch(route, () => {
            // infer the collection from the route
            collection.value = route.params?.collection
            if(!collection.value) return
            // retrieve the settings
            const itemSettings = settings[collection.value]
            // define the subset of fields you need to view in the table
            const collectionFields = itemSettings.fields()
            // define the subset of fields you need to view in the table
            fields.value = collectionFields
        }, {immediate: true, deep: true})

        function onCancelClicked() {
            const confirmed = confirm('Are you sure you want to leave this page?')
            if(!confirmed) return
            goToList()
        }
        function onSaveClicked(form) {
            save(form)
        }
        function goToList() {
            router.push({name: 'listItems', params: { collection: collection.value }})
        }
        async function save(data) {
            try {
                const response = await directus.items(collection.value).createOne(data)
                alert('saved successfully')
                goToList()
            } catch (error) {
                console.error(error)
                alert(error)
            }
        }
        return {
            fields,
            onCancelClicked,onSaveClicked,
        }
    },
    
}
</script>

<style scoped>
.buttons {
    display: flex;
    gap: 5px;
}
</style>