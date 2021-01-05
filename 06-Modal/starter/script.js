'use strict';
//queryS取值，赋值给变量，
//给showbutton添加一个点击监听事件，change the class name ,use classList.remove
//add keyboard events
const showmodalBtn = document.querySelectorAll('.show-modal');
const hiddenBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
// console.log(showmodal);
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showmodalBtn.length; i++) {
  console.log(showmodalBtn[i].textContent);
  showmodalBtn[i].addEventListener('click', openModel);
}
hiddenBtn.addEventListener('click', closeModel);
//添加键盘事件
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
