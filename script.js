'use strict';

console.log(document.querySelector('.message').textContent);

//Step 3 創造隨機數 宣告變數（outside）呈現在?框中以便測試
//Step 8 隱藏隨機數 > 移至猜對邏輯區
//Step 5 宣告儲存分數的變數（將分數保存在程式中，而非依賴DOM數字的讀取）
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Step 1 猜對畫面_資料基礎: 上? > 數字 + 右Sg > Correct Number
// document.querySelector('.number').textContent = '13';

//Step 2 輸入數字 偵測Check按鈕點擊 > storeValue > Number
//Step 4 檢查是否匹配: 調整 message + score (const)
//Step 6 遊戲結束邏輯與畫面
//Step 7 猜對畫面_CSS視覺強化: 背景綠色 + 數字框加大

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //加Number原因: value的資料類型預設為string
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#00aaecff';
    document.querySelector('.number').style.color = 'orange';
    document.querySelector('.number').style.width = '30rem';
    //Step 10 儲存最高的答對分數
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥀 You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }

  /*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥀 You lose!';
      document.querySelector('.score').textContent = 0;
    }
  } 
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score--;
    } else {
      document.querySelector('.message').textContent = '🥀 You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

//Step 9 重新挑戰: 偵測Again按鈕點擊 > 產生新變數 > 恢復Score為初始值 (隱藏變數+畫面呈現)  > 恢復message為初始值 > 恢復背景色+文字色 恢復?框大小 > 清除數字: ?+輸入框
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //恢復guess框用textCotent賦值為空字串沒用，一定要用value
});
