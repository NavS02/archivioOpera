<template>

    <div>
        <template v-for="(item, index) in items" :key="index">
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
        </template>
    </div>

</template>

<script>
import { ref, toRefs, computed, watch } from 'vue'
import {directus} from '../../../API/'

export default {
    setup(props, context) {

        const items = ref([])
        const {collection} = props
        

        async function search(query) {
            if(text.trim()=='') return
            const response = await directus.items(collection).readByQuery({
                filter: {
                    autn: {
                        _contains: text
                    }
                },
                limit: -1
            })
            const {data=[]} = response
            items.value = data
        }

        return {
            items,
            search,
        }
    },
    props: {
        collection: { type: String, default: '' },
        preview: { type: Function, },
    },
}
</script>

<style scoped>
.item {
    border: solid 1px rgb(0 0 0 / 0.15);
}
</style>