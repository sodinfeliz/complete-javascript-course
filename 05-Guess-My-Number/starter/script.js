'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = Number(document.querySelector('span.highscore').textContent);

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('No number!');

    //when player wins
  } else if (guess === number) {
    setMessage('Correct number!');
    if (score > highScore) {
      highScore = score;
      document.querySelector('span.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    // when guess is incorrect
  } else if (guess !== number) {
    if (score > 1) {
      setMessage(guess > number ? 'Too high!' : 'Too low!');
      score--;
      setScore(score);
    } else {
      setMessage('You lost the game!');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  setScore(score);
  setMessage('Start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
