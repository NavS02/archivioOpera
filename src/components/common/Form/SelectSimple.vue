<template>
    <div class="d-flex flex-column">
        <slot name="label">
            <label :for="`field-${field.name}`" class="form-label" v-html="field.label"></label>
        </slot>

        <select v-model="selected" :id="`field-${field.name}`">
            <option :value="null" v-text="field.emptyText"></option>
            <template v-for="(option, index) in field.options" :key="index">
                <option :value="option.value" v-html="option.label ?? option.value"></option>
            </template>
        </select>


    </div>
</template>

<script setup>
import { toRefs, computed } from 'vue'
import SelectField from '../../../models/SelectField'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: { type: [String, Boolean, Number], default: '' },
    field: { type: SelectField, default: null },
})

const {field} = toRefs(props)

const selected = computed({
    get() { return field.value.value },
    set(value) {
        emit('update:modelValue', value)
    },
})

</script>

<style scoped>

</style>