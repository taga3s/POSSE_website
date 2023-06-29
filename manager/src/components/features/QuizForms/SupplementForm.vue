<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ supplement_text: string; supplement_url: string }>()

const emit = defineEmits(['update:supplement_text', 'update:supplement_url'])

const computedSupplementText = computed({
  get: () => props.supplement_text,
  set: (value) => {
    emit('update:supplement_text', value)
  },
})

const computedSupplementUrl = computed({
  get: () => props.supplement_url,
  set: (value) => {
    emit('update:supplement_url', value)
  },
})
</script>

<template>
  <dt class="mt-6"><label>補足</label></dt>
  <dd class="mt-2">
    <input
      class="w-full p-2 bg-slate-200 text-sm"
      type="text"
      v-model="computedSupplementText"
      placeholder="補足テキスト"
    />
  </dd>
  <dd class="mt-2">
    <input
      class="w-full p-2 bg-slate-200 text-sm"
      type="text"
      v-model="computedSupplementUrl"
      placeholder="補足URL"
    />
  </dd>
</template>
