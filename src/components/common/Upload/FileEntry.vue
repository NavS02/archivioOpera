<template>
<div class="d-flex flex-row gap-2 border border-light border-2 rounded p-2">
    <!-- <a href="#" :download="file.filename_download" @click.prevent="onDownloadClicked"></a> -->
        <template v-if="isImage">
            <img :src="thumbnail" />
        </template>
        <template v-else>
            <font-awesome-icon icon="fa-file" fixed-width :style="{height: `${imageOptions.height}px`, width: `${imageOptions.width}px`}"/>
        </template>
    <div class="d-flex flex-column">
        <span class="d-block mb-auto">{{file.title}}</span>
        <span class="d-block text-muted small">Uploaded: {{file.uploaded_on}}</span>
        <span class="d-block text-muted small">Size: {{file.filesize}}</span>
        <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-secondary" @click="onDownloadClicked">
                <font-awesome-icon icon="fa-download" fixed-width/>
            </button>
            <button class="btn btn-sm btn-outline-secondary" @click="onRemoveFileClicked">
                <font-awesome-icon icon="fa-trash" fixed-width/>
            </button>
        </div>
    </div>

</div>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue';
import { accessToken, baseURL } from '../../../API';

const emit = defineEmits(['file-removed'])

const props = defineProps({
    file: { type: Object, default: () => ({}) }
})

const {file} = toRefs(props)

const imageOptions = ref({
    fit: 'contain',
    width: 100,
    height: 100,
    quality: 80,
})

const isImage = computed( () => file.value?.type.match(/^image/i) )
const url = computed( () => `${baseURL}/assets/${file.value.id}?download=&access_token=${accessToken}` )
const thumbnail = computed( () => {
    const {fit, width, height, quality} = imageOptions.value
    let thumbnail = url.value + `&fit=${fit}&width=${width}&height=${height}&quality=${quality}`
    return thumbnail
} )

function onRemoveFileClicked() { emit('file-removed', file.value) }
function onDownloadClicked() {
    let downloadUrl = url.value
    location.href = downloadUrl
}
</script>

<style scoped>

</style>