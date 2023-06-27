<template>
  <form class="px-40 py-9 w-full">
    <h2 class="text-4xl font-bold">サインイン</h2>
    <div class="mt-8">
      <dl>
        <dt><label>Email</label></dt>
        <dd>
          <input
            class="w-full p-2 bg-slate-200 text-sm mt-2"
            type="email"
            name="email"
            placeholder="メールアドレスを入力"
            required
          />
        </dd>
        <dt class="mt-6"><label>パスワード</label></dt>
        <dd class="mt-2">
          <input
            class="w-full p-2 bg-slate-200 text-sm"
            type="password"
            name="password"
            placeholder="パスワードを入力"
            required
          />
        </dd>
      </dl>
      <button
        class="mt-8 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200"
        type="submit"
      >
        ログイン
      </button>
    </div>
  </form>
</template>
