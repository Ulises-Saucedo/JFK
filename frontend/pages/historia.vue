<script setup lang="ts">
import TimelineCard from "~/components/history/TimelineCard.vue";
import { timelineItems } from "~/constants";

useHead({
  title: "Historia",
});
</script>

<template>
  <div class="my-16 max-w-screen-md mx-auto px-8">
    <h2 class="text-5xl font-bold text-center">Nuestra historia</h2>

    <div
      class="my-16 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
    >
      <TimelineCard v-for="(item, idx) in timelineItems" :key="idx">
        <template #date>{{ item.date }}</template>
        <template #content>
          {{ item.content }}
        </template>
      </TimelineCard>
    </div>

    <div class="w-full flex justify-center">
      <Button class="bg-blue-600 hover:bg-blue-500" as-child>
        <a
          class="flex items-center"
          href="/files/eet5_historia.pdf"
          download="historia.pdf"
        >
          <Icon class="mr-2 text-lg" name="tabler:download" />
          <span>Descargar historia completa</span>
        </a>
      </Button>
    </div>
  </div>
</template>
