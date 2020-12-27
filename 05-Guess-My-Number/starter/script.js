'use strict';
// document.querySelector('.message').textContent;

// console.log(document.querySelector('.guess').value);

//给check增加事件监听，点击后输出在输入框中输入的值,保存为变量

// 补充游戏逻辑

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector('.message').textContent = 'you are right';
  console.log(typeof guess);

  //判断guess 是否有值，当用户没有输入数字时，disabled这个button
  if (!guess) {
    document.querySelector('.message').textContent = 'input nothing';
    //   document.querySelector('.check').
  }
});
