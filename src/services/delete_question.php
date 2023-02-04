<?php

require(dirname(__FILE__) . '/../db/dbconnect.php');

if (isset($_GET["id"]) && preg_match('/^[1-9][0-9]*$/', $_GET['id'])) {
  $question_id = (int)$_GET["id"];
};

//memo:トランザクション開始
$pdo->beginTransaction();
try {
  $sql = "DELETE FROM choices WHERE question_id = :question_id";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":question_id", $question_id);
  $stmt->execute();

  $sql = "DELETE FROM questions WHERE id = :question_id";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":question_id", $question_id);
  $stmt->execute();

  //memo:コミットしてデータ保存
  $pdo->commit();
  header('Location: http://' . $_SERVER['HTTP_HOST'] . '/admin/index.php');
  exit();
  
} catch (Error $e) {
  //memo:エラー時ロールバックでキャンセル
  $pdo->rollBack();
  echo '削除失敗: ' . $e->getMessage();
}

?>