<template>
  <footer class="footer footer-center p-10 text-base-content rounded border-t border-stone-200">
    <nav class="grid grid-flow-col gap-4">
      <RouterLink :to="{ name: 'home' }" class="link link-hover">Inicio</RouterLink>
      <RouterLink :to="{ name: 'history' }" class="link link-hover">Historia</RouterLink>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/john.f.kennedyy/" target="_blank" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
            />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/Escuelatecnica5lanus/?locale=es_LA"
          target="_blank"
          class="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-meta"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z"
            />
            <path
              d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z"
            />
          </svg>
        </a>
      </div>
    </nav>
    <aside>
      <p>Copyright © 2024 - Todos los derechos reservados para JFK</p>
    </aside>
  </footer>
</template>
