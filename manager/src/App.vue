<script setup lang="ts">
import Header from "./components/features/common/Header.vue";
import Sidebar from "./components/features/common/Sidebar.vue";
</script>

<template>
  <Header />
  <div class="flex">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>
