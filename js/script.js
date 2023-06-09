'use strict';

const btnPrev = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');

let curActive = 1;

const updateDisplay = function () {
  circles.forEach((circle, index) => {
    if (index < curActive) circle.classList.add('circle--active');
    else circle.classList.remove('circle--active');
  });
};
