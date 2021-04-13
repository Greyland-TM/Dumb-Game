'use strict';

// My Functions
function textEdit(className, newText) {
  document.querySelector(className).textContent = newText;
}

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function highOrLow(score, message) {
  if (score > 0) {
    textEdit('.message', message);
    textEdit('.score', score);

    // Lost the game
  } else {
    textEdit('.message', 'You lost the game. 😭');
    textEdit('.score', 0);
  }
  return;
}

// Variables
let secretNumber = generateNumber();
let score = 20;
let highScore = 0;
let message = '';

// Adding event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    textEdit('.message', '❌ No number!');

    // Player wins
  } else if (guess === secretNumber) {
    textEdit('.message', '✅ You got it!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Updating High Score
    if (score > highScore) {
      highScore = score;
      textEdit('.highscore', highScore);
    }

    // Guess too high
  } else if (guess !== secretNumber) {
    message = guess > secretNumber ? 'Too high.' : 'Too low.';
    score -= 1;
    highOrLow(score, message);
  }
});

// Starting New Game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateNumber();
  textEdit('.number', secretNumber);
  textEdit('.message', 'Start guessing...');
  textEdit('.score', score);
  textEdit('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
