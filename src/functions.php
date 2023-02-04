<?php

function h($s)
{
  return htmlspecialchars($s, ENT_QUOTES, 'utf-8');
}

function create_response($status, $message)
{
  $json = json_encode($message, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  header("Access-Control-Allow-Origin: *"); //corsについて:全てのサイトを許可する(危険なのでプロダクトでは基本的には使わない)
  header("Content-Type: application/json; charset=utf-8");
  http_response_code($status); //ステータスコードを設定
  echo $json;
}