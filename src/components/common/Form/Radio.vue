<template>

    <label class="mb-2" v-html="field.label"></label>
    
    <div :class="{['d-flex flex-row gap-2']: field.inline}">
        <template v-for="(choice, index) in field.choices" :key="index">
            <div class="form-check">
                <label class="form-check-label" :for="`choice-${choice.value}`" v-html="choice.label"></label>
                <input class="form-check-input" type="radio" v-model="checked"
                :name="`choice-${field.name}`" :id="`choice-${choice.value}`" :value="choice.value">
            </div>
        </template>
    </div>
</template>

<script setup>
import { toRefs, computed } from 'vue'
import { RadioField } from '../../../models';

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: { type: [String, Boolean, Number], default: '' },
    field: { type: RadioField, default: null },
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