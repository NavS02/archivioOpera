<template>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" :id="`field-${field.name}`" value="1" v-model="checked">
        <label class="form-check-label" :for="`field-${field.name}`" v-html="field.label"></label>
    </div>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'
import FormField from '../../../models/FormField'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: { type: Boolean, default: false },
    field: { type: FormField, default: null },
})

const {field} = toRefs(props)

const checked = computed({
    get() { return field.value.value },
    set(value) {
        emit('update:modelValue', value)
    },
})

</script>

<style scoped>

</style>