## Ajaxについて調べたこと
- 即時関数！ https://kumamidori.hatenadiary.org/entry/20120728/p1
- 同期処理・非同期処理 https://qiita.com/Takagi_/items/84b4a2184f42ee77867c
- https://developer.mozilla.org/ja/docs/Web/API/fetch#Parameters

## 画像アップロードに関しての学び
- htmlのformでenctype="multipart/form-data"になっていない場合、ファイルのアップロードは出来ない。(https://www.yoheim.net/blog.php?q=20171201)
- $_FILESはHTTP POSTでアップロードされた値を取得するファイルアップロード変数。これは連想配列で取得する。(https://wepicks.net/phpref-files/)
- move_uploaded_fileについて (https://uxmilk.jp/14317)

## 問題アップロードについて
- lastInsertedIdの利用
- postによる複数のname属性の取得(https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10150327680)
- isset($_POST["image"])というのは不可能なようである。$_FILESを使うようにする。要調べ

## SQLエラー関連
- https://qiita.com/SuguruOoki/items/eb74d2c33ee9f023aaf1
- https://inouelog.com/mysql-cannnot-delete/

## フロントににエラー情報が分かるような仕組みづくりを
- response ステータスについて調べてみる。
- 本来ならば、エラーページそのものにはエラー情報を含めてはいけない。情報漏洩の危険性がある。