<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: 'normal' | 'confirm'; password: string }>()

const emit = defineEmits(['update:password'])

const computedPassword = computed({
  get: () => props.password,
  set: (value) => {
    emit('update:password', value)
  },
})
</script>

<template>
  <dt class="mt-6">
    <label :for="`password-${label}`"
      >パスワード{{ props.label === 'normal' ? '' : '（確認）' }}</label
    >
  </dt>
  <dd class="mt-2">
    <input
      class="w-full p-2 bg-slate-200 text-sm"
      :id="`password-${label}`"
      type="password"
      v-model="computedPassword"
      placeholder="パスワードを入力"
      required
    />
  </dd>
</template>
