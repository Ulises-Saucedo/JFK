<script setup lang="ts">
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import SubjectCard from "~/components/specialties/SubjectCard.vue";
import { computingSubjects as subjects } from "~/constants";

useHead({
  title: "Informática",
});

const slides = [
  "/images/computing/informatica-1.jpg",
  "/images/computing/informatica-2.jpg",
  "/images/computing/informatica-3.jpg",
];
</script>

<template>
  <div class="my-16 max-w-[1000px] mx-auto px-6 space-y-4">
    <h2 class="text-3xl md:text-5xl font-bold break-words">
      Descubra
      <span class="text-blue-500 uppercase">Informática</span>
    </h2>

    <Carousel
      class="relative w-full"
      :plugins="[
        Autoplay({
          delay: 5000,
        }),
      ]"
    >
      <CarouselContent>
        <CarouselItem v-for="(image, index) in slides" :key="index">
          <div class="p-1">
            <img
              :src="image"
              class="w-full h-[250px] md:h-[550px] object-cover object-center rounded border"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <p class="text-balance text-lg">
      La Tecnicatura en Informática está diseñada para formar especialistas en
      el manejo y administración de sistemas informáticos. Durante la carrera,
      los estudiantes desarrollarán habilidades en áreas como redes, seguridad
      informática, bases de datos, y soporte técnico, aprendiendo a implementar
      y gestionar soluciones tecnológicas eficientes. Con un enfoque práctico y
      actualizado, esta tecnicatura prepara a los futuros profesionales para
      enfrentar los retos del entorno digital y satisfacer las necesidades del
      mercado laboral en el campo de la informática.
    </p>

    <Tabs default-value="plan" class="w-full">
      <TabsList class="w-full bg-blue-500">
        <TabsTrigger value="plan" class="w-full text-white">
          Plan de estudio
        </TabsTrigger>
      </TabsList>
      <TabsContent value="plan">
        <Card>
          <CardHeader>
            <CardTitle>Plan de estudio</CardTitle>
            <CardDescription>
              Asegurese de leer el plan de estudio.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <SubjectCard
              v-for="(item, idx) in subjects"
              :key="idx"
              :title="item.title"
              :items="item.items"
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
