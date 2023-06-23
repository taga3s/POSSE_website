<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ quiz_text: string }>()

const emit = defineEmits(['update:quiz_text'])

const computedQuizText = computed({
  get: () => props.quiz_text,
  set: (value) => {
    emit('update:quiz_text', value)
  },
})
</script>

<template>
  <dt><label>問題文</label></dt>
  <dd>
    <input
      class="w-full p-2 bg-slate-200 text-sm mt-2"
      type="text"
      v-model="computedQuizText"
      placeholder="問題文テキスト"
      required
    />
  </dd>
</template>
