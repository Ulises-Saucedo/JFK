<script setup lang="ts">
const isActive: Ref<boolean> = ref(false);

defineProps({
  activeRoute: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const activateDropdown = () => {
  isActive.value = !isActive.value;
  const element = document.getElementById("dropdown");
  element?.classList.toggle("active");
};
</script>

<template>
  <div class="relative">
    <button
      @click="activateDropdown"
      :class="
        $route.path.includes(activeRoute) ? 'text-blue-500' : 'text-black'
      "
    >
      {{ text }}
      <span class="ms-1">
        <BootstrapIcon :name="isActive ? 'arrow-up' : 'arrow-down'" />
      </span>
    </button>
    <div class="relative">
      <div
        class="dropdown lg:absolute lg:top-3 w-auto border-l lg:border flex flex-col px-6 py-1 space-y-3 bg-white rounded"
        id="dropdown"
        v-show="isActive"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  visibility: hidden;
  opacity: 0;
  transform: scale(0.97) translateX(-5px);
  transition: 0.1s ease-in-out;
}
.dropdown.active {
  visibility: visible;
  opacity: 1;
  transform: scale(1) translateX(5px);
}
</style>
