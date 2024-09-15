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
import { electromechanicalSubjects as subjects } from "~/constants";

useHead({
  title: "Electromecánica",
});

const slides = [
  "/images/electromechanical/electromecanica-1.jpg",
  "/images/electromechanical/electromecanica-2.jpg",
  "/images/electromechanical/electromecanica-3.jpg",
];
</script>

<template>
  <div class="my-16 max-w-[1000px] mx-auto px-6 space-y-4">
    <h2 class="text-3xl md:text-5xl font-bold break-words">
      Descubra
      <span class="text-blue-500 uppercase">Electromecánica</span>
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
      La Tecnicatura en Electromecánica forma profesionales capacitados en el
      mantenimiento, diseño, y reparación de sistemas electromecánicos. A lo
      largo de la carrera, los estudiantes adquieren conocimientos en
      electricidad, mecánica, automatización, y control de procesos
      industriales. Con un enfoque práctico, la tecnicatura prepara a los
      alumnos para trabajar en una variedad de industrias, brindándoles las
      herramientas necesarias para resolver problemas técnicos y mejorar la
      eficiencia operativa en distintos entornos productivos.
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
