<script setup lang="ts">
import { onMounted } from 'vue'
import Atropos from 'atropos'
import 'atropos/css'

const props = defineProps({
  element: {
    type: String,
    required: true
  }
})

onMounted(() => {
  Atropos({
    el: `.${props.element}`,
    shadow: false,
    activeOffset: 10,
    rotateYMax: 5,
    rotateXMax: 5
  })
})
</script>

<template>
  <div class="atropos myAtropos" :class="[element]">
    <div class="atropos-scale">
      <div class="atropos-rotate">
        <div class="atropos-inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.myAtropos {
  max-width: 100%;
}
</style>
