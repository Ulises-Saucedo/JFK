<script setup lang="ts">
import InscriptionDoc from '@/assets/documentation/DOCUMENTACION_INSCRIPCION.pdf'
import MathsBook from '@/assets/documentation/CUADERNILLO_MTM_1.pdf'
import LanguagePracticeBook from '@/assets/documentation/CUADERNILLO_PLG_1.pdf'
</script>

<template>
  <div class="max-w-[1200px] mx-auto my-12 p-2 space-y-12">
    <h2 class="text-center text-3xl sm:text-5xl font-bold">Inscripción de ingresantes 2024</h2>
    <div class="space-y-4">
      <p>
        Haremos un primer acercamiento para quienes deseen inscribirse a
        <span class="font-bold">
          1° año en el ciclo lectivo 2024. Del 23 al 26 de octubre de 2023 de 09 a 11 hs y de 14 a
          16 hs.
        </span>
      </p>
      <p>
        Se deberá presentar fotocopia del DNI del alumno y certificado de alumno regular de la
        escuela a la cual asiste. Además, se tomarán datos e información particular de contacto para
        conformar un registro.
      </p>
      <p>
        Una vez realizado este primer contacto de forma personal su hijo/a quedará registrado como
        solicitante de una vacante para cursar el año en el ciclo lectivo 2024.
      </p>
      <p class="font-bold">
        ACLARACIÓN IMPORTANTE: La conformación del registro de contacto no implica reserva de
        vacante y/o turno
      </p>
      <p>
        La inscripción definitiva se realizará a partir del momento en que el alumno haya promovido
        el año en curso y de acuerdo al siguiente cronograma:
      </p>
      <ul class="space-y-2">
        <li>
          <span class="font-bold">A partir del 11/12:</span> Los sres. Padres deberán descargar de
          <span class="font-bold">www.eest5lanus.edu.ar</span> sección
          <span class="font-bold">“INSCRIPCIÓN”</span>, botón
          <span class="font-bold">“DOCUMENTACIÓN</span>
          INSCRIPCIÓN” los formularios y autorizaciones que deberán completar y firmar. Para ser
          presentados en la inscripción definitiva.
        </li>
        <li>
          <span class="font-bold">26/12 al 28/12:</span> Inscripción definitiva, para lo cual los
          Sres. Padres deberán concurrir con la
          <span class="font-bold">documentación descargada completa y firmada</span>. Agregando en
          una carpeta de 3 solapas color verde:
          <span class="font-bold">
            fotocopia de la partida de nacimiento, fotocopia de DNI (2 juegos), fotocopia del CUIL
            del alumno, fotocopia DNI padres o tutor responsable, fotocopia de CUIL de los padres o
            tutor, fotocopia del plan de vacunación y constancia de aprobación de 6to grado.
          </span>
        </li>
      </ul>
      <p>La misma se reanudará a partir del día 12 de febrero de 2024 en el mismo horario.</p>
      <p>
        Informamos que la Dirección del Establecimiento decidirá la asignación de los
        <span class="font-bold">turnos</span> de acuerdo a las vacantes disponibles y a la
        <span class="font-bold">prioridad de la inscripción definitiva</span>. Los alumnos
        ingresantes a 1º año del ciclo básico deberán adquirir en la librería del establecimiento el
        cuadernillo de actividades de nivelación de Prácticas del Lenguaje y Matemática al momento
        de la inscripción definitiva.
      </p>
    </div>
    <div class="flex flex-col gap-y-2">
      <a :href="InscriptionDoc" download="DOCUMENTAR_INSCRIPCION.pdf" class="btn btn-neutral">
        Documentar inscripción
      </a>
      <a :href="MathsBook" download="CUADERNILLO_MTM_1.pdf" class="btn btn-neutral">
        Cuadernillo primer año de matemáticas
      </a>
      <a :href="LanguagePracticeBook" download="CUADERNILLO_PLG_1.pdf" class="btn btn-neutral">
        Cuadernillo primer año de prácticas del lenguaje
      </a>
    </div>
  </div>
</template>
