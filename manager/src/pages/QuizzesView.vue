<script setup lang="ts">
import TableTr from "../components/features/Quizzes/TableTr.vue";
</script>

<template>
  <div class="px-14 py-9">
    <div class="flex flex-col gap-9 w-auto">
      <label class="text-4xl font-bold">問題一覧</label>
      <table class="border-spacing-0 border-separate min-w-[720px]">
        <thead>
          <tr>
            <th
              class="text-center bg-slate-300 py-[10px] px-4 border-y border-l border-table w-5"
            >
              ID
            </th>
            <th
              class="text-left bg-slate-300 py-[10px] pl-4 border border-table"
            >
              Questions
            </th>
          </tr>
        </thead>
        <tbody>
          <TableTr />
        </tbody>
      </table>
    </div>
  </div>
</template>
