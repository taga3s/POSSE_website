<script setup lang="ts">
import { Button } from './partials'
</script>

<template>
  <header class="h-20 px-[26px] py-[22px] bg-header">
    <div class="flex justify-between items-center">
      <img src="/img/logo.svg" alt="POSSEロゴ" />
      <Button :width="'px-6'" :margin="false" :text="`ログアウト`" />
    </div>
  </header>
</template>
