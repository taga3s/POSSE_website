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

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="font-NotoSansJP">
  <!-- header -->
  <?php include(dirname(__FILE__) . '/../../components/admin/header.php') ?>
  <main>
    <!-- login -->
    <form method="POST" action="../../services/signin.php" class="px-40 py-9 w-full">
      <h2 class="text-4xl font-bold">ログイン</h2>
      <div class="mt-8">
        <dl>
          <dt><label>Email</label></dt>
          <dd><input class="w-full p-2 bg-slate-200 text-sm mt-2" type="email" name="email" id="js-email" placeholder="メールアドレスを入力" required/></dd>
          <dt class="mt-6"><label>パスワード</label></dt>
          <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="password" name="password" id="js-password" placeholder="パスワードを入力" required/></dd>
        </dl>
        <button class="mt-8 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200" type="submit" id="js-button">ログイン</button>
      </div>
    </form>
    </div>
  </main>
</body>

</html>