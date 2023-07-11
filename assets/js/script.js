//Selects element by id for Timer
var theTimer = document.querySelector('#Timer');
var messageTimer = document.querySelector('#printTimer');
var questionPrint = document.querySelector('#questionFormat');
var optionsButton = document.querySelector('#buttonAnswer');
var gameOverScoreBoard = document.querySelector('#score');
var questionIndex = 0;

var questions = [
    {
        questionText: 'Which of the following variables is string not a number?',
        options:['var eight = 8','cons eight = 10', 'var eight = "eight"', 'None of the above'],
        correct: 'var eight = "eight"'
    },
    {
        questionText: 'Which of the following variables is a number?',
        options:['var eight = 8','cons eight = "10"', 'var eight = eight', 'None of the above'],
        correct: 'var eight = 8'
    }
]

//Our time is of 30s
var secondsLeft = 30;

//this function is pirnting in the obj the first set of options for first question
function sortQuestions() {
    var currentQuestion = questions[questionIndex];
    //creating var to make it less repeatable 
    questionPrint.textContent = currentQuestion.questionText;
    optionsButton.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++ ) {
        var buttonAnswer = document.createElement("button");
        buttonAnswer.textContent = currentQuestion.options[i];
        buttonAnswer.setAttribute("class","answers");
        buttonAnswer.setAttribute("value",currentQuestion.options[i]);
        optionsButton.appendChild(buttonAnswer);
    }
}

//variable to store score information
var score = 0;
var stopQuerying = 1;

optionsButton.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === false) {
        return;
    }
    console.log("This is stop" + stopQuerying);
    if (stopQuerying === questions.length) {
        gameOver();
    } else {
        if (element.value !== questions[questionIndex].correct) {
            secondsLeft = secondsLeft-5;
        }
        if (element.value === questions[questionIndex].correct) {
            score = score+1;
            console.log("This is the score" + score);
        }
        sortQuestions();
        questionIndex++;
        stopQuerying++;
    }
});

function startTimer() {
    //set timer
    var timerInterval = setInterval(function() {
    secondsLeft--;
        if(secondsLeft === 0 ) {
            //Stops execution of action at set interval
            clearInterval(timerInterval);
            gameOver();
        }
    messageTimer.innerHTML = 'You have ' + secondsLeft;
    },1000)
    sortQuestions();
};

//function to stop game
function gameOver() {
    theTimer.innerHTML = ("");
    messageTimer.innerHTML = ("");
    questionPrint.innerHTML = ("");
    optionsButton.innerHTML = ("");
    gameOverScoreBoard.textContent = ("Your score is " + score);
}

theTimer.addEventListener('click', startTimer);






