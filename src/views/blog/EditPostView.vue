<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import Quill from 'quill'
import hljs from 'highlight.js'
import 'quill/dist/quill.snow.css'
import { useForm } from 'vee-validate'
import { createPost } from '@/schemas/blog'
import { useBlogStore } from '@/stores/blog'
import { useRoute } from 'vue-router'
import InputText from '@/components/InputText.vue'
import TextArea from '@/components/TextArea.vue'
import Loader from '@/components/Loader.vue'

const isLoading = ref(true)
const quillRef: any = ref(null)
const postContent: Ref<any> = ref()
const blog = useBlogStore()
const { getPost, updatePost } = blog
const route = useRoute()
const { postId } = route.params

const { handleSubmit } = useForm({
  validationSchema: createPost
})

const exportHTML = () => {
  const HTMLContent = quillRef.value.getSemanticHTML()

  return HTMLContent
}

const onSubmit = handleSubmit(({ title, description }) => {
  const HTMLContent = exportHTML()

  const post = {
    title,
    description,
    content: HTMLContent
  }

  updatePost(postId, post)
})

onMounted(async () => {
  const quill = new Quill('#editor', {
    modules: {
      syntax: { hljs },
      toolbar: '#toolbar-container'
    },
    placeholder: 'Aquí va el contenido...',
    theme: 'snow'
  })

  postContent.value = await getPost(postId)

  quillRef.value = quill
  quill.setContents([{ insert: '\n' }])
  quill.clipboard.dangerouslyPasteHTML(0, postContent.value.content)

  isLoading.value = false
})
</script>

<template>
  <div class="hero px-2 min-h-dvh">
    <Loader v-if="isLoading" />

    <div class="rounded-lg w-full max-w-3xl bg-base-100 shadow py-4 px-2" v-show="!isLoading">
      <h2 class="text-center text-xl font-bold my-4">Actualizar noticia</h2>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-y-4">
        <InputText
          id="title"
          placeholder="Título"
          label="Título"
          :value="postContent?.title"
          v-if="!isLoading"
        />

        <TextArea
          id="description"
          placeholder="Descripción"
          label="Descripción"
          :value="postContent?.description"
          v-if="!isLoading"
        />

        <div class="space-y-1">
          <label> Contenido </label>
          <div>
            <div id="toolbar-container">
              <span class="ql-formats">
                <select class="ql-font"></select>
                <select class="ql-size"></select>
              </span>
              <span class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
                <button class="ql-strike"></button>
              </span>
              <span class="ql-formats">
                <select class="ql-color"></select>
                <select class="ql-background"></select>
              </span>
              <span class="ql-formats">
                <button class="ql-script" value="sub"></button>
                <button class="ql-script" value="super"></button>
              </span>
              <span class="ql-formats">
                <button class="ql-header" value="1"></button>
                <button class="ql-header" value="2"></button>
                <button class="ql-blockquote"></button>
                <button class="ql-code-block"></button>
              </span>
              <span class="ql-formats">
                <button class="ql-list" value="ordered"></button>
                <button class="ql-list" value="bullet"></button>
                <button class="ql-indent" value="-1"></button>
                <button class="ql-indent" value="+1"></button>
              </span>
              <span class="ql-formats">
                <button class="ql-direction" value="rtl"></button>
                <select class="ql-align"></select>
              </span>
              <span class="ql-formats">
                <button class="ql-link"></button>
                <button class="ql-image"></button>
                <button class="ql-video"></button>
                <button class="ql-formula"></button>
              </span>
              <span class="ql-formats">
                <button class="ql-clean"></button>
              </span>
            </div>
            <div class="h-[250px]">
              <div id="editor"></div>
            </div>
          </div>
        </div>

        <button class="btn btn-neutral">Enviar</button>
      </form>
    </div>
  </div>
</template>
