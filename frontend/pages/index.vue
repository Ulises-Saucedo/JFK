<script setup lang="ts">
import { tech, testimonials } from "~/constants";
import Article from "~/components/home/Article.vue";
import Testimonial from "~/components/home/Testimonial.vue";
import Tech from "~/components/home/Tech.vue";

useHead({
  title: "Inicio",
});
</script>

<template>
  <section class="py-6 px-4 md:py-8 md:px-8 h-[calc(100dvh-100px)]">
    <div class="hero h-full relative rounded-lg overflow-hidden">
      <div
        class="absolute bottom-0 w-full h-96 bg-gradient-to-t from-black/75 to-transparent"
      />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-12">
        <h2
          class="text-white text-center text-5xl sm:text-6xl font-playfair-display italic"
        >
          John Fitzgerald Kennedy
        </h2>
      </div>
    </div>
  </section>

  <section class="py-6 px-4 md:py-8 md:px-8 gap-8 grid md:grid-cols-2">
    <Article img="/images/history.jpg" to="/historia">
      <template #title> Historia </template>
      <template #description>
        Descubre la trayectoria que nos ha llevado a ser lo que somos hoy.
        Explora los hitos más importantes y cómo hemos evolucionado a lo largo
        del tiempo.
      </template>
    </Article>
    <Article img="/images/paper.jpg" to="/noticias">
      <template #title> Noticias </template>
      <template #description>
        Mantente al día con las últimas novedades y acontecimientos que están
        marcando el presente y futuro de nuestra comunidad.
      </template>
    </Article>
  </section>

  <section class="bg-blue-50 my-32" data-aos="fade-up">
    <div class="bg-blue-500 py-8 px-4">
      <h3 class="text-3xl text-center text-white font-bold">
        Explora nuestras tecnicaturas
      </h3>
      <p class="text-lg text-center text-blue-200">
        Formación técnica de calidad para tu futuro profesional.
      </p>
    </div>
    <div
      class="grid md:grid-cols-3 justify-center gap-4 max-w-screen-2xl mx-auto py-32 px-4"
    >
      <Tech v-for="(t, idx) in tech" :tech="t" :key="idx" />
    </div>
  </section>

  <section class="my-32 px-8">
    <h3 class="text-3xl font-bold text-center block mb-8">
      Esto es lo que dicen nuestros estudiantes
    </h3>
    <NuxtMarquee class="space-x-6" gradient pause-on-hover>
      <div class="grid md:grid-cols-3 gap-6">
        <Testimonial
          v-for="(testimonial, idx) in testimonials"
          :testimonial="testimonial"
          :key="idx"
        />
      </div>
    </NuxtMarquee>
  </section>
</template>

<style scoped>
.hero {
  background: url("/hero_image.jpeg") center center / cover no-repeat;
}
</style>
