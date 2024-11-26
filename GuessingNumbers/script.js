'use strict';

let generateRandomNum = Math.trunc(Math.random() * 20) + 1;

const checkBtn = document.querySelector(`.check`);
const scoreElement = document.querySelector(`.score`);
const highScoreElement = document.querySelector(`.highscore`);
const message = document.querySelector(`.message`);
const againBtn = document.querySelector(`.again`);
let score = 20;
let highScore = 0;

checkBtn.addEventListener(`click`, function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (guess === generateRandomNum) {
    document.body.style.backgroundColor = `Green`;
    message.textContent = `You won`;
    highScore = highScore + 1;
    highScoreElement.textContent = highScore;
    checkBtn.disabled = true;
  } else if (!guess) {
    message.textContent = `This is not a number`;
  } else if (guess < generateRandomNum) {
    score--;
    scoreElement.textContent = score;
    checkBtn.disabled = false;
    message.textContent = `The number is higher`;
  } else if (guess > generateRandomNum) {
    score--;
    scoreElement.textContent = score;
    checkBtn.disabled = false;
    message.textContent = `The number is lower`;
  }
  if (score === 0) {
    message.textContent = `You lost`;
    scoreElement.textContent = `-`;
    checkBtn.disabled = true;
    document.querySelector(`.number`).textContent = generateRandomNum;
    document.body.style.backgroundColor = `red`;
  }
});
againBtn.addEventListener(`click`, function () {
  score = 20;
  scoreElement.textContent = score;
  message.textContent = `Start guessing...`;
  document.querySelector('.guess').value = '';
  checkBtn.disabled = false;
  generateRandomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.number`).textContent = `?`;
  document.body.style.backgroundColor = `#222`;
});
