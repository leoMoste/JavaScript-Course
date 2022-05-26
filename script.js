'use strict';

/*
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 30;

console.log(document.querySelector('.guess').value);
*/

// that is a random number between 0 and 20 without komma numbers
// the + 1 to insert the 20 in the range, because without it it still bet. 0 and 19
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Event: is something that happens on the page
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //that will also happend after clicked the butten
  //document.querySelector('.score').textContent = guess;

  //niceAgain();
  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Guessing😅';
    displayMessage('No Guessing😅');
  }
  //When player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    //  highScore++;
    // document.querySelector('.highscore').textContent = highScore;
    // mainpulate the css style with DOM
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? '🚀 Too high!' : '☄ Too low!';

      displayMessage(guess > secretNumber ? '🚀 Too high!' : '☄ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🚀 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '☄ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#DD4A48';
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }

  */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  //document.querySelector('.message').textContent = 'Start gessing...';
  displayMessage('Start gessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
