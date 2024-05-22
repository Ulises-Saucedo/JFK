<script setup lang="ts">
import { specialties } from '@/constants/specialties'
</script>

<template>
  <main class="p-4">
    <div class="hero min-h-[calc(100dvh-100px)]">
      <div class="hero-content text-center">
        <div class="max-w-md flex flex-col items-center gap-y-2">
          <h1 class="text-5xl font-bold w-fit">
            <RoughNotation :is-show="true" type="highlight" color="#b3ceff">
              <span>JFK</span>
            </RoughNotation>
          </h1>
          <h6 class="text-xl">John Fitzgerald Kennedy</h6>
          <p class="text-pretty">
            Preparamos a los estudiantes con habilidades prácticas y teóricas para enfrentar los
            desafíos del mundo tecnológico actual.
          </p>
          <RouterLink :to="{ name: 'history' }" class="btn btn-neutral px-12">Ver más</RouterLink>
        </div>
      </div>
    </div>
  </main>

  <div class="my-32 max-w-[1200px] mx-auto p-6 space-y-8">
    <h2 class="text-5xl font-bold w-fit mx-auto">
      <RoughNotation :is-show="true" type="highlight" color="#b3ceff">
        <span>Especialidades</span>
      </RoughNotation>
    </h2>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <AtroposCard v-for="(specialtie, i) in specialties" :key="i" :element="'atropos_' + i">
        <div
          class="w-full border border-stone-200 rounded p-6 hyphens-auto flex flex-col items-center gap-y-2 min-h-[250px] md:min-h-[350px]"
        >
          <h3 class="font-medium text-2xl">{{ specialtie.title }}</h3>
          <img :src="specialtie.icon" :alt="specialtie.title" class="h-32" />
          <p class="text-pretty text-center">{{ specialtie.description }}</p>
        </div>
      </AtroposCard>
    </section>
  </div>
</template>
