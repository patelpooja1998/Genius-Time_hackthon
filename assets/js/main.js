
window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 4,
  hard: 3
};

// To change level
const currentLevel = levels.medium;

let time =currentLevel;
let scr = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'alert',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'able',
'above',
'afraid',
'afternoon',
'again',
'age',
'air',
'airplane',
'almost',
'alone',
'along',
'already',
'also',
'always',
'animal',
'another',
'anything',
'around',
'art',
'aunt',
'balloon',
'bark',
'barn',
'basket',
'beach',
'bear',
'because',
'become',
'began',
'begin',
'behind',
'believe',
'below',
'belt',
'better',
'birthday',
'body',
'bones',
'born',
'bought',
'bread',
'bright',
'broke',
'brought',
'busy',
'cabin',
'cage',
'camp',
 'can',
'care',
'carry',
'catch',
'cattle',
'cave',
'children',
'class',
'close',
'cloth',
'coal',
'color',
'corner',
'cotton',
'cover',
'dark',
'desert',
'did',
'dinner',
'dishes',
'does',
'done',
'do',
'dragon',
'draw',
'dream',
'drink',
'early',
'earth',
'east',
'eight'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
