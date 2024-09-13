<template>
  <div
    class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
  >
    <div
      class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
    >
      <img src="/logotipo.png" class="w-6 h-6" />
    </div>
    <div
      class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
    >
      <div class="flex items-center justify-between space-x-2 mb-1">
        <div class="font-bold">
          <slot name="date" />
        </div>
      </div>
      <div class="text-black/75">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
