<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const isMenuOpen = ref(false);
const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanLg = breakpoints.smaller("lg");

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    blockScroll();
  } else {
    unblockScroll();
  }
};

// Bloquear scroll cuando el menú esté activo
const blockScroll = () => {
  const menu = document.querySelector(".menu");
  const body = document.body;
  const windowHeight = window.innerHeight;

  if (menu) {
    const menuHeight = menu.scrollHeight;
    if (menuHeight < windowHeight) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }
};

// Desbloquear scroll cuando el menú esté desactivado
const unblockScroll = () => {
  const body = document.body;
  body.style.height = "";
  body.style.overflow = "";
};
</script>

<template>
  <header
    class="header sticky top-0 w-full flex items-center z-20 border-b bg-white py-3 px-4"
  >
    <div class="flex w-full items-center justify-between py-2 px-8">
      <img src="/logotipo.png" alt="Logotipo de la escuela" class="w-6" />

      <Icon
        name="tabler:menu-2"
        class="lg:hidden text-black/75 text-xl cursor-pointer"
        @click="toggleMenu"
      />

      <template v-if="!smallerThanLg">
        <nav
          class="lg:min-h-full lg:w-auto lg:flex lg:flex-row items-center gap-x-1 gap-y-2"
        >
          <LinkNavigation to="/" text="Inicio" />
          <LinkNavigation to="/historia" text="Historia" />
          <Dropdown text="Especialidades" active-route="especialidades">
            <LinkNavigation
              to="/especialidades/programacion"
              text="Programación"
            />
            <LinkNavigation
              to="/especialidades/informatica"
              text="Informática"
            />
            <LinkNavigation
              to="/especialidades/electromecanica"
              text="Electromecánica"
            />
          </Dropdown>
          <LinkNavigation to="/inscripcion" text="Inscripción" />
          <LinkNavigation to="/contacto" text="Contacto" />
          <LinkNavigation to="/biblioteca" text="Biblioteca" />
          <Button class="bg-blue-600 hover:bg-blue-500">
            Últimas noticias
          </Button>
        </nav>
      </template>
    </div>
  </header>

  <template v-if="smallerThanLg">
    <Transition name="fade">
      <nav
        class="menu fixed z-10 top-[65px] left-0 bg-white w-full min-h-dvh px-4 py-2 space-y-2"
        v-show="isMenuOpen"
      >
        <LinkNavigation to="/" text="Inicio" @click="toggleMenu" />
        <LinkNavigation to="/historia" text="Historia" @click="toggleMenu" />
        <Dropdown text="Especialidades" active-route="especialidades">
          <LinkNavigation
            to="/especialidades/programacion"
            text="Programación"
            @click="toggleMenu"
          />
          <LinkNavigation
            to="/especialidades/informatica"
            text="Informática"
            @click="toggleMenu"
          />
          <LinkNavigation
            to="/especialidades/electromecanica"
            text="Electromecánica"
            @click="toggleMenu"
          />
        </Dropdown>
        <LinkNavigation
          to="/inscripcion"
          text="Inscripción"
          @click="toggleMenu"
        />
        <LinkNavigation to="/contacto" text="Contacto " @click="toggleMenu" />
        <LinkNavigation
          to="/biblioteca"
          text="Biblioteca"
          @click="toggleMenu"
        />
        <Button class="w-full bg-blue-600 hover:bg-blue-500">
          Últimas noticias
        </Button>
      </nav>
    </Transition>
  </template>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in, transform 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
