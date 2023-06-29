<script setup lang="ts">
import { ref } from 'vue'
import { PasswordForm, EmailForm } from '../components/features/UserForms'
import { TUserData } from '../types'
import Button from '../components/features/common/partials/Button.vue'

const userSigninData = ref<Omit<TUserData, 'password_confirm' | 'name'>>({
  email: '',
  password: '',
})
</script>

<template>
  <form class="px-40 py-9 w-full">
    <h2 class="text-4xl font-bold">サインイン</h2>
    <div class="mt-8">
      <dl>
        <!-- Email -->
        <EmailForm v-model:email="userSigninData.email" />

        <!-- パスワード -->
        <PasswordForm v-model:password="userSigninData.password" :label="`normal`" />
      </dl>
      <Button :width="`w-fit`" :text="`サインイン`" :margin="true" />
    </div>
  </form>
</template>
