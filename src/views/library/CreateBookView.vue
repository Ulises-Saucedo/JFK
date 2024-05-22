<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useLibraryStore } from '@/stores/library'
import { Book } from '@/schemas/library'
import InputFile from '@/components/InputFile.vue'
import InputText from '@/components/InputText.vue'

const library = useLibraryStore()
const { createBook } = library

const { handleSubmit } = useForm({
  validationSchema: Book
})

const onSubmit = handleSubmit(({ title, bookFile }) => {
  createBook(title, bookFile)
})
</script>

<template>
  <div class="hero px-2 min-h-dvh">
    <div class="rounded-lg w-full max-w-3xl bg-base-100 shadow py-4 px-2">
      <h2 class="text-center text-xl font-bold my-4">Publicar PDF</h2>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-y-4">
        <InputText id="title" placeholder="Título" label="Título" />

        <InputFile id="bookFile" label="Libro" />

        <button class="btn btn-neutral">Enviar</button>
      </form>
    </div>
  </div>
</template>
