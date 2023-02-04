<?php

require_once(dirname(__FILE__) . '/../db/dbconnect.php');
require(dirname(__FILE__) . '/../mailer/invitation.php');


$email = $_POST['email'];

$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":email", $email);
$stmt->execute();
$user = $stmt->fetch();

if ($user) {
  echo '招待済みのメールアドレスです';
  exit;
}

try {
  $pdo->beginTransaction();

  // memo:こういうSQL文が可能になるのは、NULL値が許容されている時
  $stmt = $pdo->prepare("INSERT INTO users(email) VALUES(:email)");
  $stmt->bindValue(':email', $email);
  $stmt->execute();
  $user_id = $pdo->lastInsertId();

  // tokenを生成
  $token = hash('sha256', uniqid(rand(), 1));

  $stmt = $pdo->prepare("INSERT INTO user_invitations(user_id, token) VALUES(:user_id, :token)");
  $stmt->bindValue(':user_id', $user_id);
  $stmt->bindValue(':token', $token);
  $stmt->execute();

  send_invitation($email, $token);

  $pdo->commit();
  echo '招待メールを送信しました' . '<br /><a href="/admin/index.php">管理画面に戻る</a>';
} catch (PDOException $e) {
  $pdo->rollBack();
  echo '招待に失敗しました' . '<br/><a href="/admin/index.php">管理画面に戻る</a>' . $e->getMessage();
}
