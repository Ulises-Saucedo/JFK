import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { getCurrentUser } from 'vuefire'
import { db } from '@/config/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const useAuthStore = defineStore('auth', () => {
  const auth = <any>useFirebaseAuth()
  const router = useRouter()

  const getUserRol = async () => {
    const user = await getCurrentUser()
    const uid = user?.uid

    if (!uid) {
      return []
    }

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef)
    const rol = docSnap.data()?.rol

    return rol
  }

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('Iniciaste sesión correctamente')
      router.push('/')
    } catch (error: any) {
      toast.error('Hubo un error. Intentelo mas tarde')
    }
  }

  const isBookCreatedByUserId = async (userId: string) => {
    const userRol = await getUserRol()
    const user = await getCurrentUser()

    if (userRol.includes('SUPERADMIN')) {
      return true
    } else if (user?.uid === userId) {
      return true
    } else {
      return false
    }
  }

  return {
    auth,
    getUserRol,
    login,
    isBookCreatedByUserId
  }
})
