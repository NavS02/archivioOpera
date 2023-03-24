<template>
    <!-- header -->
    <slot name="header" :data="data" :fields="fields"></slot>

    <div class="row">
        <template v-for="(field, index) in fields" :key="index">
           
              
                <slot :name="`field-${field.name}`" :data="data" :fields="fields" :field="field">
                    <template v-if="field.type=='manyToMany'">
                        <div id="alignp-1" :class="`col-md-${field.column}`">
                        <label :for="`field-${field.name}`" class="form-label" v-html="field.label"></label>
                        <ManyToManyField v-model="field.value" :field="field" />
                        </div>
                    </template>
                    <template v-else-if="field.type=='textarea'">
                        <div id="alignp-1" :class="`col-md-${field.column}`">
                        <label :for="`field-${field.name}`" class="form-label" v-html="field.label"></label>
                        <textarea :type="field.type" :id="`field-${field.name}`" class="form-control" rows="5"  v-model="field.value"></textarea>
                        </div>
                    </template>
                    <template v-else-if="field.type=='biglabel'">
                        <div id="alignp-1" :class="`col-md-${field.column}`">
                    <h3 class="display-7">{{ field.label }}</h3>
                         </div>
                    </template>
                    <template v-else>
                        <div id="alignp-1" :class="`col-md-${field.column}`">
                        <label :for="`field-${field.name}`" class="form-label" v-html="field.label"></label>
                        <input :type="field.type" :id="`field-${field.name}`"  class="form-control col col-lg-2" v-model="field.value">
                        </div>
                    </template>
                </slot>
            
        </template>
        <!-- extra content in the body -->
        <slot :data="data" :fields="fields"></slot>
    </div>

    <!-- footer -->
    <slot name="footer" :data="data" :fields="fields"></slot>

</template>

<script>
import { ref, toRefs, watch, computed } from 'vue'
import ManyToManyField from './ManyToManyField.vue'

export default {
    name: 'Form',
    components: { ManyToManyField },
    setup(props, context) {
        const {fields} = toRefs(props)

        const data = computed(() => {
            const onlyDirty = fields.value.filter(field => field.dirty===true)
            const keyValuesList = onlyDirty.map(field => [field.name, field.value])
            const _data = Object.fromEntries(keyValuesList)
            context.emit('update:modelValue', _data)
            return _data
        }) // form data (will be passed as prop in the slots)

        return {
            fields, data,
        }
    },
    emits: ['update:modelValue'],
    props: {
        fields: { type: Array, default: [] },
        modelValue: { type: [Array,Object], default: [] },
    },
}
</script>

<style scoped>
div#alignp-1 {
    padding: 12px;
}
</style>