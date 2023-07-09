//Selects element by id for Timer
var theTimer = document.querySelector('#Timer');
var messageTimer = document.querySelector('#printTimer');
var questionPrint = document.querySelector('#questionFormat');
var optionsButton = document.querySelector('#buttonAnswer');
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
//console.log(questions[0].questionText);
//console.log(questions[1].options[1]);

//Our time is of 60s
var secondsLeft = 60;

//this function is pirnting in the obj the first set of options for first question
function sortQuestions() {
    //creating var to make it less repeatable 
    var currentQuestion = questions[questionIndex];
    questionPrint.textContent = currentQuestion.questionText;
    for (var i = 0; i < currentQuestion.options.length; i++ ) {
        console.log(currentQuestion.options[i]);
        var buttonAnswer = document.createElement("button");
        buttonAnswer.textContent = currentQuestion.options[i];
        buttonAnswer.setAttribute("class","answers");
        buttonAnswer.setAttribute("value",currentQuestion.options[i]);
        optionsButton.appendChild(buttonAnswer);
      
    }

}

optionsButton.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("value");
        questions[questionIndex].options.splice(index, 1);
    }
    // var storeAnswers = buttonAnswer.getItem(questions[questionIndex].options.value);
    // console.log(storeAnswers);

});

function startTimer() {
    //console.log(questions[questionIndex].questionText);
    //questionIndex++;
    //set timer
    var timerInterval = setInterval(function() {
    secondsLeft--;
    console.log(secondsLeft);
        if(secondsLeft === 0) {
            //Stops execution of action at set interval
            clearInterval(timerInterval);
            messageTimer.innerHTML = ("");
        }
    messageTimer.innerHTML = 'You have ' + secondsLeft;
    },1000)
    sortQuestions();

};

theTimer.addEventListener('click', startTimer);
//listens for the answer from buttons & change for next question (and decrease time if wrong)






