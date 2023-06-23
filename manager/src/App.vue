<script setup lang="ts">
import { Header, Sidebar } from './components/features/common/'
</script>

<template>
  <Header />
  <div class="flex">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>
