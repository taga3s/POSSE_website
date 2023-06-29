<script setup lang="ts">
import { ref } from 'vue'
import { EmailForm, PasswordForm, NameForm } from '../components/features/UserForms'
import { Button } from '../components/features/common/partials'
import { useRoute, useRouter } from 'vue-router'
import { TUserData } from '../types'

const route = useRoute()
const router = useRouter()

const email = ref<string>('')
email.value = route.query.email as string
const token = ref<string>('')
token.value = route.query.token as string

const userSignupData = ref<TUserData>({
  name: '',
  email: email.value,
  password: '',
  password_confirm: '',
})

/**
 * functions
 */
const sendUserRegisterData = () => {
  router.push('/')
}
</script>

<template>
  <form class="px-40 py-9 w-full" @submit="sendUserRegisterData">
    <h2 class="text-4xl font-bold">ユーザー登録</h2>
    <div class="mt-8">
      <dl>
        <!-- 名前 -->
        <NameForm v-model:name="userSignupData.name" />

        <!-- Email -->
        <EmailForm v-model:email="userSignupData.email" />

        <!-- パスワード -->
        <PasswordForm v-model:password="userSignupData.password" :label="`normal`" />

        <!-- パスワード（確認） -->
        <PasswordForm v-model:password="userSignupData.password_confirm" :label="`confirm`" />
      </dl>
      <Button :width="`w-fit`" :text="`登録`" :margin="true" />
    </div>
  </form>
</template>
