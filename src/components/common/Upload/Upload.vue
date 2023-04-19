<template>
  <div>

    <!-- <button class="btn btn-sm btn-outline-secondary" @click="onUploadClicked">
      <font-awesome-icon icon="fa-times" fixed-width/>
    </button> -->
    
    <DragAndDrop @filesDropped="onFilesDropped">
      <ChooseFilesButton @filesSelected="onFilesSelected"/>
      <template #footer>
        <ProgressBar :loaded="progressLoaded" :total="progressTotal"/>
      </template>
    </DragAndDrop>

    <div class="d-flex flex-column gap-2 mt-2 file-list-wrapper">
      <template v-for="(file, index) in uploads">
          <FileEntry :file="file" @fileRemoved="onFileRemoved"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { client } from '@/API'
import ChooseFilesButton from './ChooseFilesButton.vue'
import DragAndDrop from '@/components/common/Upload/DragAndDrop.vue'
import FileEntry from './FileEntry.vue'
import ProgressBar from './ProgressBar.vue';

const files = ref(new Set())
const uploads = ref(new Set())

const progressLoaded = ref(0)
const progressTotal = ref(0)

function addFiles(_files) {
  for (const _file of _files) {
    if(files.value.has(_file)) continue
    files.value.add(_file)
  }
  uploadFiles()
}

async function uploadFiles() {
  if(files.value.length===0) return
  const formData = new FormData()
  for (const _file of files.value) {
    formData.append('files[]', _file)
  }
  const options = {
    transport: {
      onUploadProgress: (ProgressEvent) => {
          progressLoaded.value = ProgressEvent.loaded
          progressTotal.value = ProgressEvent.total
      }
    }
  }
  const _directus = client(options)
  let list = await _directus.files.createOne(formData)
  files.value.clear()
  if(!Array.isArray(list)) list = [list]
  for (const item of list) {
    uploads.value.add(item)
  }
}

function onFilesSelected(_files) {
  addFiles(_files)
}

function onUploadClicked() {
    uploadFiles()
}

function onFilesDropped(_files) {
  addFiles(_files)
}
function onFileRemoved(_file) {
  console.log(_file)
  uploads.value.delete(_file)
}
</script>

<style scoped>


</style>