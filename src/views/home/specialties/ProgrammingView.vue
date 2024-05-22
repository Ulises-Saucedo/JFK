<script setup lang="ts">
import { programmingCarouselImages } from '@/constants/specialties'
import { faqProgrammingInformation } from '@/constants/specialties'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import FAQAccordion from '@/components/FAQAccordion.vue'
</script>

<template>
  <div class="w-full md:w-3/4 mx-auto space-y-4">
    <div>
      <small class="text-lg">Bienvenido a</small>
      <h2 class="text-3xl sm:text-5xl font-bold">Programación</h2>
    </div>

    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(slide, i) in programmingCarouselImages" :key="i">
        <div class="carousel__item w-full h-[550px]">
          <img
            :src="slide.src"
            :alt="'electromechanical-image-' + i"
            class="w-full h-full object-cover"
          />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>

  <div class="w-full md:w-3/4 mx-auto space-y-4 my-32">
    <FAQAccordion>
      <template v-slot:faq-vg>
        <div class="space-y-4">
          <p v-for="(generalInfo, i) in faqProgrammingInformation.overview" :key="i">
            {{ generalInfo }}
          </p>
        </div>
      </template>
      <template v-slot:faq-study-1>
        <div class="space-y-4">
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formación general</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.fourth_year.general"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formacion Cientifico Tecnologico</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.fourth_year
                  .scientificTechnologicalTraining"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formacion Cientifico Tecnologico</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.fourth_year
                  .specificTechnicalTraining"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template v-slot:faq-study-2>
        <div class="space-y-4">
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formación general</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.fifth_year.general"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formacion Cientifico Tecnologico</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.fifth_year
                  .scientificTechnologicalTraining"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formacion Cientifico Tecnologico</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.fifth_year
                  .specificTechnicalTraining"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template v-slot:faq-study-3>
        <div class="space-y-4">
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formación general</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.sixth_year.general"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formacion Cientifico Tecnologico</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.sixth_year
                  .scientificTechnologicalTraining"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formacion Cientifico Tecnologico</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.sixth_year
                  .specificTechnicalTraining"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template v-slot:faq-study-4>
        <div class="space-y-4">
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Prácticas profesionalizantes</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.seventh_year.general"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formacion Cientifico Tecnologico</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.seventh_year
                  .scientificTechnologicalTraining"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="underline underline-offset-4">Formacion Cientifico Tecnologico</h4>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.studyPlan.seventh_year
                  .specificTechnicalTraining"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template v-slot:faq-ca>
        <div class="space-y-6">
          <div class="space-y-2">
            <h5>Los egresados podrán seguir las siguientes carreras:</h5>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.academic.careers"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h5>Universidades donde podes seguir estudiando:</h5>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-x-2"
                v-for="(item, i) in faqProgrammingInformation.academic.universities"
                :key="i"
              >
                <img src="@/assets/images/ArrowRight.svg" alt="arrow-right" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template v-slot:faq-pr>
        <div class="space-y-4">
          <p v-for="(generalInfo, i) in faqProgrammingInformation.practices" :key="i">
            {{ generalInfo }}
          </p>
        </div>
      </template>
    </FAQAccordion>
  </div>
</template>
