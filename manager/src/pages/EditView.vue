<template>
  <div class="px-14 py-9 w-full">
    <h2 class="text-4xl font-bold">問題編集</h2>
    <form
      action=""
      method="post"
      enctype="multipart/form-data"
      class="mt-8"
    >
      <dl>
        <dt><label>問題文</label></dt>
        <dd>
          <input
            class="w-full p-2 bg-slate-200 text-sm mt-2"
            type="text"
            name="question"
            placeholder="問題文テキスト"
            required
          />
        </dd>
        <dt class="mt-6"><label>選択肢</label></dt>
        <dd class="flex flex-col gap-2 mt-2">
          <input
            class="w-full p-2 bg-slate-200 text-sm"
            type="text"
            name="choice[]"
            placeholder="選択肢１"
            required
          />
          <input
            class="w-full p-2 bg-slate-200 text-sm"
            type="text"
            name="choice[]"
            placeholder="選択肢２"
            required
          />
          <input
            class="w-full p-2 bg-slate-200 text-sm"
            type="text"
            name="choice[]"
            placeholder="選択肢３"
            required
          />
        </dd>
        <dt class="mt-6"><label>正解の選択肢</label></dt>
        <dd class="flex flex-col gap-1 mt-2">
          <label
            ><input
              type="radio"
              name="correctChoice"
              value="1"
            />選択肢１</label
          >
          <label
            ><input
              type="radio"
              name="correctChoice"
              value="2"
            />選択肢２</label
          >
          <label
            ><input
              type="radio"
              name="correctChoice"
              value="3"
            />選択肢３</label
          >
        </dd>
        <dt class="mt-6"><label>問題の画像</label></dt>
        <dd class="mt-2"><input type="file" name="image" /></dd>
        <dt class="mt-6"><label>補足</label></dt>
        <dd class="mt-2">
          <input
            class="w-full p-2 bg-slate-200 text-sm"
            type="text"
            name="supplement"
            placeholder="補足テキスト"
          />
        </dd>
        <dd class="mt-2">
          <input
            class="w-full p-2 bg-slate-200 text-sm"
            type="text"
            name="supplement_url"
            placeholder="補足URL"
          />
        </dd>
      </dl>
      <input type="hidden" name="id" />
      <button
        class="w-full mt-8 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200"
        name="upload"
        type="submit"
      >
        更新
      </button>
    </form>
  </div>
</template>
