<template>
  <div>
    <h2 class="text-2xl font-bold">Preguntas frecuentes</h2>
  </div>
  <div class="join join-vertical w-full">
    <div class="collapse collapse-arrow join-item border border-stone-200">
      <input type="radio" name="my-accordion" checked />
      <div class="collapse-title text-xl font-medium">Vision general</div>
      <div class="collapse-content">
        <slot name="faq-vg"></slot>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-stone-200">
      <input type="radio" name="my-accordion" />
      <div class="collapse-title text-xl font-medium">Plan de estudio</div>
      <div class="collapse-content">
        <div class="w-full">
          <div class="collapse collapse-arrow join-item border border-stone-200">
            <input type="radio" name="my-accordion-study" />
            <div class="collapse-title text-xl font-medium">4° año</div>
            <div class="collapse-content">
              <slot name="faq-study-1"></slot>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border border-stone-200">
            <input type="radio" name="my-accordion-study" />
            <div class="collapse-title text-xl font-medium">5° año</div>
            <div class="collapse-content">
              <slot name="faq-study-2"></slot>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border border-stone-200">
            <input type="radio" name="my-accordion-study" />
            <div class="collapse-title text-xl font-medium">6° año</div>
            <div class="collapse-content">
              <slot name="faq-study-3"></slot>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border border-stone-200">
            <input type="radio" name="my-accordion-study" />
            <div class="collapse-title text-xl font-medium">7° año</div>
            <div class="collapse-content">
              <slot name="faq-study-4"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-stone-200">
      <input type="radio" name="my-accordion" />
      <div class="collapse-title text-xl font-medium">Campo académico</div>
      <div class="collapse-content">
        <slot name="faq-ca"></slot>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-stone-200">
      <input type="radio" name="my-accordion" />
      <div class="collapse-title text-xl font-medium">Prácticas</div>
      <div class="collapse-content">
        <slot name="faq-pr"></slot>
      </div>
    </div>
  </div>
</template>
