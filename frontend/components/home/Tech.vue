<script setup lang="ts">
import type { Tech } from "~/types/tech";

const props = defineProps({
  tech: {
    type: Object as () => Tech,
    required: true,
  },
});

const { name, description } = props.tech;
</script>

<template>
  <div class="rounded-b shadow bg-white ring-gray-100 rounded">
    <div class="bg-blue-500 p-4">
      <h4 class="text-xl text-white font-bold text-center">{{ name }}</h4>
    </div>
    <div class="p-4">
      <p class="text-center text-balance">
        {{ description }}
      </p>
    </div>
  </div>
</template>
