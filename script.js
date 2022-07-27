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
        content: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        choices: [
            "Hyper Transfer Marking Language",
            "Hyper Text Markup Language",
            "Hard Type Manufactered Live",
            "Handy Tools Made Locally"
        ]

    },
    {
        content: "How do you write a for loop in JavaScript?",
        answer: "for (var i = 0; i < something.length; i++) {}",
        choices: [
            "while (i < something.length) {}",
            "for (var i = 0; i > something.length; i++) {}",
            "for (var i = 0; i < something.length; i++) {}",
            "for (i = 0: i > something.length: i++) {}"
        ]
    },
    {
        content: "What does stopPropagation() do?",
        answer: "During the capturing and bubbling phases, prevents the current event from propagating further",
        choices: [
            "Closes the browser",
            "Exits out of the current function returning null.",
            "During the capturing and bubbling phases, prevents the current event from propagating further",
            "Prevents the default action from occuring during an event."
        ]
    },
    {
        content: "What is an object in javaScript?",
        answer: "An object is a collection of key-value pairs.",
        choices: [
            "An object is a collection of key-value pairs.",
            "Objects are the variables passed in through as parameters for a function.",
            "An object is another word for an element in an array.",
            "An object is a drawn shape of any kind."
        ]
    },
    {
        content: "What is the difference between var and let?",
        answer: "Let is block scoped and var is function scoped.",
        choices: [
            "Var is only used for declaring a function",
            "Let is block scoped and var is function scoped.",
            "Let is only used for variables of type number.",
            "Var and let are exactly the same."
        ]
    },
    {
        content: "A language used for stylizing websites is: ",
        answer: "CSS",
        choices: [
            "Java",
            "CSS",
            "Node.js",
            "HTML"
        ]
    },
    {
        content: "What is the most useful tool for debugging?",
        answer: "console.log()",
        choices: [
            "console.log()",
            "isNan",
            "return",
            "window.alert()"
        ]
    },
    {
        content: "What is 9 / 3?",
        answer: "3",
        choices: [
            "3",
            "0",
            "14",
            "6"
        ]
    },
    {
        content: "What is 9 / 3?",
        answer: "3",
        choices: [
            "3",
            "0",
            "14",
            "6"
        ]
    },
    {
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

    if (questionIndex < questions.length) {

    question.innerHTML = questions[questionIndex].content;

    option1.innerHTML = questions[questionIndex].choices[0];
    option2.innerHTML = questions[questionIndex].choices[1];
    option3.innerHTML = questions[questionIndex].choices[2];
    option4.innerHTML = questions[questionIndex].choices[3];

    optionButtons.append(option1);
    optionButtons.append(option2);
    optionButtons.append(option3);
    optionButtons.append(option4);

    option1.addEventListener('click', function (e) {
        e.stopPropagation();
        isCorrect(option1);
    });
    option2.addEventListener('click', function (e) {
        e.stopPropagation();
        isCorrect(option2);
    });
    option3.addEventListener('click', function (e) {
        e.stopPropagation();
        isCorrect(option3);
    });
    option4.addEventListener('click', function (e) {
        e.stopPropagation();
        isCorrect(option4);
    });
}
else {
submitHighscore();
}
}

function quizRunning() {

    function decrementSeconds() {
        seconds -= 1;
        timeLeft.innerText = seconds;
    }

    var cancel = setInterval(decrementSeconds, 1000);

    getQuestion();
}

function isCorrect(selected) {

    var choice = selected.innerHTML;
    var answer = questions[questionIndex].answer;

    if (choice.content == answer.content) {
        rightAnswer();
    } else {
        wrongAnswer();
    }

}

function rightAnswer() {
    choiceResult.innerHTML = "Correct!";
    incrementIndex();
    
}
function wrongAnswer() {
    
    choiceResult.innerHTML = "Wrong!";
    seconds -= 10;
    incrementIndex();

}
function incrementIndex() {
    questionIndex += 1;
    getQuestion();
}

function submitHighscore() {
    window.alert("Quiz over")

}

function viewHighscores() {

}