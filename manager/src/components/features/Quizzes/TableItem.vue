<script setup lang="ts">
import { TQuiz } from '../../../types'

const props = defineProps<{ quiz: TQuiz }>()

const emits = defineEmits(['onClickDelete'])
const handleDelete = (id: number) => {
  emits('onClickDelete', id)
}
</script>

<template>
  <tr>
    <td class="text-center py-[10px] border-y border-l border-t-0 border-table align-middle">
      {{ props.quiz.id }}
    </td>
    <td class="text-center py-[10px] border border-t-0 border-table">
      <div class="flex justify-between">
        <span class="text-left px-4">{{ props.quiz.quiz_text }}</span>
        <ul class="flex gap-8 px-4 items-center">
          <li>
            <router-link
              :to="`/edit?id=${props.quiz.id}`"
              title="edit"
              class="text-green-600 transition-all duration-200"
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </router-link>
          </li>
          <li>
            <button
              title="delete"
              class="text-red-500 transition-all duration-200"
              @click="handleDelete(props.quiz.id)"
            >
              <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
</template>
