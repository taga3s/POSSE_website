<script setup lang="ts">
import { ref } from 'vue'
import { EmailForm } from '../components/features/UserForms'
import { RepositoryFactory } from '../apis/RepositoryFactory'
import { Button } from '../components/features/common/partials'

const email = ref<string>('')

/**
 * functions
 */
const userRepository = RepositoryFactory.get('user')

const submitUserInvitationData = async (e: Event) => {
  e.preventDefault()

  const response = await userRepository.invite({ email: email.value })

  if (response.status == 200) {
    alert(`status ${response.status}: 正常に招待が送信されました。`)
  } else {
    alert(`status ${response.status}: 招待が送信に失敗しました。`)
  }

  email.value = ''
}
</script>

<template>
  <div class="px-14 py-9">
    <div class="flex flex-col gap-9">
      <h2 class="text-4xl font-bold">ユーザー招待</h2>
      <form class="w-[420px]" @submit="submitUserInvitationData">
        <!-- メールアドレス -->
        <EmailForm v-model:email="email" />
        <Button :width="`w-20`" :text="'送信'" :margin="true" />
      </form>
    </div>
  </div>
</template>
