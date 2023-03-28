<template>
    <template v-if="field.type=='manyToMany'">
        <ManyToManyField v-model="field.value" :field="field" />
    </template>
    <template v-else-if="field.type=='checkbox'">
        <Checkbox v-model="field.value" :field="field" />
    </template>
    <template v-else-if="field.type=='toggle'">
        <Toggle v-model="field.value" :field="field" />
    </template>
    <template v-else-if="field.type=='radio'">
        <Radio v-model="field.value" :field="field" />
    </template>
    <template v-else-if="field.type=='select'">
        <SelectDropdown v-model="field.value" :field="field" />
    </template>
    <template v-else-if="field.type=='simple-select'">
        <SelectSimple v-model="field.value" :field="field" />
    </template>
    <template v-else>
        <label :for="`field-${field.name}`" class="form-label" v-html="field.label"></label>
        <input :type="field.type" :id="`field-${field.name}`" class="form-control" v-model="field.value">
    </template>
</template>

<script setup>
import ManyToManyField from './ManyToMany.vue'
import Toggle from './Toggle.vue'
import Checkbox from './Checkbox.vue'
import SelectDropdown from './SelectDropdown.vue'
import SelectSimple from './SelectSimple.vue'
import Radio from './Radio.vue'

</script>

<style scoped>

</style>