'use strict';

// 79 - PROJECT #2: Modal Window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // 80 - Working With Classes
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  // 80 - Working With Classes
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let index = 0; index < btnsOpenModal.length; index++)
  btnsOpenModal[index].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 81 - Handling an "Esc" Keypress Event

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
