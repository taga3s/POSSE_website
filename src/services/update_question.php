<?php


require(dirname(__FILE__) . '/../db/dbconnect.php');


$pdo->beginTransaction();


try {
  $question_id = (int)$_POST["id"];

  // questionsテーブルを更新
  $sql = "UPDATE questions SET question = :question, supplement = :supplement, supplement_url = :supplement_url WHERE id = :id";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":id", $question_id);
  $stmt->bindValue(":question", $_POST["question"]);
  $stmt->bindValue(":supplement", $_POST["supplement"]);
  $stmt->bindValue(":supplement_url", $_POST["supplement_url"]);
  $stmt->execute();


  if (!empty($_FILES["image"]["name"])) {
    $image_name = uniqid(mt_rand(), true) . '.' . substr(strrchr($_FILES["image"]["name"], '.'), 1);
    $image_path = dirname(__FILE__) . '/../img/quiz/' . $image_name;
    move_uploaded_file($_FILES['image']['tmp_name'], $image_path);

    $sql = "UPDATE questions SET image = :image WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":image", $image_name);
    $stmt->bindValue(":id", $question_id);
    $stmt->execute();
  };

  // choicesテーブルを更新
  $choices = $_POST['choice'];
  $correctChoice = $_POST['correctChoice'];

  $sql = "UPDATE choices SET name = :name, valid = :valid WHERE id = :id";
  $stmt = $pdo->prepare($sql);


  for ($i = 0; $i < 3; $i++) {
    // 等差数列を用いて一意の$idを求めている。おそらくSELECT文で普通にできるきがする。
    $id = $i + 3 * ($question_id - 1) + 1;
    $stmt->bindValue(":id", $id);
    $stmt->bindValue(":name", $choices[$i]);
    $valid = (int)$correctChoice === $i + 1 ? 1 : 0;
    $stmt->bindValue(":valid", $valid);
    $stmt->execute();
  }

  $pdo->commit();
  header('Location: http://' . $_SERVER['HTTP_HOST'] . '/admin/index.php');

} catch (Error $e) {

  $pdo->rollBack();
  echo '更新失敗: ' . $e->getMessage();
};
