<script setup lang="ts">
useHead({
  title: "Electromecánica",
});

const slides = [
  "/images/electromecanica-1.jpg",
  "/images/electromecanica-2.jpg",
  "/images/electromecanica-3.jpg",
];
</script>

<template>
  <div class="my-16 max-w-screen-md mx-auto px-8">
    <h2 class="text-black text-center text-5xl font-bold my-8">
      Electromecanica
    </h2>
    <Carousel :slides="slides" />

    <p class="text-black my-8">
      La Tecnicatura en Electromecánica forma profesionales capacitados en el
      mantenimiento, diseño, y reparación de sistemas electromecánicos. A lo
      largo de la carrera, los estudiantes adquieren conocimientos en
      electricidad, mecánica, automatización, y control de procesos
      industriales. Con un enfoque práctico, la tecnicatura prepara a los
      alumnos para trabajar en una variedad de industrias, brindándoles las
      herramientas necesarias para resolver problemas técnicos y mejorar la
      eficiencia operativa en distintos entornos productivos.
    </p>

    <DownloadButton
      href="/files/curriculas/electromecanica.pdf"
      download="pde_electromecanica.pdf"
      text="Plan de estudios"
    />
  </div>
</template>
