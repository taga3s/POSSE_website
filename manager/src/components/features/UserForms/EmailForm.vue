<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ email: string }>()
const emit = defineEmits(['update:email'])

const computedEmail = computed({
  get: () => props.email,
  set: (value) => {
    emit('update:email', value)
  },
})
</script>

<template>
  <dt class="mt-6"><label for="email">Email</label></dt>
  <dd class="mt-2">
    <input
      type="email"
      class="w-full p-2 bg-slate-200 text-sm"
      placeholder="メールアドレスを入力"
      v-model="computedEmail"
      required
    />
  </dd>
</template>
