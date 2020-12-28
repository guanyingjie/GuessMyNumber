'use strict';
//queryS取值，赋值给变量，

const showmodal = document.querySelectorAll('.show-modal');
const hiddenBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
console.log(showmodal);

for (let i = 0; i < showmodal.length; i++) {
  console.log(showmodal[i].textContent);
}
