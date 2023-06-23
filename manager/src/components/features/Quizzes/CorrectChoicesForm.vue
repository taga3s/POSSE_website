<script setup lang="ts">
import { TChoice, TNewChoice } from '../../../types'
import { convertValueIntoBoolean } from '../../utils/convertValueIntoBoolean'

const props = defineProps<{ choices: TChoice[] | TNewChoice[] }>()
</script>

<template>
  <dt class="mt-6"><label>正解の選択肢</label></dt>
  <dd class="flex flex-col gap-1 mt-2">
    <label v-for="(c, i) in props.choices">
      <input
        type="radio"
        :value="i"
        :checked="convertValueIntoBoolean(c.isCorrect)"
        name="choices"
        @change="
          () => {
            props.choices.forEach((c, c_i) => {
              c.isCorrect = c_i === i
            })
          }
        "
      />
      選択肢{{ i + 1 }}</label
    >
  </dd>
</template>
