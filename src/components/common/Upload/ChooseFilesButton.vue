<template>

    <label for="file-upload" class="custom-file-upload">
      <font-awesome-icon icon="fa-upload" fixed-width/>
    </label>
    <input ref="fileInput" id="file-upload" type="file" multiple @change="onFileChanged"/>
    
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['files-selected'])

const fileInput = ref()

function onFileChanged(event) {
  const {files:files} = fileInput.value
  emit('files-selected', files)
}

</script>

<style scoped>
input[type="file"] {
  display: none;
}

.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #444;
  border-radius: 4px;
}

.custom-file-upload:hover {
  background-color: #f7f7f7;
}

.custom-file-upload i {
  margin-right: 8px;
}
</style>