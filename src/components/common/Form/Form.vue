<template>
  <!-- header -->
  <slot name="header" :data="data" :fields="fields"></slot>

  <div class="row">
    <template v-for="(field, index) in fields" :key="index">
      <slot
        :name="`field-${field.name}`"
        :data="data"
        :fields="fields"
        :field="field"
      >
        <template v-if="field.type == 'manyToMany'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <ManyToMany v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'oneToMany'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <OneToMany v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'upload'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            {{field.label}}
            <Upload />
          </div>
        </template>
        <template v-else-if="field.type == 'manyToOne'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <ManyToOne v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'checkbox'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Checkbox v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'toggle'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Toggle v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'radio'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Radio v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'select'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <SelectDropdown v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'simple-select'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <SelectSimple v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'divider'">
          <Divider />
        </template>
        <template v-else-if="field.type == 'biglabel'">
          <div
            id="alignp-1"
            :class="`col-md-${field.column} text-primary text-large text-center`"
          >
            <h5
              class="display-7"
              style="text-align: left; color: black; text-decoration: underline"
            >
              {{ field.label }}
            </h5>
          </div>
        </template>
        <template v-else-if="field.type == 'textarea'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <label
              :for="`field-${field.name}`"
              class="form-label"
              v-html="field.label"
            ></label>
            <textarea
              :type="field.type"
              :id="`field-${field.name}`"
              class="form-control"
              rows="5"
              v-model="field.value"
            ></textarea>
          </div>
        </template>
        <template v-else>
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <label
              :for="`field-${field.name}`"
              class="form-label"
              v-html="field.label"
            ></label>
            <input
              :type="field.type"
              :id="`field-${field.name}`"
              class="form-control"
              v-model="field.value"
            />
          </div>
        </template>
      </slot>
    </template>
    <!-- extra content in the body -->
    <slot :data="data" :fields="fields"></slot>
  </div>
  <!-- {{ data }} -->
  <!-- footer -->
  <slot name="footer" :data="data" :fields="fields"></slot>
</template>

<script setup>
import { ref, toRefs, watch, computed } from "vue";
import ManyToMany from "./ManyToMany.vue";
import ManyToOne from "./ManyToOne.vue";
import Upload from "../Upload/Upload.vue";
import Toggle from "./Toggle.vue";
import Checkbox from "./Checkbox.vue";
import SelectDropdown from "./SelectDropdown.vue";
import SelectSimple from "./SelectSimple.vue";
import Radio from "./Radio.vue";
import Divider from "./Divider.vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  fields: { type: Array, default: [] },
  modelValue: { type: [Array, Object], default: [] },
});

const { fields } = toRefs(props);
let finalFields = ref([]);
const data = computed(() => {
  const onlyDirty = fields.value.filter((field) => field.dirty === true);
  const keyValuesList = onlyDirty.map((field) => [field.name, field.value]);
  const _data = Object.fromEntries(keyValuesList);
  emit("update:modelValue", _data);
  return _data;
});
</script>

<style scoped></style>
