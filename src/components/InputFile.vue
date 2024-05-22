<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String
  },
  value: {
    type: String,
    default: ''
  }
})

const { errorMessage, handleChange } = useField(props.id, undefined, {
  initialValue: props.value
})
</script>

<template>
  <div class="space-y-1">
    <label :id="id" :label="label" :label-for="id" v-if="label">
      {{ label }}
    </label>
    <input
      :id="id"
      type="file"
      @input="handleChange"
      class="file-input file-input-bordered w-full"
      :class="!!errorMessage ? 'border-red-500' : 'border-custom-primary'"
    />

    <div v-if="!!errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</div>
  </div>
</template>
