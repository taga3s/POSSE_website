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
  <title>トップページ</title>
</head>

<body>
  <?php include(dirname(__FILE__) . '/components/header.php'); ?>

  <!-- mainここから -->
  <main class="l-main">
    <article>
      <section class="p-tophero">
        <div class="p-tophero__container">
          <div class="p-tophero__title">
            <div class="p-tophero__title__text">
              <h1>学生プログラミングコミュニティPOSSE（ポッセ）</h1>
              <span>自分史上最高を仲間と。</span>
            </div>
          </div>
          <img src="./img/img-hero.jpg" alt="" />
          <div class="p-tophero__sd">
            <span class="p-tophero__sd__circle"></span>
            <span class="p-tophero__sd__text">Scroll Down</span>
          </div>
        </div>
      </section>
      <section class="p-about">
        <div class="p-about__container">
          <div class="p-about__title">
            <h2>POSSEとは</h2>
            <span>About Posse</span>
          </div>
          <div class="p-about__content">
            <img src="./img/img-about.jpg" alt="" />
            <p>
              学生プログラミングコミュニティ「POSSE(ポッセ)」は、人格とプログラミング、二つの面での成長をスローガンに活動しており、大学生だけが集まって学びを深めるコミュニティです。<br />
              プログラミングだけではありません。オフラインでのイベントや、旅行など様々な企画を行っています！<br />
              それらを通じて、夏休みの大半をPOSSEで出来た仲間と過ごす人もたくさんいるほどメンバーとの仲が深まります。
            </p>
          </div>
        </div>
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
      <div class="p-config">
        <a href="./admin/index.php"><i class="fa-solid fa-wrench p-config__icon" title="管理者の方はこちらから"></i></a>
      </div>
      <div class="p-line-add">
        <div class="p-line-add__container">
          <div class="p-line-add__image01"><img src="./img/icon/icon-line.svg" alt="" /></div>
          <span><span class="p-line-add__disappear-text">POSSE</span>公式LINEで<br />最新情報をGET！</span>
          <div class="p-line-add__image02"><img src="./img/icon/icon-link-light.svg" alt="" /></div>
        </div>
      </div>
    </article>
  </main>

  <?php include(dirname(__FILE__) . '/components/footer.php'); ?>
</body>

</html>