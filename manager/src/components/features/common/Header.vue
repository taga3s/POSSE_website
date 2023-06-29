<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from './partials'

const props = defineProps<{ currentPath: string }>()

/**
 * functions
 */
const router = useRouter()

const handleLogout = () => {
  alert('ログアウトしました。')
  router.push('/signin')
}
</script>

<template>
  <header class="h-20 px-[26px] py-[22px] bg-header">
    <div class="flex justify-between items-center">
      <img src="/img/logo.svg" alt="POSSEロゴ" />
      <Button
        v-if="props.currentPath !== '/signin' && props.currentPath !== '/signup'"
        :width="'px-6'"
        :margin="false"
        :text="`ログアウト`"
        @on-click="handleLogout"
      />
    </div>
  </header>
</template>
