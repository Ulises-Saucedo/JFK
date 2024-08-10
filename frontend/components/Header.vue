<script setup lang="ts">
const openMenu = () => {
  const menu = document.getElementById("menu");
  if (menu?.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add(
      "absolute",
      "top-12",
      "right-8",
      "border",
      "rounded",
      "px-6",
      "py-2",
      "bg-white"
    );
  } else {
    menu?.classList.add("hidden");
    menu?.classList.remove(
      "absolute",
      "top-12",
      "right-8",
      "border",
      "rounded",
      "px-6",
      "py-2",
      "bg-white"
    );
  }
};

window.addEventListener("resize", () => {
  const menu = document.getElementById("menu");
  if (window.innerWidth >= 1024) {
    menu?.classList.add("hidden");
    menu?.classList.remove(
      "absolute",
      "top-12",
      "right-8",
      "border",
      "rounded",
      "px-6",
      "py-2",
      "bg-white"
    );
  }
});
</script>

<template>
  <header class="py-3 px-4 border-b shadow-sm">
    <nav
      class="max-w-screen-xl mx-auto rounded-full py-2 px-8 flex justify-between"
    >
      <img src="/logotipo.png" alt="Logotipo de la escuela" class="w-6" />
      <button class="block lg:hidden" @click="openMenu">
        <BootstrapIcon name="list" class="text-black text-xl" />
      </button>
      <div
        class="hidden lg:flex lg:flex-row items-center gap-x-4 gap-y-2"
        id="menu"
      >
        <LinkNavigation to="/" text="Inicio" />
        <LinkNavigation to="/historia" text="Historia" />
        <Dropdown text="Especialidades" active-route="especialidades">
          <LinkNavigation
            to="/especialidades/programacion"
            text="Programación"
          />
          <LinkNavigation to="/especialidades/informatica" text="Informática" />
          <LinkNavigation
            to="/especialidades/electromecanica"
            text="Electromecánica"
          />
        </Dropdown>
        <LinkNavigation to="/inscripcion" text="Inscripción" />
        <LinkNavigation to="/contacto" text="Contacto" />
        <LinkNavigation to="/noticias" text="Noticias" />
        <LinkNavigation to="/biblioteca" text="Biblioteca" />
      </div>
    </nav>
  </header>
</template>
