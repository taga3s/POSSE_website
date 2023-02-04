<?php

require(dirname(__FILE__) . '/../db/dbconnect.php');

if (isset($_POST["upload"])) {
  //画像の名前をユニーク(一意)に設定している。また、画像の拡張子も取得している。
  $image_name = uniqid(mt_rand(), true) . '.' . substr(strrchr($_FILES["image"]["name"], '.'), 1);
  $image_path = dirname(__FILE__) . '/../img/quiz/' . $image_name;
  // サーバ上で一時的にtmp_nameとして保存されている画像ファイルを、本来移動したい場所に移す。
  move_uploaded_file($_FILES['image']['tmp_name'], $image_path);
};

$pdo->beginTransaction();

try {
  // postされた問題情報をquestionテーブルに登録
  $sql = "INSERT INTO questions(question, image, supplement, supplement_url) VALUES 
  (:question, :image, :supplement, :supplement_url)";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":question", $_POST["question"]);
  $stmt->bindValue(":image", $image_name);
  $stmt->bindValue(":supplement", $_POST["supplement"]);
  $stmt->bindValue(":supplement_url", $_POST["supplement_url"]);
  $stmt->execute();

  // choicesテーブルに登録
  $question_id = $pdo->lastInsertId();
  $choices = $_POST['choice'];
  $correctChoice = $_POST['correctChoice'];

  $sql = "INSERT INTO choices(question_id, name, valid) VALUES 
  (:question_id, :name, :valid)";
  $stmt = $pdo->prepare($sql);

  foreach ($choices as $key => $choice) {
    $stmt->bindValue(":question_id", $question_id);
    $stmt->bindValue(":name", $choices[$key]);
    $answer = (int)$correctChoice === $key + 1 ? 1 : 0;
    $stmt->bindValue(":valid", $answer);
    $stmt->execute();
  };

  $pdo->commit();
  header('Location: http://' . $_SERVER['HTTP_HOST'] . '/admin/index.php');
  
} catch (Error $e) {
  $pdo->rollBack();
  echo '作成失敗: ' . $e->getMessage();
}
