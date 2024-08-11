<script setup lang="ts">
useHead({
  title: "Programación",
});

const slides = [
  "/images/programacion-1.jpg",
  "/images/programacion-2.jpg",
  "/images/programacion-3.jpg",
];
</script>

<template>
  <div class="my-16 max-w-screen-md mx-auto px-8">
    <h2 class="text-black text-center text-5xl font-bold my-8">Programación</h2>
    <Carousel :slides="slides" />
    <p class="text-black my-8">
      La Tecnicatura en Programación es una carrera orientada a formar
      profesionales capacitados en el desarrollo de software y aplicaciones. A
      lo largo de la cursada, los estudiantes adquirirán conocimientos en
      lenguajes de programación, bases de datos, y herramientas modernas para la
      creación de soluciones tecnológicas. Además, se fomenta el aprendizaje
      práctico a través de proyectos que simulan situaciones reales, preparando
      a los futuros técnicos para enfrentar los desafíos del mercado laboral en
      el ámbito de la programación.
    </p>

    <DownloadButton
      href="/files/curriculas/programacion.pdf"
      download="pde_programacion.pdf"
      text="Plan de estudios"
    />
  </div>
</template>
