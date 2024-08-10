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
    class="block"
    :class="[$route.path === to ? 'text-blue-500' : 'text-black']"
  >
    {{ text }}
  </NuxtLink>
</template>
