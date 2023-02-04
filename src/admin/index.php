<?php
session_start();

require(dirname(__FILE__) . '/../db/dbconnect.php');
require_once(dirname(__FILE__) . '/../functions.php');


// questionsテーブルからデータを取得
$questions = array();
$sql = "SELECT * FROM questions";
$questions = $pdo->query($sql)->fetchAll();

if (!isset($_SESSION["id"])) {
  header('Location: /admin/auth/signin.php');
}

?>


<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>POSSE 管理画面ダッシュボード</title>
  <link rel="stylesheet" href="../sass/common.css" />
  <link href="../dist/output.css" rel="stylesheet" />

  <!-- google font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="font-NotoSansJP">
  <!-- header -->
  <?php include(dirname(__FILE__) . '/../components/admin/header.php') ?>

  <main>
    <div class="flex">
      <!-- sidebar -->
      <?php include(dirname(__FILE__) . '/../components/admin/sidebar.php') ?>

      <!-- questions-table -->
      <div class="px-14 py-9">
        <div class="flex flex-col gap-9 w-auto">
          <label class="text-4xl font-bold">問題一覧</label>
          <?php if (count($questions) !== 0) : ?>
            <table class="border-spacing-0 border-separate">
              <thead>
                <tr>
                  <th class="text-center bg-slate-300 py-[10px] px-4 border-y border-l border-table w-5">ID</th>
                  <th class="text-left bg-slate-300 py-[10px] pl-4 border border-table">Questions</th>
                </tr>
              </thead>
              <tbody>
                <?php foreach ($questions as $question) : ?>
                  <tr>
                    <td class="text-center py-[10px] border-y border-l border-t-0  border-table align-middle"><?= h($question["id"]) ?></td>
                    <td class="text-center py-[10px] border border-t-0 border-table">
                      <div class="flex justify-between">
                        <span class="text-left px-4"><?= h($question["question"]) ?></span>
                        <ul class="flex gap-8 px-4 items-center">
                          <li><a href="http://localhost:8080/admin/questions/edit.php?id=<?= h($question["id"]) ?>" title="edit" class="hover:text-green-600 transition-all duration-200"><i class="fa-regular fa-pen-to-square"></i></a></li>
                          <li><a href="http://localhost:8080/services/delete_question.php?id=<?= h($question["id"]) ?>" title="delete" class="hover:text-red-500 transition-all duration-200"><i class="fa-sharp fa-solid fa-trash"></i></a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                <?php endforeach; ?>
              </tbody>
            </table>
          <?php else : ?>
            <?="現在、問題は登録されていません。"?>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </main>
</body>

</html>