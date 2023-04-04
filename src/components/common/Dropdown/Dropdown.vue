<template>
    <div ref="dropDownElement" class="dropdown">

        <button class="btn dropdown-toggle" :class="classes" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <slot name="button">
                Dropdown button
            </slot>
        </button>
        <ul class="dropdown-menu">
            <slot></slot>
        </ul>
    </div>
</template>

<script setup>
import { ref, toRefs, computed, onMounted, defineProps } from 'vue'
import {Dropdown} from 'bootstrap'

const dropDownElement = ref(null)
const props = defineProps({
    variant: { type: String, default: 'secondary', validator(value) {
            return value?.match(/(?:outline-)?(primary|secondary|info|warning|danger)$/i)
        },
    },
    size: { type: String, default: '',
        validator(value) {
            return ['lg','sm',''].includes(value)
        }
    },
    fullWidth: { type: Boolean, default: false },
    // options for the Dropdown instance:
    boundary: { type: [String, HTMLElement], default: 'clippingParents'},
    reference: { type: [String, HTMLElement, Object], default: 'toggle',
        validator(value) {
            // The value must match one of these strings
            if(value instanceof HTMLElement) return true
            else if(value instanceof Object) return 'getBoundingClientRect' in value
            else return ['toggle', 'parent'].includes(value)
        },
    },
    display: { type: String, default: 'dynamic',
        validator(value) {
            return ['dynamic', 'static'].includes(value)
        },
    },
    offset: { type: [Array, String, Function], default: [0,2] }, // [skidding, distance].
    autoClose: { type: [Boolean, String], default: true },
    popperConfig: { type: [Object, Function, null], default: null }
})

const options = computed( () => {
    const _options = {}
    if(props.boundary) _options.boundary = props.boundary
    if(props.reference) _options.reference = props.reference
    if(props.display) _options.display = props.display
    if(props.offset) _options.offset = props.offset
    if(props.autoClose) _options.autoClose = props.autoClose
    if(props.popperConfig) _options.popperConfig = props.popperConfig
    return options
} )

const {size, variant, fullWidth} = toRefs(props)

/**
 * additional computed classes
 */
const classes = computed( () => {
    const _classes = [`btn-${variant.value}`]
    if(size.value) _classes.push(`btn-200`)
    if(fullWidth.value) _classes.push('w-100')
    return _classes
} )

const dropdown = onMounted( () => {
    const _dropdown = new Dropdown(dropDownElement.value, options.value)
} )
</script>

<style scoped>
</style>