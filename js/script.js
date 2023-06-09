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

    const activeCircles = document.querySelectorAll('.circle--active');
    progress.style.width = `${
      ((activeCircles.length - 1) / (circles.length - 1)) * 100
    }%`;

    if (curActive === 1) {
      btnPrev.disabled = true;
    } else if (curActive === circles.length) {
      btnNext.disabled = true;
    } else {
      btnPrev.disabled = false;
      btnNext.disabled = false;
    }
  });
};

btnNext.closest('.container').addEventListener('click', function (event) {
  const clicked = event.target;

  if (clicked.classList.contains('btn__next')) {
    curActive++;
    if (curActive > circles.length) curActive = circles.length;
    updateDisplay();
  }

  if (clicked.classList.contains('btn__prev')) {
    curActive--;
    if (curActive < 1) curActive = 1;
    updateDisplay();
  }
});
