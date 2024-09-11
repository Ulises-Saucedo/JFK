<script setup lang="ts">
defineProps({
  to: {
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
  <NuxtLink
    :to="to"
    class="block px-4 rounded py-1 hover:bg-blue-50 font-medium"
    :class="[$route.path === to && 'text-blue-500 bg-blue-50']"
  >
    {{ text }}
  </NuxtLink>
</template>
