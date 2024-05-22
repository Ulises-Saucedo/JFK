<script setup lang="ts">
import { useField } from 'vee-validate'
import { type InputType } from 'vee-validate'

const props = defineProps({
  type: {
    type: String as () => InputType | any,
    default: 'text'
  },
  id: {
    type: String,
    required: true
  },
  label: {
    type: String
  },
  placeholder: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})

const {
  value: inputValue,
  errorMessage,
  handleChange
} = useField(props.id, undefined, {
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
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      class="input input-bordered w-full"
      :class="!!errorMessage ? 'border-red-500' : 'border-custom-primary'"
    />

    <div v-if="!!errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</div>
  </div>
</template>
