<template>
  <aside class="min-w-[192px] h-screen bg-sidebar pt-10">
    <ul class="flex flex-col">
      <li>
        <router-link
          to="/"
          class="flex items-center gap-3 text-lg text-white pl-4 hover:pl-5 py-3 border-t-2 border-sidebarBorder hover:bg-hoverSidebarBorder transition-all duration-300"
        >
          <i class="fa-sharp fa-solid fa-table-list" />
          問題一覧
        </router-link>
      </li>
      <li>
        <router-link
          to="/create"
          class="flex items-center gap-3 text-lg text-white pl-4 hover:pl-5 py-3 border-t-2 border-sidebarBorder hover:bg-hoverSidebarBorder transition-all duration-300"
        >
          <i class="fa-solid fa-user-plus" />
          問題作成
        </router-link>
      </li>
      <li>
        <router-link
          to="/invite"
          class="flex items-center gap-3 text-lg text-white pl-4 hover:pl-5 py-3 border-y-2 border-sidebarBorder hover:bg-hoverSidebarBorder transition-all duration-300"
        >
          <i class="fa-solid fa-user-plus" />
          ユーザー招待
        </router-link>
      </li>
    </ul>
  </aside>
</template>
