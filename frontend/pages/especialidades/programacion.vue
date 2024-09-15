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
import { programmingSubjects as subjects } from "~/constants";

useHead({
  title: "Programación",
});

const slides = [
  "/images/programming/programacion-1.jpg",
  "/images/programming/programacion-2.jpg",
  "/images/programming/programacion-3.jpg",
];
</script>

<template>
  <div class="my-16 max-w-[1000px] mx-auto px-6 space-y-4">
    <h2 class="text-3xl md:text-5xl font-bold break-words">
      Descubra
      <span class="text-blue-500 uppercase">Programación</span>
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
      La Tecnicatura en Programación es una carrera orientada a formar
      profesionales capacitados en el desarrollo de software y aplicaciones. A
      lo largo de la cursada, los estudiantes adquirirán conocimientos en
      lenguajes de programación, bases de datos, y herramientas modernas para la
      creación de soluciones tecnológicas. Además, se fomenta el aprendizaje
      práctico a través de proyectos que simulan situaciones reales, preparando
      a los futuros técnicos para enfrentar los desafíos del mercado laboral en
      el ámbito de la programación.
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
