'use strict';
// document.querySelector('.message').textContent;

// console.log(document.querySelector('.guess').value);

//给check增加事件监听，点击后输出在输入框中输入的值,保存为变量

/* 补充游戏逻辑,1,定义正确的数字，define the right number，通过random函数，加上trunc,
赋值给.number
然后判断输入值和secret number的大小，
input==screct,  you are right
input<secret  low  score--
>             high  score--

2.change the css
if right
background color= green
show the secret number

3 add again logic


*/
let score = 20;

const secret_number = Math.trunc(Math.random() * 20) + 1;
console.log(secret_number);

document.querySelector('.score').value = score;
console.log(score);

// document.querySelector('.number').textContent = secret_number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //判断guess 是否有值，当用户没有输入数字时，disabled这个button
  if (!guess) {
    document.querySelector('.message').textContent = 'input nothing';
    //   document.querySelector('.check').
  } else if (guess < secret_number) {
    document.querySelector('.message').textContent = 'too low';
    --score;
    document.querySelector('.score').textContent = score;
  } else if (guess > secret_number) {
    document.querySelector('.message').textContent = 'too high';
    --score;
    document.querySelector('.score').textContent = score;
  } else if (guess === secret_number) {
    document.querySelector('.message').textContent = 'you are right';
    document.querySelector('.number').textContent = secret_number;

    //change the css
    document.querySelector('body').style.backgroundColor = '#60B347';
  }

  if (score <= 0) {
    window.alert('you losing the game !');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  document.querySelector('.score').textContent = score;
  console.log(document.querySelector('.score').value);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = 'cornflowerblue';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
