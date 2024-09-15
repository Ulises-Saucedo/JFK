<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <h4 class="text-2xl font-bold">{{ title }}</h4>
    <ul>
      <li class="flex items-center" v-for="(item, idx) in items" :key="idx">
        <Icon
          name="tabler:arrow-badge-right-filled"
          class="mr-2 text-blue-500 text-lg"
        />
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
