<?php
// sessionに格納されていた情報を削除
session_start();
$_SESSION = array();
session_destroy();

header("Access-Control-Allow-Origin: *"); // corsについて：全てのサイトを許可する(危険なのでプロダクトでは基本的には使わない)
header("Content-Type: application/json; charset=utf-8");
http_response_code(204);