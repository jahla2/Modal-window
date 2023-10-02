'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//Open Modal
const openModal = function () {
  console.log('Button Clicked');
  //Remove a class from an element
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Loop to Nodelist with event listener
for (let i = 0; i < btnOpenModal.length; i++)
  //Open Modal event Listener
  btnOpenModal[i].addEventListener('click', openModal);

//Close Modal event Listener
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Handling Key Press
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  //Check if Escape key pressed and if modal not contain hidden class
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
