<?php

require(dirname(__FILE__) . '/db/dbconnect.php');
require_once(dirname(__FILE__) . '/functions.php');

// questionsテーブルからデータを取得
$questions = array();
$sql = "SELECT * FROM questions";
$questions = $pdo->query($sql)->fetchAll();

// choicesテーブルからデータを取得
$choices = $pdo->query("SELECT * FROM choices")->fetchAll();

foreach ($choices as $key => $choice) {
  $index = array_search($choice["question_id"], array_column($questions, 'id'));
  $questions[$index]["choices"][] = $choice;
}

// シャッフル処理
for ($i = 0; $i < count($questions); $i++) {
  shuffle($questions[$i]["choices"]);
};
shuffle($questions);

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="./sass/common.css" />
  <script src="./scripts/common.js" defer></script>
  <script src="./scripts/quiz.js" defer></script>
  <title>クイズページ</title>
</head>

<body>
  <?php include(dirname(__FILE__) . '/components/header.php'); ?>

  <!-- mainここから -->
  <main class="l-main">
    <article>
      <section class="p-quizhero">
        <div class="p-quizhero__title">
          <h1>POSSE課題</h1>
          <span>ITクイズ</span>
        </div>
      </section>
      <section class="p-quiz-container" id="js-quiz-area">

        <?php foreach ($questions as $key => $question) : ?>
          <div class="p-quiz js-quiz">
            <div class="p-quiz__header">
              <div class="p-quiz__header__quizlabel">Q<?= h($key) + 1 ?></div>
              <span class="p-quiz__header__question"><?= h($question['question']) ?></span>
              <figure class="p-quiz__header__image"><img src="./img/quiz/<?= h($question['image']) ?>" alt="" /></figure>
            </div>
            <div class="p-quiz__answerlabel">A</div>
            <div class="p-quiz__answer-box">
              <ul class="p-quiz__answer-box__choices">
                <?php foreach ($question['choices'] as $choice) : ?>
                  <li><button class="p-quiz__answer-box__choices__button is-attached-arrow js-choice" data-answer="<?= h($choice['valid']) ?>"><?= h($choice['name']) ?></button></li>
                <?php endforeach; ?>
              </ul>
              <div class="p-quiz__answer-box__answer js-answer">
                <div class="p-quiz__answer-box__answer__textbox">
                  <span class="js-answer-title"></span>
                  <div><span>A</span>
                    <span>
                      <?php foreach ($question['choices'] as $choice) : ?>
                        <?php if ($choice['valid'] === 1) : ?>
                          <?= h($choice['name']) ?>
                        <?php endif; ?>
                      <?php endforeach; ?>
                    </span>
                  </div>
                </div>
              </div>
              <?php if ($question['supplement']) : ?>
                <cite><a href="<?= h($question['supplement_url']) ?>"><?= h($question['supplement']) ?></a></cite>
              <?php endif; ?>
            </div>
          </div>
        <?php endforeach; ?>

      </section>
      <section class="p-line">
        <div class="p-line__container">
          <div class="p-line__content">
            <div class="p-line__inner">
              <div class="p-line__header">
                <div class="p-line__header__image"><img src="./img/icon/icon-line.svg" alt="" /></div>
                <span class="p-line__header__title">POSSE 公式LINE</span>
              </div>
              <span>
                公式LINEにてご質問を随時受け付けております。<br />詳細やPOSSE最新情報につきましては、公式LINEにてお知らせ致しますので<br />下記ボタンより友達追加をお願いします！
              </span>
              <a href="" class="p-line__link">LINE追加</a>
            </div>
          </div>
        </div>
      </section>
    </article>
    <div class="p-config">
      <a href="./admin/index.php"><i class="fa-solid fa-wrench p-config__icon" title="管理者の方はこちらから"></i></a>
    </div>
  </main>
  <!-- mainここまで -->

  <?php include(dirname(__FILE__) . '/components/footer.php'); ?>
</body>

</html>