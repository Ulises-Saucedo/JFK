<script setup lang="ts">
import type { Post } from "~/types/post";

const props = defineProps({
  post: {
    type: Object as Post,
    required: true,
  },
});

const { attributes } = props.post;
</script>

<template>
  <article class="shadow-sm ring-1 ring-gray-100 rounded overflow-hidden">
    <header class="bg-blue-500 p-4">
      <img
        src="/logotipo.png"
        alt="Logotipo de la escuela"
        class="w-20 mx-auto"
      />
    </header>
    <section class="p-4 space-y-2">
      <NuxtLink
        :to="`/noticias/${attributes.slug}`"
        class="text-black text-pretty font-bold underline"
      >
        {{ attributes.title }}
      </NuxtLink>

      <p class="text-gray-600 line-clamp-3">
        {{ attributes.description }}
      </p>
    </section>
  </article>
</template>
