<script setup lang="ts">
import { Toaster } from 'vue-sonner'
</script>

<template>
  <Toaster position="top-right" richColors />

  <RouterView></RouterView>
</template>

<style>
.carousel {
  display: flex;
  flex-direction: column;
}
</style>
