<script setup lang="ts">
import { useForm } from 'vee-validate'
import { loginSchema } from '@/schemas/auth'
import { useAuthStore } from '@/stores/auth'
import InputText from '@/components/InputText.vue'

const auth = useAuthStore()
const { login } = auth

const { handleSubmit } = useForm({
  validationSchema: loginSchema
})

const onSubmit = handleSubmit(({ email, password }) => {
  login(email, password)
})
</script>

<template>
  <div class="hero px-2 min-h-[calc(100dvh-300px)]">
    <div class="rounded-lg w-full max-w-md bg-base-100 shadow py-4 px-2">
      <h2 class="text-center text-xl font-bold my-4">Iniciar sesión</h2>
      <form @submit.prevent="onSubmit" class="flex flex-col px-2 space-y-4">
        <InputText id="email" label="Email" placeholder="Email" />

        <InputText id="password" type="password" label="Contraseña" placeholder="Contraseña" />

        <button class="btn btn-neutral">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>
