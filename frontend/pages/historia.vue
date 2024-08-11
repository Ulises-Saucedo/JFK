<script setup lang="ts">
useHead({
  title: "Historia",
});
</script>

<template>
  <div class="my-16 max-w-screen-md mx-auto px-8">
    <h2 class="text-black text-5xl font-bold text-center">Nuestra historia</h2>
    <section class="space-y-4 my-8">
      <p class="text-black">
        La Escuela Técnica de Oficios de Lanús fue creada en 1943 con el
        objetivo de formar obreros calificados en diversas actividades
        industriales. Inició sus clases en 1944 con 70 alumnos y rápidamente
        creció en número, lo que llevó a la necesidad de expandir sus
        instalaciones. En 1945, la escuela se trasladó a un nuevo edificio en
        Lanús Este, donde comenzó a ofrecer formación en mecánica, otorgando
        títulos de Experto Mecánico y Experto Calificado Mecánico.
      </p>
      <p class="text-black">
        A lo largo de los años, la escuela evolucionó y se consolidó como un
        referente en educación técnica en la región. En 1952, se transformó en
        la Escuela Industrial de la Nación con especialidad en Mecánica, y en
        1968 incorporó la especialidad de Electromecánica. El crecimiento
        continuo llevó a la creación de un nuevo edificio, inaugurado en 1973, y
        posteriormente se anexó un campo de deportes en 1982.
      </p>
      <p class="text-black">
        En 1988, el Anexo de la escuela se convirtió en la Escuela Nacional de
        Educación Técnica Nº3 de Lanús, con especialidad en Electrónica. En
        1997, la escuela sumó la especialidad de Informática, adaptándose a los
        cambios educativos de la época. Hoy, la institución cuenta con más de
        1100 alumnos, ofreciendo formación técnica en Electromecánica e
        Informática, y sigue destacándose por su calidad educativa en
        evaluaciones a nivel regional y provincial.
      </p>
    </section>
    <DownloadButton
      href="/files/eet5_historia.pdf"
      download="historia.pdf"
      text="Descargar historia en PDF"
    />
  </div>
</template>
