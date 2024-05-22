<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import { storeToRefs } from 'pinia'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'

const isLoading = ref(true)
const route = useRoute()
const blog = useBlogStore()
const { user } = storeToRefs(blog)
const { getPost, deletePost } = blog
const { postId } = route.params
const postContent: Ref<any> = ref()

onMounted(async () => {
  const quill = new Quill('#editor', {
    readOnly: true,
    modules: {
      toolbar: null
    },
    theme: 'snow'
  })

  postContent.value = await getPost(postId)

  quill.clipboard.dangerouslyPasteHTML(0, postContent.value.content)

  isLoading.value = false
})
</script>

<template>
  <Navbar />

  <Loader v-if="isLoading" />

  <div
    class="min-h-[calc(100dvh-290px)] w-full mx-auto my-8 flex flex-col items-center space-y-8 p-4"
    v-show="!isLoading"
  >
    <h1 class="text-center text-3xl sm:text-5xl font-bold">{{ postContent?.title }}</h1>
    <div id="editor" class="max-w-[1500px] w-full my-4 mx-auto"></div>

    <div class="w-full max-w-[1500px] my-4 mx-auto flex justify-center gap-x-4" v-if="user">
      <button class="btn btn-error" @click="deletePost(postId)">Eliminar</button>
      <RouterLink :to="{ name: 'edit-post', params: { postId } }" class="btn btn-neutral">
        Editar
      </RouterLink>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.ql-container.ql-snow {
  border: none;
}
</style>
