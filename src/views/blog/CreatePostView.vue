<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Quill from 'quill'
import hljs from 'highlight.js'
import 'quill/dist/quill.snow.css'
import { useForm } from 'vee-validate'
import { createPost } from '@/schemas/blog'
import InputText from '@/components/InputText.vue'
import TextArea from '@/components/TextArea.vue'
import { useBlogStore } from '@/stores/blog'

const quill: any = ref(null)
const blog = useBlogStore()
const { createPost: createBlogPost } = blog

const { handleSubmit } = useForm({
  validationSchema: createPost
})

const exportHTML = () => {
  const HTMLContent = quill.value.getSemanticHTML()

  return HTMLContent
}

const onSubmit = handleSubmit(({ title, description }) => {
  const HTMLContent = exportHTML()

  const post = {
    title,
    description,
    content: HTMLContent
  }

  createBlogPost(post)
})

onMounted(() => {
  quill.value = new Quill('#editor', {
    modules: {
      syntax: { hljs },
      toolbar: '#toolbar-container'
    },
    placeholder: 'Aquí va el contenido...',
    theme: 'snow'
  })
})
</script>

<template>
  <div class="hero px-2 min-h-dvh">
    <div class="rounded-lg w-full max-w-3xl bg-base-100 shadow py-4 px-2">
      <h2 class="text-center text-xl font-bold my-4">Crear noticia</h2>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-y-4">
        <InputText id="title" placeholder="Título" label="Título" />

        <TextArea id="description" placeholder="Descripción" label="Descripción" />

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
