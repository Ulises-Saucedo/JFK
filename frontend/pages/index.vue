<script setup lang="ts">
import { tech, testimonials } from "~/constants";

useHead({
  title: "Inicio",
});
</script>

<template>
  <section
    class="max-w-screen-lg mx-auto my-16 h-[calc(100dvh-200px)] flex flex-col items-center justify-center gap-y-8"
  >
    <h2
      class="text-5xl text-transparent font-bold uppercase bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-center"
    >
      John Fitzgerald Kennedy
    </h2>
    <img
      src="/logotipo.png"
      alt="Logotipo de la escuela"
      class="w-64"
      data-aos="fade-up"
    />
  </section>
  <section class="max-w-screen-lg mx-auto my-32 p-4" data-aos="fade-up">
    <h3 class="text-3xl font-bold text-black text-center block mb-4">
      Tecnicaturas
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Tech
        class="p-4 bg-white ring-1 ring-gray-100 shadow rounded-lg space-y-2"
        v-for="(t, idx) in tech"
        :tech="t"
        :key="idx"
      />
    </div>
  </section>
  <section class="mt-16 py-12 px-8 bg-gray-100">
    <h3 class="text-3xl font-bold text-black text-center block mb-8">
      Testimonios
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Testimonial
        v-for="(testimonial, idx) in testimonials"
        :testimonial="testimonial"
        :key="idx"
      />
    </div>
  </section>
</template>
