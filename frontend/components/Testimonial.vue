<script setup lang="ts">
import type { Testimonial } from "~/types/testimonial";

const props = defineProps({
  testimonial: {
    type: Object as Testimonial,
    required: true,
  },
});

const { name, role, testimonial } = props.testimonial;
</script>

<template>
  <div
    class="bg-white p-6 flex flex-col justify-center gap-y-2"
    data-aos="flip-right"
  >
    <h5 class="text-black">{{ name }}</h5>
    <h6 class="text-black">{{ role }}</h6>
    <blockquote class="italic text-black">
      {{ testimonial }}
    </blockquote>
  </div>
</template>
