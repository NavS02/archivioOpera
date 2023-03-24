<template>
    <h2>Edit item ID #{{ id }}</h2>

    <Form :fields="fields">

        <template v-slot:footer="{data}">
            <div class="buttons">
                <button class="btn btn-sm btn-secondary" @click="onCancelClicked()">
                    <font-awesome-icon icon="fa-solid fa-xmark" fixed-width/>
                    <span class="ms-1">Cancel</span>
                </button>
                <button class="btn btn-sm btn-primary" @click="onSaveClicked(data)">
                    <font-awesome-icon icon="fa-solid fa-floppy-disk" fixed-width/>
                    <span class="ms-1">Save</span>
                </button>
            </div>
        </template>
    </Form>
</template>

<script>
import {autore} from '../../settings'
import {directus} from '../../API/'
import Form from '../common/Form/Form.vue'


const collection = autore.collection
const fields = autore.fields()
const listRouteName = 'autori' // name of the route that lists the collection

export default {
    components: { Form },
    created() {
        this.fetchData()
    },
    props: {
        collection: { type: String, default: '' },
        id: { type: String, default: null }, // this prop is coming from the router
    },
    data() {
        return {
            fields,
            item: {}
        }
    },
    methods: {
        async fetchData() {
            const response = await directus.items(collection).readOne(this.id, {
                fields: '*.*',
            })
            this.item = response
        },
        onCancelClicked() {
            const confirmed = confirm('Are you sure you want to leave this page?')
            if(!confirmed) return
            this.goToList()
        },
        onSaveClicked(form) {
            this.save(form)
        },
        goToList() {
            this.$router.push({name: listRouteName})
        },
        async save(data) {
            try {
                const response = await directus.items(collection).updateOne(this.id, data)
                // console.log(response)
                alert('saved successfully')
                this.goToList()
            } catch (error) {
                console.error(error)
                alert(error)
            }
        }
    },
    watch: {
        item: {
            immediate: true,
            handler(item) {
                this.fields.forEach(field => {
                    field.value = item?.[field.name]
                });
            }
        }
    }
    
}
</script>

<style scoped>
.buttons {
    display: flex;
    gap: 5px;
}
</style>