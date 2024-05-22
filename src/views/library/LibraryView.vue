<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import { useLibraryStore } from '@/stores/library'
import { storeToRefs } from 'pinia'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'
import BookCard from '@/components/BookCard.vue'

const isLoading: Ref<Boolean> = ref(true)
const page: Ref<number> = ref(1)
const title: Ref<string> = ref('')
const library = useLibraryStore()
const { getBooks, getQueryBooks, pagination } = library
const { user, books, totalPages } = storeToRefs(library)

const searchPost = async () => {
  page.value = 1
  isLoading.value = true

  getQueryBooks(title.value)

  isLoading.value = false
}

onMounted(async () => {
  await getBooks()

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
    <div class="my-8 flex justify-center" v-if="user">
      <RouterLink :to="{ name: 'create-book' }" class="btn btn-neutral"> Publicar PDF </RouterLink>
    </div>

    <div
      class="my-8 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
      v-if="books.length > 0"
    >
      <BookCard v-for="book in pagination(page)" :key="book.id" :book="book" />
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
