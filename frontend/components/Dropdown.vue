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
};

const enter = (element: Element) => {
  const el = element as HTMLElement;

  el.style.height = "auto";
  el.style.visibility = "hidden";

  const height = getComputedStyle(el).height;

  el.style.height = "0";
  el.style.visibility = "visible";

  getComputedStyle(el).height;
  requestAnimationFrame(() => {
    el.style.height = height;
  });
};

const afterEnter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
};

const leave = (element: Element) => {
  const el = element as HTMLElement;
  const height = getComputedStyle(el).height;

  el.style.height = height;

  getComputedStyle(el).height;
  requestAnimationFrame(() => {
    el.style.height = "0";
  });
};
</script>

<template>
  <div class="relative">
    <button
      @click="activateDropdown"
      class="flex w-full items-center px-4 rounded py-1 font-medium"
      :class="$route.path.includes(activeRoute) && 'text-blue-500 bg-blue-50'"
    >
      {{ text }}
      <span class="ms-1">
        <Icon
          :name="isActive ? 'tabler:arrow-up' : 'tabler:arrow-down'"
          class="block"
        />
      </span>
    </button>

    <Transition
      name="fade"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div
        class="lg:absolute lg:top-10 border-l lg:border flex w-full flex-col py-1 pl-1 lg:px-1 space-y-1 bg-white rounded"
        v-show="isActive"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in, height 0.5s ease-in-out;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
</style>
