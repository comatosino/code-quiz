// create an array of question objects
const questionArray = [
    {
    question: "How boopable is a pupper snoot?", 
    answer1: "I daresay it is quite boopable", 
    answer2: "It possesses some modicum of boopality", 
    answer3: "I assess pupper snoots possess boopness", 
    correctAnswer:"Indispuatably boopable",
    },
    {
    question: "Borking doggo waggy wags?", 
    correctAnswer: "He made many woofs", 
    answer2: "Smol aqua doggo pats", 
    answer3: "You are doing me a frighten", 
    answer4: "Doggorino blop boofers", 
    },
    {
    question: "Much ruin diet length?", 
    answer1: "Ur givin me a spook snoot", 
    answer2: "Smol very hand that feed", 
    correctAnswer: "Heckin many pats",
    answer4: " Boofers, the neighborhood pupper", 
    },
    {
    question: "question4", 
    answer1: "cuuuuuute", 
    answer2: "heckin' good bois and girls", 
    answer3: "stahp it fren", 
    correctAnswer: "Maximum borkdrive"
    },
    {
    question: "Most angery pupper I have ever seen", 
    answer1: "Long doggo, wow, such floof", 
    correctAnswer: "Very good spot", 
    answer3: "Adorable doggo", 
    answer4: "You are doin me a concern"
    }
];

// buttons
const playBtn = document.getElementById("play-btn");      // starts a new game
const saveBtn = document.getElementById("save-btn");      // saves a high score
const clearBtn = document.getElementById("clear-btn");    // clears high scores
const scoresBtn = document.getElementById("scores-btn");  // displays high scores
const backBtn = document.getElementById("back-btn");      // go from high scores to start page

// main sections
const lobbyCard = document.getElementById("lobby-box");
const mainCard = document.getElementById("main-box");
const viewScoresCard = document.getElementById("high-scores-box");
const winCard = document.getElementById("win-box");

// info containers
const timerBox = document.getElementById("timer-box");           // displays time remaining
const feedbackBox = document.getElementById("feedback-box");     // displays feedback
const gameBox = document.getElementById("game-box");             // holds question/answers
const gameHeading = document.getElementById("game-heading");
const questIndex = document.getElementById("question-index");
const lobbyPrompt = document.getElementById("lobby-prompt");
const scoreTable = document.getElementById("high-scores-table"); // holds high scores

// game variables
var highScores = getLocalHighScores(); // retrieve high scores from local memory
var startTime = 99;
var gameTimer;
var timeLeft = startTime;
var index;

// DEBUG
// hideElement(lobbyCard);
hideElement(mainCard);         // TODO: add CSS to make this hidded on page load
hideElement(viewScoresCard);   // TODO: add CSS to make this hidded on page load
hideElement(winCard);          // TODO: add CSS to make this hidded on page load

timerBox.style.visibility = "hidden";
timerBox.textContent = "Time Left: " + timeLeft;

playBtn.addEventListener("click", playGame);
scoresBtn.addEventListener("click", viewScores);
backBtn.addEventListener("click", viewLobby);
saveBtn.addEventListener("click", saveScore);
clearBtn.addEventListener("click", clearScores);

// starts a game
function playGame (event) {
    scoresBtn.style.visibility = "hidden";

    timeLeft = startTime;
    index = 0;

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
        hideElement(lobbyCard);
        showElement(mainCard);

    }, 1000)
}

// view saved high scores
function viewScores (event) {
    writeHighScores();
    hideElement(lobbyCard);
    showElement(viewScoresCard);

    // hide high scores button
    scoresBtn.style.visibility = "hidden";
}

// saves new high score
function saveScore (event) {
    event.preventDefault(); //suppress form behavior

    // make a high score object to store data
    var newHighScore = {
        initials : document.getElementById("initials-input").value,    // grab the initials
        score : timeLeft
    };
    document.getElementById("initials-input").value = "";              // clear input field

    // save new high score obj to array
    highScores.unshift(newHighScore);

    // save high score array to localStorage
    localStorage.setItem("codeQuizHighScores", JSON.stringify(highScores));

    // refresh high scores
    writeHighScores();

    // take player to high scores page
    hideElement(winCard);
    showElement(viewScoresCard);
}

// clears high scores
function clearScores (event) {
    highScores = [];                               // reset highScores array
    localStorage.removeItem("codeQuizHighScores"); // remove from local storage
    writeHighScores();
}

// takes player back to main lobby
function viewLobby (event) {
    hideElement(viewScoresCard);
    showElement(lobbyCard);
    
    // show high scores button
    scoresBtn.style.visibility = "visible";
}

// writes the contents of the question object at the given index
function writeQuestion (index) {
    clearGameBox();

    questIndex.textContent = "Question #" + index;

    // convert question object into an array for easier looping
    // answers[0] -> question text
    // answers[n] -> nth answer text
    var answers = Object.values(questionArray[index]);

    // create a header for the question
    var questionHeading = document.createElement("h3");
    questionHeading.textContent = answers[0];
    gameBox.append(questionHeading);
    
    // generate buttons for answers
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

// writes high scores to game box
function writeHighScores () {
    clearScoreTable();

    // if no high scores to display, print message
    if (highScores.length == 0) {
        let tableRow = document.createElement("tr");         // create a <tr>
        let tableHead = document.createElement("th");        // create a <th>

        tableHead.textContent = "No high scores to display"; // add text to <th>

        tableRow.append(tableHead);                          // append <th> to <tr>
        scoreTable.append(tableRow);                         // append <tr> to <table>

    } else {
        let topRow = document.createElement("tr");           // create a <tr>

        // create table headers for initials and score and append
        let initHead = document.createElement("th");
        initHead.textContent = "Initials";
        topRow.append(initHead);
        
        let scoreHead = document.createElement("th");
        scoreHead.textContent = "Score";
        topRow.append(scoreHead);
    
        scoreTable.append(topRow);

        // loop over high scores array
        for (let i = 0; i < highScores.length; i++) {
            let currentRow = document.createElement("tr");   // create a <tr>

            let initDeet = document.createElement("td");     // create a <td>
            initDeet.textContent = highScores[i].initials;   // add initials str to <td>
            currentRow.append(initDeet);                     // append to <tr>
    
            let scoreDeet = document.createElement("td");    // create a <td>
            scoreDeet.textContent = highScores[i].score;     // add score str to <td>
            currentRow.append(scoreDeet);                    // append to <tr>

            scoreTable.append(currentRow);                   // append <tr> to <table>
        }
    }
}

// you win :)
function victory () {
    gameEnd();

    lobbyPrompt.textContent = "You won! Would you like to play again?"

    // take player to winCard to save score
    hideElement(mainCard);  
    showElement(winCard);                
}

// you lose :(
function defeat () {
    gameEnd();

    lobbyPrompt.textContent = "You lose. Would you like to try again?"
    
    // take player back to main lobby
    hideElement(mainCard);  
    showElement(lobbyCard);  

}

// clears all elements from the game-box
function clearGameBox () {
    while (gameBox.hasChildNodes()) {
        gameBox.removeChild(gameBox.firstChild);
    }
}

// clears all elements from high scores table
function clearScoreTable () {
    while (scoreTable.hasChildNodes()) {
        scoreTable.removeChild(scoreTable.firstChild);
    }
}

// displays the given DOM object
function showElement (card) {
    card.style.display = "block";
}

// hides the given DOM object
function hideElement (card) {
    card.style.display = "none";
}

// ends the game
function gameEnd () {
    clearInterval(gameTimer);                 // stop the timer
    timerBox.style.visibility = "hidden";     // make timerBox invisible
    clearGameBox();                           // remove questions/answers
}