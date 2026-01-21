// Generate random number
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM elements
const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

function checkGuess() {
  const guess = Number(input.value);

  // Validation
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⚠ Please enter a number between 1 and 100";
    message.className = "message";
    return;
  }

  attempts++;
  attemptsText.textContent = attempts;

  if (guess < secretNumber) {
    message.textContent = "📉 Too low! Try a higher number.";
    message.className = "message low";
  } 
  else if (guess > secretNumber) {
    message.textContent = "📈 Too high! Try a lower number.";
    message.className = "message high";
  } 
  else {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    message.className = "message success";
  }

  input.value = "";
  input.focus();
}

// Reset Game
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsText.textContent = 0;
  message.textContent = "";
  input.value = "";
  input.focus();
}
