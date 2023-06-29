<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ name: string }>()

const emit = defineEmits(['update:name'])

const computedName = computed({
  get: () => props.name,
  set: (value) => {
    emit('update:name', value)
  },
})
</script>

<template>
  <dt><label for="name">名前</label></dt>
  <dd>
    <input
      class="w-full p-2 bg-slate-200 text-sm mt-2"
      id="name"
      type="text"
      v-model="computedName"
      placeholder="名前を入力"
      required
    />
  </dd>
</template>
