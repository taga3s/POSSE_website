<script setup lang="ts">
import { TChoice, TNewChoice } from '../../../types'

const props = defineProps<{ choices: TChoice[] | TNewChoice[] }>()
</script>

<template>
  <dt class="mt-6"><label>選択肢</label></dt>
  <dd class="flex flex-col gap-2 mt-2">
    <input
      v-for="(c, i) in props.choices"
      class="w-full p-2 bg-slate-200 text-sm"
      type="text"
      v-model="c.name"
      :placeholder="`選択肢${i + 1}`"
      required
    />
  </dd>
</template>
