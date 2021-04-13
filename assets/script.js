// create an array of question objects
const questionArray = [
    {
    question: "question1", 
    answer1: "q1a1", 
    answer2: "q1a2", 
    answer3: "q1a3", 
    correctAnswer:"q1a4"
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

// buttons
const playBtn = document.getElementById("play-btn");      // starts a new game
const saveBtn = document.getElementById("save-btn");      // saves a high score
const clearBtn = document.getElementById("clear-btn");    // clears high scores
const scoresBtn = document.getElementById("scores-btn");  // displays high scores
const backBtn = document.getElementById("back-btn");      // go from high scores to start page

const timerBox = document.getElementById("timer-box");           // displays time remaining
const gameBox = document.getElementById("game-box");             // holds question/answers
const scoreTable = document.getElementById("high-scores-table"); // holds high scores
const feedbackBox = document.getElementById("feedback-box");     // displays feedback
const gameHeading = document.getElementById("game-heading");

// game variables
var highScores = getLocalHighScores(); // retrieve high scores from local memory
var startTime = 100;
var gameTimer;
var timeLeft = startTime;
var index;

// plays the game
playBtn.addEventListener("click", function (event) {
    timeLeft = startTime;
    index = 0;

    // feedbackBox.style.display = "block";
    // feedbackBox.textContent = "";
    gameHeading.textContent = "Good Luck!";

    // start the timer
    gameTimer = setInterval(function() {
        timerBox.textContent = "Time Left: " + timeLeft;
        timerBox.style.visibility = "visible";

        // if no time is left, player loses
        if (timeLeft <= 0) {
            timerBox.style.visibility = "hidden";
            defeat();
        }
        timeLeft--;

        //updates every second
    }, 1000);

    setTimeout(function() {
        gameHeading.textContent = `Click "Play" to start!`;
        writeQuestion(index);
    }, 1000)
});

// collects initials and time left, creates a score object, and saves it to local storage
saveBtn.addEventListener("click", function(event) {
    event.preventDefault(); //suppress form behavior

    // make a high score object to store data
    var newHighScore = {
        initials : document.getElementById("initials-input").value,    // grab the initials
        score : timeLeft
    };
    document.getElementById("initials-input").value = "";              // clear input field

    // save new high score obj to array
    highScores.push(newHighScore);

    // save high score array to localStorage
    localStorage.setItem("codeQuizHighScores", JSON.stringify(highScores));
});

// deletes high scores from local storage
clearBtn.addEventListener("click", function (event) {
    highScores = [];
    localStorage.removeItem("codeQuizHighScores");
    writeHighScores();
});

// displays high scores card
scoresBtn.addEventListener("click", function (event) {
    console.log("High Scores button clicked");
});

// back to start card
backBtn.addEventListener("click", function () {
    console.log("Back button clicked");
});

// need a function to write high scores to game box
function writeHighScores () {
    clearScoreTable();

    const scoreRow = document.createElement("tr");  // create a <tr>

    const initHead = document.createElement("th");  // create a <th>
    initHead.textContent = "Initials";              // add "Initials" to <th>
    scoreRow.append(initHead);                      // append to <tr>

    const scoreHead = document.createElement("th"); // create a <th>
    scoreHead.textContent = "Score";                // add "score" to <th>
    scoreRow.append(scoreHead);                     // append to <tr>

    scoreTable.append(scoreRow);                    // append to table

    // loop over high scores array
    // for each element in array
        // 



}



// retrieves high scores from local storage
// returns an empty array if local storage doesn't exist
function getLocalHighScores () {

var localHighScores = JSON.parse(localStorage.getItem("codeQuizHighScores"));
    
    if (localHighScores) {
        return localHighScores;
    } else {
        return [];
    }
}



// writes the contents of the question object at the given index
function writeQuestion (index) {
    clearGameBox();

    // convert question object into an array for easier looping
    var answers = Object.values(questionArray[index]);

    // create a header for the question
    var questionHeading = document.createElement("h3");
    questionHeading.textContent = answers[0];
    gameBox.append(questionHeading);
    

    // generate answers
    for (i = 1; i < answers.length; i++) {
        var answerEl = document.createElement("button");

        // attach event listeners
        answerEl.addEventListener("click", checkAnswer);

        // add text and attach to document
        answerEl.textContent = answers[i];
        answerEl.setAttribute("class", "game-button");
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

// TODO: factor out common game end code
// function gameEnd () {
//     clearInterval(gameTimer);
//     clearGameBox();
//     playButton.style.display = "block";
//     gameHeading.style.display = "block";
//     feedbackBox.textContent = "Play Again?";
// }

// you win :)
function victory () {
    clearInterval(gameTimer);
    clearGameBox();
    playButton.style.display = "block";
    gameHeading.textContent = "You Win!";
    gameHeading.style.display = "block";
    feedbackBox.textContent = "Play Again?";

    // show high scores box
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

// clears all elements from the game-box
function clearGameBox () {
    while (gameBox.hasChildNodes()) {
        gameBox.removeChild(gameBox.firstChild);
    }
}

function clearScoreTable () {
    while (scoreTable.hasChildNodes()) {
        scoreTable.removeChild(scoreTable.firstChild);
    }
}
