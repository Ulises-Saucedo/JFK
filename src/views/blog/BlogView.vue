<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import { useAuthStore } from '@/stores/auth'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'

const isLoading: Ref<boolean> = ref(true)
const blog = useBlogStore()
const userRol: Ref<string[]> = ref([])
const title: Ref<string> = ref('')
const page: Ref<number> = ref(1)
const { pagination, getAllPosts, getQueryPosts } = blog
const { blogPosts, totalPages } = storeToRefs(blog)
const { getUserRol } = useAuthStore()

const searchPost = async () => {
  page.value = 1
  isLoading.value = true

  await getQueryPosts(title.value)

  isLoading.value = false
}

onMounted(async () => {
  await getAllPosts()

  userRol.value = await getUserRol()

  isLoading.value = false
})
</script>

<template>
  <Navbar>
    <div class="navbar-end">
      <form @submit.prevent="searchPost">
        <input
          type="text"
          placeholder="Buscar"
          class="input input-bordered w-32 md:w-auto"
          v-model="title"
        />
      </form>
    </div>
  </Navbar>

  <Loader v-if="isLoading" />

  <div v-else class="min-h-[calc(100dvh-290px)] p-4">
    <div class="my-8 flex justify-center" v-if="userRol.includes('SUPERADMIN')">
      <RouterLink :to="{ name: 'create-post' }" class="btn btn-neutral">
        Publicar noticia
      </RouterLink>
    </div>

    <div
      class="my-8 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      v-if="blogPosts.length > 0"
    >
      <div v-for="(post, i) in pagination(page)" :key="i" class="rounded-lg bg-base-100 shadow p-4">
        <figure class="bg-neutral rounded-md">
          <img src="/Logo.png" alt="logo-jfk" class="w-full h-[150px] object-contain" />
        </figure>
        <div class="mt-4 flex flex-col gap-y-4">
          <h2 class="font-bold text-lg truncate">{{ post.title }}</h2>
          <p class="h-[50px] overflow-hidden text-ellipsis text-pretty">
            {{ post.description }}
          </p>
          <RouterLink
            :to="{ name: 'post', params: { postId: post.id } }"
            class="btn btn-neutral w-full"
          >
            Ver más
          </RouterLink>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-center" v-else>No hay resultados</h2>

    <section class="flex flex-wrap justify-center join">
      <button
        v-for="item in totalPages"
        :key="item"
        :disabled="page === item"
        @click="page = item"
        class="join-item btn btn-neutral"
      >
        {{ item }}
      </button>
    </section>
  </div>

  <Footer />
</template>
