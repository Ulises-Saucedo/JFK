<script setup lang="ts">
useHead({
  title: "Inscripción",
});
</script>

<template>
  <div class="my-16 max-w-screen-md mx-auto px-8">
    <h2 class="text-black text-5xl font-bold text-center">
      Inscripción de ingresantes 2024
    </h2>
    <section class="space-y-4 my-8">
      <p class="text-black">
        Haremos un primer acercamiento para quienes deseen inscribirse a
        <span class="font-bold">
          1° año en el ciclo lectivo 2024. Del 23 al 26 de octubre de 2023 de 09
          a 11 hs y de 14 a 16 hs.
        </span>
      </p>
      <p class="text-black">
        Se deberá presentar fotocopia del DNI del alumno y certificado de alumno
        regular de la escuela a la cual asiste. Además, se tomarán datos e
        información particular de contacto para conformar un registro.
      </p>
      <p class="text-black">
        Una vez realizado este primer contacto de forma personal su hijo/a
        quedará registrado como solicitante de una vacante para cursar el año en
        el ciclo lectivo 2024.
      </p>
      <p class="text-black font-bold">
        ACLARACIÓN IMPORTANTE: La conformación del registro de contacto no
        implica reserva de vacante y/o turno.
      </p>
      <div>
        <p class="text-black">
          La inscripción definitiva se realizará a partir del momento en que el
          alumno haya promovido el año en curso y de acuerdo al siguiente
          cronograma:
        </p>
        <ul class="list-disc my-2 ms:2 sm:ms-6">
          <li class="text-black">
            <span class="font-bold"> A partir del 11/12: </span> Los sres.
            Padres deberán descargar de
            <span class="font-bold">www.eest5lanus.edu.ar</span> sección
            <span class="font-bold">“INSCRIPCIÓN”</span>, botón
            <span class="font-bold">“DOCUMENTACIÓN INSCRIPCIÓN”</span> los
            formularios y autorizaciones que deberán completar y firmar. Para
            ser presentados en la inscripción definitiva.
          </li>
          <li class="text-black">
            <span class="font-bold">26/12 al 28/12:</span> Inscripción
            definitiva, para lo cual los Sres. Padres deberán concurrir con la
            <span class="font-bold">
              documentación descargada completa y firmada.
            </span>
            Agregando en una carpeta de 3 solapas color verde: fotocopia de la
            partida de nacimiento,
            <span class="font-bold">
              fotocopia de DNI (2 juegos), fotocopia del CUIL del alumno,
              fotocopia DNI padres o tutor responsable, fotocopia de CUIL de los
              padres o tutor, fotocopia del plan de vacunación y constancia de
              aprobación de 6to grado.
            </span>
          </li>
        </ul>
      </div>
      <p class="text-black">
        La misma se reanudará a partir del día 12 de febrero de 2024 en el mismo
        horario.
      </p>
      <p class="text-black">
        Informamos que la Dirección del Establecimiento decidirá la asignación
        de los <span class="font-bold">turnos</span> de acuerdo a las vacantes
        disponibles y a la
        <span class="font-bold">prioridad de la inscripción definitiva</span>.
        Los alumnos ingresantes a 1º año del ciclo básico deberán adquirir en la
        librería del establecimiento el cuadernillo de actividades de nivelación
        de Prácticas del Lenguaje y Matemática al momento de la inscripción
        definitiva.
      </p>
    </section>
    <div class="space-y-2">
      <DownloadButton
        href="/files/DOCUMENTACION_INSCRIPCION.pdf"
        download="Documentacion.pdf"
        text="DOCUMENTACIÓN INSCRIPCIÓN"
      />
      <DownloadButton
        href="/files/CUADERNILLO_MTM_1.pdf"
        download="Cuadernillo_matematica.pdf"
        text="CUADERNILLO MATEMATICA 1ER AÑO"
      />
      <DownloadButton
        href="/files/CUADERNILLO_PLG_1.pdf"
        download="Cuadernillo_practicas_del_lenguaje.pdf"
        text="CUADERNILLO PDL 1ER AÑO"
      />
    </div>
  </div>
</template>
