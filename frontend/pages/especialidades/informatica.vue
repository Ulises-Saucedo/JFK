<script setup lang="ts">
useHead({
  title: "Informática",
});

const slides = [
  "/images/informatica-1.jpg",
  "/images/informatica-2.jpg",
  "/images/informatica-3.jpg",
];
</script>

<template>
  <div class="my-16 max-w-screen-md mx-auto px-8">
    <h2 class="text-black text-center text-5xl font-bold my-8">Informática</h2>
    <Carousel :slides="slides" />

    <p class="text-black my-8">
      La Tecnicatura en Informática está diseñada para formar especialistas en
      el manejo y administración de sistemas informáticos. Durante la carrera,
      los estudiantes desarrollarán habilidades en áreas como redes, seguridad
      informática, bases de datos, y soporte técnico, aprendiendo a implementar
      y gestionar soluciones tecnológicas eficientes. Con un enfoque práctico y
      actualizado, esta tecnicatura prepara a los futuros profesionales para
      enfrentar los retos del entorno digital y satisfacer las necesidades del
      mercado laboral en el campo de la informática.
    </p>

    <DownloadButton
      href="/files/curriculas/informatica.pdf"
      download="pde_informatica.pdf"
      text="Plan de estudios"
    />
  </div>
</template>
