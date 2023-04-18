<template>
<div style="height: 20px;">
    <template v-if="percentage<100 && percentage>0">
    <div class="progress" style="height: 20px;">
        <div :class="progressClasses" role="progressbar" :style="`width: ${percentage}%`" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <!-- <span v-if="percentage>0">{{percentage}}%</span> -->
        </div>
    </div>
    </template>
</div>
</template>

<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
    loaded: { type: Number, default: 0},
    total: { type: Number, default: 0},
})

const {loaded, total} = toRefs(props)

const percentage = computed( () => {
    return (loaded.value / total.value) * 100
} )

const progressClasses = computed( () => {
  return {
    'progress-bar': true,
    'progress-bar-striped': true,
    'progress-bar-animated': percentage<100,
    'bg-success': percentage==100,
  }
} )
</script>

<style scoped>

</style>