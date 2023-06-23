<script setup lang="ts">
const emit = defineEmits(['onChangeImg'])

const handleImg = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target && target.files) {
    emit('onChangeImg', target.files[0])
  }
}
</script>

<template>
  <dt class="mt-6"><label>問題の画像</label></dt>
  <dd class="mt-2"><input type="file" name="image" @change="handleImg" /></dd>
</template>
