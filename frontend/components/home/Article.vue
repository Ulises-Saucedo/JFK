<script setup lang="ts">
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

const backgroundImage = `url("${props.img}") center center / cover no-repeat`;
</script>

<template>
  <article
    class="relative flex items-end w-full h-96 py-4 px-6 rounded-lg overflow-hidden"
    data-aos="zoom-in-up"
    :style="{ background: backgroundImage }"
  >
    <div
      class="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black/75 to-transparent"
    />

    <footer class="relative z-20 group">
      <NuxtLink :to="to" class="block">
        <h2
          class="text-white text-3xl group-hover:text-blue-500 duration-200 ease-in font-semibold"
        >
          <slot name="title" />
        </h2>
        <p class="text-white/75">
          <slot name="description" />
        </p>
      </NuxtLink>
    </footer>
  </article>
</template>
