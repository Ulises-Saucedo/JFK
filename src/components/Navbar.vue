<template>
  <div class="navbar border-b border-stone-200">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
        >
          <li>
            <RouterLink :to="{ name: 'home' }">Inicio</RouterLink>
          </li>
          <li>
            <details>
              <summary>Tecnicaturas</summary>
              <ul>
                <li>
                  <RouterLink :to="{ name: 'electromechanical' }">Electromecánica</RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'computing' }">Informática</RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'programming' }">Programación</RouterLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <RouterLink :to="{ name: 'blog' }">Blog</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'library' }">Biblioteca</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'history' }">Historia</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'inscription' }">Inscripción</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
