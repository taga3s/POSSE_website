"use strict";

{
  /**
   * @description クイズエリアの取得
   * @type {NodeListOf<Element>}
   */
  const allQuiz = document.querySelectorAll(".js-quiz");

  /**
   * @description buttonタグにdisabledを付与
   * @param {NodeListOf<Element>} choices 
   */
  const setDisabled = (choices) => {
    choices.forEach((choice) => {
      choice.disabled = true;
    });
  };

  /**
   * @description buttonタグからis-attached-arrowクラスを外す
   * @param {NodeListOf<Element>} choices 
   */
  const removeArrows = (choices) => {
    choices.forEach((choice) => {
      choice.classList.remove("is-attached-arrow");
    });
  };

  /**
   * @description 各問題の中での処理
   */
  function checkAnswer() {
    allQuiz.forEach((quiz) => {
      const choices = quiz.querySelectorAll(".js-choice");
      const answerTrue = quiz.querySelector(".js-answer");
      const answerTitle = quiz.querySelector(".js-answer-title");
      const correctNum = 1;

      choices.forEach((choice) => {
        choice.addEventListener("click", () => {
          choice.classList.add("is-selected");

          //すべてのボタンを非活性化
          setDisabled(choices);

          //ボタンの三角アイコンを外す
          removeArrows(choices);

          const selectedAnswerNumber = Number(choice.getAttribute("data-answer"));

          /**
           * @description 押下された選択肢に格納されていた数字と正解の数字が等しいか確かめます。
           * @param {boolean} iscorrect 
           */
          const iscorrect = selectedAnswerNumber === correctNum;

          if (iscorrect == true) {
            answerTrue.classList.add("u-display-block", "u-bg-color-pink");
            answerTitle.innerText = "正解";
            answerTitle.classList.add("u-color-red");
          } else {
            answerTrue.classList.add("u-display-block", "u-bg-color-lightblue");
            answerTitle.innerText = "不正解...";
            answerTitle.classList.add("u-color-blue");
          }
        });
      });
    });
  }
  
  checkAnswer();
}
