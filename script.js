var viewScores = document.querySelector("#view");
var timeWords = document.querySelector("#timeleft");
var timeLeft = document.querySelector("#time");
var question = document.querySelector("#question");
var introParagraph = document.querySelector("#startparagraph");
var startButton = document.querySelector("#start");
var optionButtons = document.querySelector("#options");
var submitButton = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var highScores = document.querySelector("#highscores");
var choiceResult = document.querySelector("#result");
var questionsWords = document.querySelector("#questionWords")
var toAnswer = document.querySelector("#left");

var questionIndex = 0;
var seconds = 100;
var questionsLeft;

var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");

submitButton.style.display = 'none';

var questions = [
    {
        content: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        correct: "B",
        choices: [
            A = "Hyper Transfer Marking Language",
            B = "Hyper Text Markup Language",
            C = "Hard Type Manufactered Live",
            D = "Handy Tools Made Locally"
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
        content: "What is the '!' symbol in javaScript?",
        answer: "'!' is the logical not operator.",
        choices: [
            "Used at the end of a query selection.",
            "It is a tool used to remove the first element of an array.",
            "'!' is the logical not operator.",
            "The exclamation mark forces a function to execute."
            
        ]
    },
    {
        content: "What is the 'this' keyword?",
        answer: "This refers to the object that a function is a property of.",
        choices: [
            "3",
            "0",
            "This refers to the object that a function is a property of.",
            "6"
        ]
    },
    {
        content: "What are the main data types in javaScript?",
        answer: "String, number, bigint, boolean, undefined",
        choices: [
            "Decimal, integer, undefined, function, long",
            "String, number, bigint, boolean, undefined",
            "Var, string, symbol, object, small",
            "console, form, object, loop"
        ]
    },
    {
        content: "What is the 'this' keyword?",
        answer: "This refers to the object that a function is a property of.",
        choices: [
            "3",
            "0",
            "This refers to the object that a function is a property of.",
            "6"
        ]
    },
    {
        content: "What are the main data types in javaScript?",
        answer: "String, number, bigint, boolean, undefined",
        choices: [
            "Decimal, integer, undefined, function, long",
            "String, number, bigint, boolean, undefined",
            "Var, string, symbol, object, small",
            "console, form, object, loop"
        ]
    },
    {
        content: "What is the 'this' keyword?",
        answer: "This refers to the object that a function is a property of.",
        choices: [
            "3",
            "0",
            "This refers to the object that a function is a property of.",
            "6"
        ]
    },
    {
        content: "What are the main data types in javaScript?",
        answer: "String, number, bigint, boolean, undefined",
        choices: [
            "Decimal, integer, undefined, function, long",
            "String, number, bigint, boolean, undefined",
            "Var, string, symbol, object, small",
            "console, form, object, loop"
        ]
    },
    {
        content: "What is the 'this' keyword?",
        answer: "This refers to the object that a function is a property of.",
        choices: [
            "3",
            "0",
            "This refers to the object that a function is a property of.",
            "6"
        ]
    },
    {
        content: "What are the main data types in javaScript?",
        answer: "String, number, bigint, boolean, undefined",
        choices: [
            "Decimal, integer, undefined, function, long",
            "String, number, bigint, boolean, undefined",
            "Var, string, symbol, object, small",
            "console, form, object, loop"
        ]
    }
]


startButton.addEventListener('click', start);

function start() {

    questionsLeft = questions.length - 1;
    toAnswer.textContent = questionsLeft;
    startButton.remove();
    introParagraph.remove();

    getQuestion();
    quizRunning();

}


function getQuestion() {
    var answer = questions[questionIndex].answer;
    question.innerHTML = questions[questionIndex].content;

    option1.innerHTML = questions[questionIndex].choices[0];
    option2.innerHTML = questions[questionIndex].choices[1];
    option3.innerHTML = questions[questionIndex].choices[2];
    option4.innerHTML = questions[questionIndex].choices[3];

    optionButtons.appendChild(option1);
    optionButtons.appendChild(option2);
    optionButtons.appendChild(option3);
    optionButtons.appendChild(option4);

    option1.addEventListener('click', function (event) {
        event.preventDefault();
        isCorrect(option1.innerText);
    });
    option2.addEventListener('click', function (event) {
        event.preventDefault();
        isCorrect(option2.innerText);
    });
    option3.addEventListener('click', function (event) {
        event.preventDefault();
        isCorrect(option3.innerText);
    });
    option4.addEventListener('click', function (event) {
        event.preventDefault();
        isCorrect(option4.innerText);
    });

    if (questionsLeft <= 0) {
        submitHighscore();
    }
}

function quizRunning() {

    function decrementSeconds() {
        seconds -= 1;
        timeLeft.innerText = seconds;
        if (seconds < 0) {
            return;
        }
    }
    var countDown = setInterval(decrementSeconds, 1000);
    
}

function isCorrect(selected) {
    
    var answer = questions[questionIndex].answer;
    
        

    if (selected == answer) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
    

}

function rightAnswer() {
    choiceResult.innerHTML = "Correct!";
    questionsLeft -=1;
    questionIndex +=1;
    toAnswer.textContent = questionsLeft;
    getQuestion();
    
}
function wrongAnswer() {
    
    choiceResult.innerHTML = "Wrong!";
    questionsLeft -=1;
    questionIndex +=1;
    toAnswer.textContent = questionsLeft;
    seconds -= 10;
    getQuestion();

}


function submitHighscore() {
    question.remove();
    toAnswer.remove();
    
    option1.remove();
    option2.remove();
    option3.remove();
    option4.remove();
    toAnswer.innerHTML('');
    choiceResult.innerHTML('');
    submitButton.style.display = "inline-block";
    submitButton.appendChild(submitArea);

}

function viewHighscores() {

}