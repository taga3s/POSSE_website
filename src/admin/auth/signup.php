<?php
session_start();

$token = isset($_GET['token']) ? $_GET['token'] : null;
$email = isset($_GET['email']) ? $_GET['email'] : null;

if (is_null($token) || is_null($email)) {
  header('Location: /');   // websiteへ飛ばす
}

if (isset($_SESSION["id"])) {
  header('Location: http://' . $_SERVER['HTTP_HOST'] . '/admin/index.php');
}

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>POSSE 管理画面ダッシュボード</title>
  <link rel="stylesheet" href="../../sass/common.css" />
  <link href="../../dist/output.css" rel="stylesheet" />

  <!-- google font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
</head>

<body class="font-NotoSansJP">
  <!-- header -->
  <?php include(dirname(__FILE__) . '/../../components/admin/header.php') ?>
  <main>
    <!-- ユーザー登録 -->
    <div class="px-40 py-9 w-full">
      <h2 class="text-4xl font-bold">ユーザー登録</h2>
      <div class="mt-8">
        <dl>
          <dt><label>名前</label></dt>
          <dd><input class="w-full p-2 bg-slate-200 text-sm mt-2" type="text" id="name" placeholder="名前を入力" required /></dd>
          <dt class="mt-6"><label>Email</label></dt>
          <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="email" id="email" value="<?= $email ?>" disabled /></dd>
          <dt class="mt-6"><label>パスワード</label></dt>
          <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="password" id="password" placeholder="パスワードを入力" required /></dd>
          <dt class="mt-6"><label>パスワード（確認）</label></dt>
          <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="password" id="password_conf" placeholder="パスワードを確認" required /></dd>
          <input type="hidden" id="token" value="<?= $token ?>">
        </dl>
        <button class="mt-8 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200" type="button" onclick="signup()">作成</button>
      </div>
    </div>
    </div>
  </main>
  <script>
    // practice Ajax
    const signup = async () => {
      const res = await fetch(`/services/signup.php`, {
        method: 'PATCH', //patchとは
        body: JSON.stringify({ // JSON形式に変換
          name: document.querySelector('#name').value,
          email: document.querySelector('#email').value,
          password: document.querySelector('#password').value,
          password_confirm: document.querySelector('#password_conf').value,
          token: document.querySelector('#token').value,
        }),
        headers: {
          'Accept': 'application/json, */*',
          "Content-Type": "application/x-www-form-urlencoded"
        },
      });
      const json = await res.json()
      if (res.status === 200) {
        alert(json["message"])
        location.href = '/admin/index.php'
      } else {
        alert(json["error"]["message"])
      }
    }
  </script>
</body>

</html>