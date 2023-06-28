<template>
  <div class="px-14 py-9">
    <div class="flex flex-col gap-9">
      <h2 class="text-4xl font-bold">ユーザー招待</h2>
      <form class="flex items-center gap-5">
        <input
          type="text"
          class="w-96 p-2 bg-slate-200 text-sm"
          name="email"
          placeholder="メールアドレスを入力"
          required
        />
        <button
          type="submit"
          class="px-4 py-2 bg-blue rounded-lg font-bold text-white hover:shadow-md hover:shadow-slate-500 transition-all duration-200"
        >
          送信
        </button>
      </form>
    </div>
  </div>
</template>
