import { defineStore } from 'pinia'
import { ref, type Ref, computed } from 'vue'
import { useCurrentUser } from 'vuefire'
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
import { type BlogPost } from '@/types/blog'

export const useBlogStore = defineStore('blog', () => {
  const blogPosts: Ref<BlogPost[]> = ref([])
  const user = useCurrentUser()
  const router = useRouter()

  const totalPages = computed(() => Math.ceil(blogPosts.value.length / 6))

  const pagination = (page: number) => {
    const posts = blogPosts.value.slice((page - 1) * 6, page * 6)

    return posts
  }

  const getAllPosts = async () => {
    const posts: BlogPost[] = []
    const querySnapshot = await getDocs(collection(db, 'blog'))

    querySnapshot.forEach((doc) => {
      posts.push({
        title: doc.data().title,
        content: doc.data().content,
        description: doc.data().description,
        id: doc.id
      })
    })

    blogPosts.value = posts
  }

  const getPost = async (docId: any) => {
    const docRef = doc(db, 'blog', docId)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
      toast.error('No se encontro el post')
      router.push('/404')
      return
    }

    return docSnap.data()
  }

  const getQueryPosts = async (title: string) => {
    const posts: BlogPost[] = []
    const querySnapshot = await getDocs(collection(db, 'blog'))

    querySnapshot.forEach((doc) => {
      const docTitle = doc.data().title

      if (docTitle.toLowerCase().includes(title.toLowerCase())) {
        posts.push({
          title: doc.data().title,
          content: doc.data().content,
          description: doc.data().description,
          id: doc.id
        })
      }
    })

    blogPosts.value = posts
  }

  const createPost = async ({
    title,
    description,
    content
  }: {
    title: string
    description: string
    content: string
  }) => {
    try {
      await addDoc(collection(db, 'blog'), {
        title,
        description,
        content,
        created_by: user.value?.uid
      })

      toast.success('Post creado correctamente')
      router.push({ name: 'blog' })
    } catch (e: any) {
      toast.error('Hubo un error. Intentelo mas tarde')
    }
  }

  const updatePost = async (postId: any, post: any) => {
    const docRef = doc(db, 'blog', postId)

    try {
      await updateDoc(docRef, {
        ...post
      })

      toast.success('Post actualizado correctamente')
      router.push({ name: 'blog' })
    } catch (e) {
      toast.error('Hubo un error. Intentelo mas tarde')
    }
  }

  const deletePost = async (postId: any) => {
    try {
      await deleteDoc(doc(db, 'blog', postId))

      toast.success('Post eliminado correctamente')
      router.push({ name: 'blog' })
    } catch (e: any) {
      toast.error('Hubo un error. Intentelo mas tarde')
    }
  }

  return {
    blogPosts,
    user,
    totalPages,
    pagination,
    getAllPosts,
    getPost,
    getQueryPosts,
    createPost,
    updatePost,
    deletePost
  }
})
