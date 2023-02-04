<?php

require(dirname(__FILE__) . '/../../db/dbconnect.php');
require_once(dirname(__FILE__) . '/../../functions.php');

$sql = "SELECT * FROM questions WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":id", $_GET["id"]);
$stmt->execute();
$question = $stmt->fetch();

$sql = "SELECT * FROM choices WHERE question_id = :question_id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":question_id", $_GET["id"]);
$stmt->execute();
$choices = $stmt->fetchAll();


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

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="font-NotoSansJP">
  <!-- header -->
  <?php include(dirname(__FILE__) . '/../../components/admin/header.php') ?>
  <main>
    <div class="flex">
      <!-- sidebar -->
      <?php include(dirname(__FILE__) . '/../../components/admin/sidebar.php') ?>

      <!-- create questions -->
      <div class="px-14 py-9 w-full">
        <h2 class="text-4xl font-bold">問題編集</h2>
        <form action="../../services/update_question.php" method="post" enctype="multipart/form-data" class="mt-8">
          <dl>
            <dt><label>問題文</label></dt>
            <dd><input class="w-full p-2 bg-slate-200 text-sm mt-2" type="text" name="question" value="<?= h($question["question"])?>" placeholder="問題文テキスト" required /></dd>
            <dt class="mt-6"><label>選択肢</label></dt>
            <dd class="flex flex-col gap-2 mt-2">
              <input class="w-full p-2 bg-slate-200 text-sm" type="text" name="choice[]" value="<?= h($choices[0]["name"])?>" placeholder="選択肢１" required />
              <input class="w-full p-2 bg-slate-200 text-sm" type="text" name="choice[]" value="<?= h($choices[1]["name"])?>" placeholder="選択肢２" required />
              <input class="w-full p-2 bg-slate-200 text-sm" type="text" name="choice[]" value="<?= h($choices[2]["name"])?>" placeholder="選択肢３" required />
            </dd>
            <dt class="mt-6"><label>正解の選択肢</label></dt>
            <dd class="flex flex-col gap-1 mt-2">
              <label><input type="radio" name="correctChoice" value="1" <?= $choices[0]["valid"] === 1 ? "checked" : ""?> />選択肢１</label>
              <label><input type="radio" name="correctChoice" value="2" <?= $choices[1]["valid"] === 1 ? "checked" : ""?> />選択肢２</label>
              <label><input type="radio" name="correctChoice" value="3" <?= $choices[2]["valid"] === 1 ? "checked" : ""?> />選択肢３</label>
            </dd>
            <dt class="mt-6"><label>問題の画像</label></dt>
            <dd class="mt-2"><input type="file" name="image"/></dd>
            <dt class="mt-6"><label>補足</label></dt>
            <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="text" name="supplement" value="<?= h($question["supplement"])?>" placeholder="補足テキスト"/></dd>
            <dd class="mt-2"><input class="w-full p-2 bg-slate-200 text-sm" type="text" name="supplement_url" value="<?= h($question["supplement_url"])?>" placeholder="補足URL"/></dd>
          </dl>
          <input type="hidden" name="id" value="<?= h($_GET["id"])?>">
          <button class="w-full mt-8 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200" name="upload" type="submit">更新</button>
        </form>
      </div>
    </div>
  </main>
</body>

</html>