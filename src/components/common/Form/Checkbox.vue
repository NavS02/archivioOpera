<template>
    <div class="d-flex flex-column">
        <label class="mb-2" :for="`field-${field.name}`" v-html="field.label"></label>

        <div :class="{['d-flex flex-row gap-2']: field.inline}">
            <template v-for="(option, index) in field.options" :key="index">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :id="`field-${option.value}`" :value="option.value" v-model="selected">
                    <label class="form-check-label" :for="`field-${option.value}`" v-html="option.label"></label>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs, computed } from "vue";
import FormField from "../../../models/FormField";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: "",
    validator: (value) => {
      return typeof value === "string" || Array.isArray(value);
    },
  },
  field: { type: FormField, default: null },
});

const { field } = toRefs(props);

const selected = computed({
  get() {
    return field.value.value ?? [];
  },
  set(value) {
    console.log(field.value.value)
    emit("update:modelValue", field.value.options[0].value);

    }
});
</script>

<style scoped></style>
