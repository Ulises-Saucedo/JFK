<script setup lang="ts">
import type { Tech } from "~/types/tech";

const props = defineProps({
  tech: {
    type: Object as Tech,
    required: true,
  },
});

const { name, icon, description } = props.tech;
</script>

<template>
  <div class="p-4 bg-white ring-1 ring-gray-100 shadow rounded-lg space-y-2">
    <h4 class="text-xl font-bold text-black text-center">{{ name }}</h4>
    <figure>
      <BootstrapIcon
        :name="icon"
        class="text-7xl text-black block text-center"
      />
    </figure>
    <p class="text-gray-600 text-center text-pretty">
      {{ description }}
    </p>
  </div>
</template>
