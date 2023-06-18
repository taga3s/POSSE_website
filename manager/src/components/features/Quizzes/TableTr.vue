<template>
  <tr>
    <td
      class="text-center py-[10px] border-y border-l border-t-0 border-table align-middle"
    >
      1
    </td>
    <td class="text-center py-[10px] border border-t-0 border-table">
      <div class="flex justify-between">
        <span class="text-left px-4">aa</span>
        <ul class="flex gap-8 px-4 items-center">
          <li>
            <router-link to="/edit" title="edit" class="text-green-600 transition-all duration-200">
              <i class="fa-regular fa-pen-to-square"></i>
            </router-link>
          </li>
          <li>
            <a
              href=""
              title="delete"
              class="text-red-500 transition-all duration-200"
              ><i class="fa-sharp fa-solid fa-trash"></i
            ></a>
          </li>
        </ul>
      </div>
    </td>
  </tr>
</template>
