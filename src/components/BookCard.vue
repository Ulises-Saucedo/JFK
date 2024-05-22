<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useLibraryStore } from '@/stores/library'
import { useAuthStore } from '@/stores/auth'
import PDF from '@/assets/pdf.webp'

const bookValidation: Ref<Boolean> = ref(false)
const { deleteBook } = useLibraryStore()
const { isBookCreatedByUserId } = useAuthStore()

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})

onMounted(async () => {
  bookValidation.value = await isBookCreatedByUserId(props.book.created_by)
})
</script>

<template>
  <div class="rounded-lg bg-base-100 shadow p-4">
    <a
      :href="`https://firebasestorage.googleapis.com/v0/b/eest-n5-d1e93.appspot.com/o/${book.bookFile}?alt=media`"
      target="_blank"
    >
      <figure class="bg-[#B30B00] rounded-md">
        <img :src="PDF" alt="pdf-icon" class="w-full h-[150px] object-contain" />
      </figure>
      <h2 class="mt-4 font-bold text-lg truncate">{{ book.title }}</h2>
    </a>
    <div class="mt-2 flex gap-2 justify-center" v-if="bookValidation">
      <button
        class="flex-1 py-1 px-6 rounded-md bg-error"
        @click="deleteBook(book.bookFile, book.id)"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>
