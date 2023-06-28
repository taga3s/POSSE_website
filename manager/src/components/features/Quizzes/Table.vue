<template>
  <table class="border-spacing-0 border-separate min-w-[720px]">
    <thead>
      <tr>
        <th class="text-center bg-slate-300 py-[10px] px-4 border-y border-l border-table w-5">
          ID
        </th>
        <th class="text-left bg-slate-300 py-[10px] pl-4 border border-table">Questions</th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>
