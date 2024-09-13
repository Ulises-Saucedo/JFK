<template>
  <footer class="bg-blue-600 py-8 px-4 shadow-sm text-white">
    <div class="container mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h6 class="text-lg font-semibold mb-4">Especialidades</h6>
          <ul className="space-y-2">
            <li>
              <NuxtLink to="/especialidades/programacion">
                Programación
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/especialidades/informatica">Informática</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/especialidades/electromecanica">
                Electromecánica
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="text-lg font-semibold mb-4">Recursos</h6>
          <ul className="space-y-2">
            <li>
              <NuxtLink to="/noticias"> Blog </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/biblioteca">Biblioteca</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/inscripcion"> Inscripción </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="text-lg font-semibold mb-4">Contactanos</h6>
          <ul className="space-y-2">
            <li class="flex items-center">
              <Icon name="tabler:mail" class="min-w-5 min-h-5 mr-2" />
              <a href="mailto:tecnica5lanus@abc.gob.ar" class="break-all">
                tecnica5lanus@abc.gob.ar
              </a>
            </li>
            <li class="flex items-center">
              <Icon name="tabler:phone" class="min-w-5 min-h-5 mr-2" />
              <span class="text-wrap"> 4241-8547/4240-5026 </span>
            </li>
            <li class="flex items-center">
              <Icon name="tabler:gps" class="min-w-5 min-h-5 mr-2" />
              <span class="text-wrap">
                Ramón Cabrero 1751, Remedios de Escalada, Provincia de Buenos
                Aires
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="text-lg font-semibold mb-4">Síguenos</h6>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/pages/E.E.S.T.%20N%C2%B0%205%20%22John%20F.%20Kennedy%22/438751799845870/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="tabler:brand-facebook" class="min-w-5 min-h-5 mr-2" />
            </a>
            <a
              href="https://www.instagram.com/escuelatecnica5lanus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="tabler:brand-instagram"
                class="min-w-5 min-h-5 mr-2"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white text-center">
        <p>
          &copy; {{ new Date().getFullYear() }} John Fizterald Kennedy EEST N5.
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
