let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement('p');

let preGuessedNum = [];
let numOfAtempt = 1;



let playGame = true;

if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter the valid number");
    }else if(guess < 1){
        alert("Please enter the numaber more than 1")
    }else if(guess > 100){
        alert("Please enter the numaber less than 100")
    } else {
        preGuessedNum.push(guess);
        
        if(numOfAtempt === 11) {
            cleanUpGuess(guess);
            displayMessage(`Game over the Random number was ${randomNum}`);
            endGame();
        } else {
            cleanUpGuess(guess);
            checkGuesses(guess);
        }
    }
}


function checkGuesses(guess) {
    if(guess === randomNum) {
        displayMessage(`Congrats you guessed it right the random number is ${randomNum}`)
        endGame()
    } else if(guess > randomNum) {
        displayMessage(`You guessed the number which is Tooo high`)
    } else if(guess < randomNum) {
        displayMessage(`You guessed the number which is Tooo low`)
    }
}

function cleanUpGuess(guess) {
    userInput.value = '';
    guesses.innerHTML += `${guess}, `;
    numOfAtempt++;
    remaining.textContent = `${11 - numOfAtempt}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}


function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add("button");
    p.innerHTML = `<h4 id="newGame">Play Again</h4>`;
    resultParas.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', (e) => {
        randomNum = parseInt(Math.random() * 100 + 1);
        preGuessedNum = [];
        numOfAtempt = 1;
        guesses.innerHTML = '';
        remaining.innerHTML = `${11 - numOfAtempt}`;
        userInput.removeAttribute('disabled');
        resultParas.removeChild(p);
        playGame = true;
    })
}

