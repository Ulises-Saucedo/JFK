<script setup lang="ts">
defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(["changePage"]);

const handleClick = (page: number) => {
  emits("changePage", page);
};
</script>

<template>
  <button
    class="bg-blue-500 text-white font-semibold ring-1 ring-blue-600 px-4 py-1 rounded-sm shadow-sm"
    @click="handleClick(page)"
  >
    {{ page }}
  </button>
</template>
