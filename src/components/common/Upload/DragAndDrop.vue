<template>
    <div
        class="drag-and-drop"
        :class="{ 'drag-over': isDragging }"
        @dragover.prevent="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
    >
        <div class="drag-and-drop__message">
            <div>
                <slot></slot>
            </div>
            <span>{{ message }}</span>
            <div>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
  
<script setup >
import { ref } from 'vue';

const emit = defineEmits(['files-dropped'])

const isDragging = ref(false);
const status = ref('');

const handleDragOver = (e) => {
e.preventDefault();
isDragging.value = true;
status.value = 'Dragging file(s)...';
};

const handleDragLeave = () => {
isDragging.value = false;
status.value = '';
};

const handleDrop = (e) => {
    e.preventDefault();
    isDragging.value = false;
    status.value = '';
    const files = e.dataTransfer.files;
    emit('files-dropped', files)
};

const message = isDragging.value ? 'Drop file(s) here' : 'Drag and drop file(s)';

</script>

<style>
.drag-and-drop {
display: flex;
align-items: center;
justify-content: center;
height: 300px;
border: 3px dashed #ccc;
border-radius: 10px;
}

.drag-and-drop__message {
font-size: 24px;
text-align: center;
}

.drag-and-drop.drag-over {
border-color: #00c853;
}
</style>