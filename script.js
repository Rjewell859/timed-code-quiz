var viewScores = document.querySelector("#view");
var timeWords = document.querySelector("#timeleft");
var timeLeft = document.querySelector("#time");
var question = document.querySelector("#question");
var introParagraph = document.querySelector("#startparagraph");
var startButton = document.querySelector("#start");
var optionButtons = document.querySelector("#options");
var submitButton = document.querySelector("#submit");
var highScores = document.querySelector("#highscores");
var choiceResult = document.querySelector("#result");

var questionIndex = 0;
var seconds = 100;

var option1 = document.createElement("button");
    var option2 = document.createElement("button");
    var option3 = document.createElement("button");
    var option4 = document.createElement("button");

var questions = [
    {
        title: "Question 1",
        content: "What is 1 + 1?",
        answer: "2",
        choices: [
            "5",
            "3",
            "2",
            '46'
        ]

    },
    {
        title: "Question 2",
        content: "What is 9 / 3?",
        answer: "3",
        choices: [
            "3",
            "0",
            "14",
            "6"
        ]
    }
]


    startButton.addEventListener('click', start);

function start() {
    startButton.remove();
    introParagraph.remove();
   
    quizRunning();
    
}

function getQuestion() {

    question.innerHTML = questions[questionIndex].content;

    
    
    
    
    option1.innerHTML = questions[questionIndex].choices[0];
    option2.innerHTML = questions[questionIndex].choices[1];
    option3.innerHTML = questions[questionIndex].choices[2];
    option4.innerHTML = questions[questionIndex].choices[3];

    optionButtons.append(option1);
    optionButtons.append(option2);
    optionButtons.append(option3);
    optionButtons.append(option4);

    option1.addEventListener('click', function(e){e.stopPropagation(); isCorrect(option1);});
    option2.addEventListener('click', function(e){e.stopPropagation(); isCorrect(option2);});
    option3.addEventListener('click', function(e){e.stopPropagation(); isCorrect(option3);});
    option4.addEventListener('click', function(e){e.stopPropagation(); isCorrect(option4);});

    



}

function quizRunning() {
    

    

function decrementSeconds() {
    seconds -= 1;
    timeLeft.innerText = seconds;
}

var cancel = setInterval(decrementSeconds, 1000);

getQuestion();


}

function isCorrect(e) {
    e.stopPro 
    if (e.innerHTML == questions[questionIndex].answer) {
        rightAnswer();
    }
    else {
        wrongAnswer();
    }
    


}

function wrongAnswer() {

    choiceResult.innerHTML = "WRONG!";
    questionIndex += 1;
    seconds -= 10;
    getQuestion();
    

}

function rightAnswer() {
    choiceResult.innerHTML  ="Correct!";
    questionIndex +=1;
    getQuestion();
    

}



function submitHighscore() {

}

function viewHighscores() {

}

