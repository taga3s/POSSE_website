<header class="h-20 px-[26px] py-[22px] bg-header">
  <div class="flex justify-between items-center">
    <img src="../../img/logo.svg" alt="" />
    <button class="px-6 py-[6px] bg-blue text-white font-bold rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200" onclick="signout()">ログアウト</button>
  </div>
</header>

<script>
  // practice Ajax
const signout = async () => {
  const res = await fetch(`/services/signout.php`, { 
    method: 'DELETE',
    headers:{
      'Accept': 'application/json, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
  });
  if (res.status === 204) {
    alert('ログアウトに成功しました')
    location.href = '/'
  } else {
    alert('ログアウトに失敗しました')
  }
}
</script>
