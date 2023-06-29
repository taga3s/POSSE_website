<script setup lang="ts">
const props = defineProps<{ width: string; text: string; margin: boolean }>()

const emits = defineEmits(['onClick'])
const handleClick = () => {
  emits('onClick')
}
</script>

<template>
  <button
    :class="`${props.width} ${
      props.margin && 'mt-6'
    } px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200`"
    @click="handleClick"
  >
    {{ props.text }}
  </button>
</template>
