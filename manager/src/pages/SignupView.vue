<template>
  <form class="px-40 py-9 w-full">
    <h2 class="text-4xl font-bold">ユーザー登録</h2>
    <div class="mt-8">
      <dl>
        <dt><label>名前</label></dt>
        <dd>
          <input
            class="w-full p-2 bg-slate-200 text-sm mt-2"
            type="text"
            id="name"
            placeholder="名前を入力"
            required
          />
        </dd>
        <dt class="mt-6"><label>Email</label></dt>
        <dd class="mt-2">
          <input class="w-full p-2 bg-slate-200 text-sm" type="email" id="email" value="" />
        </dd>
        <dt class="mt-6"><label>パスワード</label></dt>
        <dd class="mt-2">
          <input
            class="w-full p-2 bg-slate-200 text-sm"
            type="password"
            id="password"
            placeholder="パスワードを入力"
            required
          />
        </dd>
        <dt class="mt-6"><label>パスワード（確認）</label></dt>
        <dd class="mt-2">
          <input
            class="w-full p-2 bg-slate-200 text-sm"
            type="password"
            id="password_conf"
            placeholder="パスワードを確認"
            required
          />
        </dd>
        <input type="hidden" id="token" value="<?= $token ?>" />
      </dl>
      <button
        class="mt-8 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200"
        type="button"
      >
        作成
      </button>
    </div>
  </form>
</template>
