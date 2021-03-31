// create an array of question objects
var questionArray = [
    {
    question: "How boopable is a pupper snoot?", 
    answer1: "I daresay it is quite boopable", 
    answer2: "It possesses some modicum of boopality", 
    answer3: "I assess pupper snoots possess boopness", 
    correctAnswer:"Indispuatably boopable"
    },
    {
    question: "question2", 
    correctAnswer: "q2a1", 
    answer2: "q2a2", 
    answer3: "q2a3", 
    answer4: "q2a4", 
    },
    {
    question: "question3", 
    answer1: "q3a1", 
    answer2: "q3a2", 
    correctAnswer: "q3a3", 
    answer4: "q3a4", 
    },
    {
    question: "question4", 
    answer1: "q4a1", 
    answer2: "q4a2", 
    answer3: "q4a3", 
    correctAnswer: "q4a4", 
    },
    {
    question: "question5", 
    answer1: "q5a1", 
    correctAnswer: "q5a2", 
    answer3: "q5a3", 
    answer4: "q5a4", 
    }
];

// let's make some pointers
var playButton = document.getElementById("play-btn");
var gameHeading = document.getElementById("game-heading");
var timerBox = document.getElementById("timer-box");
var gameBox = document.getElementById("game-box");
var feedbackBox = document.getElementById("feedback-box");

// game variables
var gameTimer;
var timeLeft;
var index;

playButton.addEventListener("click", startGame);

function startGame (event) {
    timeLeft = 100;
    index = 0;
    playButton.style.display = "none";
    feedbackBox.style.display = "block";
    feedbackBox.textContent = "";
    gameHeading.textContent = "Good Luck!";

    // start the timer
    gameTimer = setInterval(function() {
        timerBox.textContent = "Time Left: " + timeLeft;
        timerBox.style.visibility = "visible";
        if (timeLeft <= 0) {
            defeat();
        }
        timeLeft--;
    }, 1000);

    setTimeout(function() {
        gameHeading.style.display = "none";
        writeQuestion(index);
    }, 1000)
}

// writes the contents of the question object at the given index
function writeQuestion (index) {
    clearGameBox();

    // convert question object into an array for easier looping
    var answers = Object.values(questionArray[index]);

    // create a header for the question
    var questionHeading = document.createElement("h2");
    questionHeading.textContent = answers[0];
    gameBox.append(questionHeading);

    // generate answers
    for (i = 1; i < answers.length; i++) {
        var answerEl = document.createElement("button");

        // attach event listeners
        answerEl.addEventListener("click", checkAnswer);

        // add text and attach to document
        answerEl.textContent = answers[i];
        answerEl.setAttribute("class", "game-button")
        gameBox.append(answerEl);
    }
}    

// checks to see if player selected the correct answer
function checkAnswer (event) {
    if (event.target.textContent == questionArray[index].correctAnswer) {
        feedbackBox.textContent = "Correct!";
        index++;

        // player wins if last question is answered correctly
        if (index == questionArray.length) {
            victory();
        } else {
            writeQuestion(index);
        }

    // player is penalized 10 seconds for an incorrect answer    
    } else {
        timeLeft -= 10;
        feedbackBox.textContent = "Incorrect. You have lost 10 seconds";
    }
}

// you win :)
function victory () {
    clearInterval(gameTimer);
    clearGameBox();
    playButton.style.display = "block";
    gameHeading.textContent = "You Win!";
    gameHeading.style.display = "block";
    feedbackBox.textContent = "Play Again?";
}

// you lose :(
function defeat () {
    clearInterval(gameTimer);
    clearGameBox();
    playButton.style.display = "block";
    gameHeading.textContent = "You Lose!";
    gameHeading.style.display = "block";
    feedbackBox.textContent = "Play Again?";
}

// function addHighScore {

// }

// function viewhighScores {

// }



// clears all elements from the game-box
function clearGameBox () {
    while (gameBox.hasChildNodes()) {
        gameBox.removeChild(gameBox.firstChild);
    }
}

