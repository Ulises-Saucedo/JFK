<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true,
  },
  download: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    role="button"
    class="bg-blue-500 ring-blue-600 ring-1 rounded-md hover:bg-blue-600 ease-in-out duration-200 block text-center text-white px-4 py-2"
    :href="href"
    :download="download"
  >
    {{ text }}
  </a>
</template>
