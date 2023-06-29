<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Header, Sidebar } from './components/features/common'
import { ref, watch } from 'vue'

const route = useRoute()
const currentPath = ref<string | null>(null)

watch(route, (newRoute) => {
  currentPath.value = newRoute.path
})
</script>

<template>
  <Header :current-path="currentPath ? currentPath : ''" />
  <div class="flex">
    <Sidebar v-if="currentPath !== '/signin' && currentPath !== '/signup'" />
    <router-view></router-view>
  </div>
</template>
