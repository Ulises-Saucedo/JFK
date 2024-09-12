<script setup lang="ts">
import type { Testimonial } from "~/types/testimonial";

const props = defineProps({
  testimonial: {
    type: Object as () => Testimonial,
    required: true,
  },
});

const { name, role, testimonial } = props.testimonial;
</script>

<template>
  <div class="bg-blue-50 p-6 rounded justify-center max-w-screen-sm">
    <h5 class="font-semibold text-2xl">{{ name }}</h5>
    <h6 class="">{{ role }}</h6>
    <blockquote class="mt-2 italic">
      {{ testimonial }}
    </blockquote>
  </div>
</template>
