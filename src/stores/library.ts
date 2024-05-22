import { defineStore } from 'pinia'
import { ref, type Ref, computed } from 'vue'
import { storage, db } from '@/config/firebase'
import { uploadBytes, ref as storageRef, deleteObject } from 'firebase/storage'
import { useCurrentUser } from 'vuefire'
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'

export const useLibraryStore = defineStore('library', () => {
  const books: Ref<any[]> = ref([])
  const user = useCurrentUser()
  const router = useRouter()

  const totalPages = computed(() => Math.ceil(books.value.length / 6))

  const pagination = (page: number) => {
    const posts = books.value.slice((page - 1) * 6, page * 6)

    return posts
  }

  const getBooks = async () => {
    const booksRef = collection(db, 'library')
    let booksDoc = []

    const querySnapshot = await getDocs(booksRef)

    booksDoc = querySnapshot.docs.map((doc: any) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    books.value = booksDoc
  }

  const getQueryBooks = async (title: string) => {
    const booksDoc: any[] = []
    const querySnapshot = await getDocs(collection(db, 'library'))

    querySnapshot.forEach((doc) => {
      const docTitle = doc.data().title

      if (docTitle.toLowerCase().includes(title.toLowerCase())) {
        booksDoc.push({
          title: doc.data().title,
          content: doc.data().content,
          description: doc.data().description,
          id: doc.id
        })
      }
    })

    books.value = booksDoc
  }

  const createBook = async (title: any, file: any) => {
    const bookRef = storageRef(storage, `${crypto.randomUUID()}`)

    const metadata = {
      contentType: file.type
    }

    try {
      const snapshot = await uploadBytes(bookRef, file, metadata)

      await addDoc(collection(db, 'library'), {
        title: title,
        bookFile: snapshot.metadata.fullPath,
        created_by: user.value?.uid
      })

      toast.success('Libro creado correctamente')

      router.push({ name: 'library' })
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  const deleteBook = async (bookFile: string, docId: string) => {
    const docRef = storageRef(storage, bookFile)

    try {
      await deleteObject(docRef)
      await deleteDoc(doc(db, 'library', docId))

      books.value = books.value.filter((book: any) => book.id !== docId)

      toast.success('Libro eliminado correctamente')
    } catch (e: any) {
      toast.error('Hubo un error, intentelo mas tarde')
    }
  }

  return {
    books,
    user,
    totalPages,
    pagination,
    getBooks,
    getQueryBooks,
    createBook,
    deleteBook
  }
})
