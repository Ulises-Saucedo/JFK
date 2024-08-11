<script setup lang="ts">
defineProps({
  slides: {
    type: Array<string>,
    required: true,
  },
});
</script>

<template>
  <Swiper
    :height="400"
    :slides-per-view="1"
    :modules="[SwiperAutoplay]"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
      <img
        :src="slide"
        :alt="'Imagen_' + idx"
        class="h-[500px] object-cover rounded-lg"
      />
    </SwiperSlide>
  </Swiper>
</template>
