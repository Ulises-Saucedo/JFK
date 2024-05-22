import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layouts/HomeLayout.vue'
import SpecialtieLayout from '@/layouts/SpecialtieLayout.vue'
import BlogLayout from '@/layouts/BlogLayout.vue'
import LibraryLayout from '@/layouts/LibraryLayout.vue'
import HomeView from '../views/home/HomeView.vue'
import { useAuthStore } from '@/stores/auth'
import { getCurrentUser } from 'vuefire'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: {
            title: 'Inicio'
          }
        },
        {
          path: 'history',
          name: 'history',
          component: () => import('../views/home/HistoryView.vue'),
          meta: {
            title: 'Historia'
          }
        },
        {
          path: 'specialties',
          component: SpecialtieLayout,
          redirect: (to) => ({ name: 'electromechanical' }),
          children: [
            {
              path: 'computing',
              name: 'computing',
              component: () => import('../views/home/specialties/ComputingView.vue'),
              meta: {
                title: 'Informática'
              }
            },
            {
              path: 'electromechanical',
              name: 'electromechanical',
              component: () => import('../views/home/specialties/ElectromechanicalView.vue'),
              meta: {
                title: 'Electromecánica'
              }
            },
            {
              path: 'programming',
              name: 'programming',
              component: () => import('../views/home/specialties/ProgrammingView.vue'),
              meta: {
                title: 'Programación'
              }
            }
          ]
        },
        {
          path: 'inscription',
          name: 'inscription',
          component: () => import('../views/home/InscriptionView.vue'),
          meta: {
            title: 'Inscripción'
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/home/LoginView.vue'),
          meta: {
            title: 'Iniciar sesión'
          }
        }
      ]
    },
    {
      path: '/blog',
      component: BlogLayout,
      children: [
        {
          path: '',
          name: 'blog',
          component: () => import('../views/blog/BlogView.vue'),
          meta: {
            title: 'Blog'
          }
        },
        {
          path: 'create-post',
          name: 'create-post',
          component: () => import('../views/blog/CreatePostView.vue'),
          meta: {
            title: 'Crear post',
            superadmin: true
          }
        },
        {
          path: 'edit-post/:postId',
          name: 'edit-post',
          component: () => import('../views/blog/EditPostView.vue'),
          meta: {
            title: 'Editar post',
            superadmin: true
          }
        },
        {
          path: 'post/:postId',
          name: 'post',
          component: () => import('../views/blog/PostView.vue'),
          meta: {
            title: 'Post'
          }
        }
      ]
    },
    {
      path: '/library',
      component: LibraryLayout,
      children: [
        {
          path: '',
          name: 'library',
          component: () => import('../views/library/LibraryView.vue'),
          meta: {
            title: 'Biblioteca'
          }
        },
        {
          path: 'create-book',
          name: 'create-book',
          component: () => import('../views/library/CreateBookView.vue'),
          meta: {
            title: 'Crear libro',
            admin: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | JFK`
  next()
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()

  const rol = await auth.getUserRol()

  if (to.meta.superadmin) {
    if (rol.includes('SUPERADMIN')) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser()

  if (to.meta.auth) {
    if (user) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
