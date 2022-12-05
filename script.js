var viewScores = document.querySelector("#view");
var timeWords = document.querySelector("#timeleft");
var timeLeft = document.querySelector("#time");
var question = document.querySelector("#question");
var introParagraph = document.querySelector("#startparagraph");
var startButton = document.querySelector("#start");
var optionButtons = document.querySelector("#options");
var submitButton = document.querySelector("#submit");
var submitArea = document.querySelector("#submitArea");
var submitSection = document.querySelector("#submitSection");
var initials = document.querySelector("#initials");
var highScores = document.querySelector("#highscores");
var choiceResult = document.querySelector("#result");
var questionsWords = document.querySelector("#questionWords");
var toAnswer = document.querySelector("#left");
var restartButton = document.querySelector("#restart");

var answer;
var questionIndex = 0;
var seconds = 100;
var timerOn = false;

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
      "Handy Tools Made Locally",
    ],
  },
  {
    content: "How do you write a for loop in JavaScript?",
    answer: "for (var i = 0; i < something.length; i++) {}",
    choices: [
      "while (i < something.length) {}",
      "for (var i = 0; i > something.length; i++) {}",
      "for (var i = 0; i < something.length; i++) {}",
      "for (i = 0: i > something.length: i++) {}",
    ],
  },
  {
    content: "What does stopPropagation() do?",
    answer:
      "During the capturing and bubbling phases, prevents the current event from propagating further",
    choices: [
      "Closes the browser",
      "Exits out of the current function returning null.",
      "During the capturing and bubbling phases, prevents the current event from propagating further",
      "Prevents the default action from occuring during an event.",
    ],
  },
  {
    content: "What is an object in javaScript?",
    answer: "An object is a collection of key-value pairs.",
    choices: [
      "An object is a collection of key-value pairs.",
      "Objects are the variables passed in through as parameters for a function.",
      "An object is another word for an element in an array.",
      "An object is a drawn shape of any kind.",
    ],
  },
  {
    content: "What is the difference between var and let?",
    answer: "Let is block scoped and var is function scoped.",
    choices: [
      "Var is only used for declaring a function",
      "Let is block scoped and var is function scoped.",
      "Let is only used for variables of type number.",
      "Var and let are exactly the same.",
    ],
  },
  {
    content: "A language used for stylizing websites is: ",
    answer: "CSS",
    choices: ["Java", "CSS", "Node.js", "HTML"],
  },
  {
    content: "What is the most useful tool for debugging?",
    answer: "console.log()",
    choices: ["console.log()", "isNan", "return", "window.alert()"],
  },
  {
    content: "What is the '!' symbol in javaScript?",
    answer: "'!' is the logical not operator.",
    choices: [
      "Used at the end of a query selection.",
      "It is a tool used to remove the first element of an array.",
      "'!' is the logical not operator.",
      "The exclamation mark forces a function to execute.",
    ],
  },
  {
    content: "What is the 'this' keyword?",
    answer: "This refers to the object that a function is a property of.",
    choices: [
      "This is a command that is only utilized in Python",
      "This is an html attribute that specifies metadata about an element.",
      "This refers to the object that a function is a property of.",
      "We use this as a means of accessing variables outside of a functions scope.",
    ],
  },
  {
    content: "What are the main data types in javaScript?",
    answer: "String, number, bigint, boolean, undefined",
    choices: [
      "Decimal, integer, undefined, function, long",
      "String, number, bigint, boolean, undefined",
      "Var, string, symbol, object, small",
      "console, form, object, loop",
    ],
  },
];

var questionsLeft = 9;
submitSection.style.display = "none";
restartButton.style.display = "none";
highScores.style.display = "none";

viewScores.addEventListener("click", viewHighscores);

restartButton.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
  restart();
});

startButton.addEventListener("click", start);

function start() {
  seconds = 100;
  questionIndex = 0;
  toAnswer.textContent = questionsLeft;
  startButton.style.display = "none";
  introParagraph.style.display = "none";
  quizRunning();
  getQuestion();
}

function restart() {
  window.location.reload();
}

function getQuestion() {
  questionIndex++;
  if (questions[questionIndex]) {
    answer = questions[questionIndex].answer;

    question.innerHTML = questions[questionIndex].content;

    option1.innerHTML = questions[questionIndex].choices[0];
    option2.innerHTML = questions[questionIndex].choices[1];
    option3.innerHTML = questions[questionIndex].choices[2];
    option4.innerHTML = questions[questionIndex].choices[3];

    optionButtons.appendChild(option1);
    optionButtons.appendChild(option2);
    optionButtons.appendChild(option3);
    optionButtons.appendChild(option4);

    option1.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      isCorrect(option1.innerText);
    });
    option2.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      isCorrect(option2.innerText);
    });
    option3.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      isCorrect(option3.innerText);
    });
    option4.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      isCorrect(option4.innerText);
    });
  }
}

function quizRunning() {
  var timeInterval = setInterval(function () {
    if (seconds > 0 && questionsLeft > 0) {
      seconds--;
      timeLeft.innerText = seconds;
    } else {
      clearInterval(timeInterval);
      submitHighscore();
    }
  }, 1000);
}

function isCorrect(selected) {
  questionsLeft--;
  if (selected === answer) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
}

function rightAnswer() {
  choiceResult.innerHTML = "Correct! " + "✅";
  var divider = document.createElement("hr");
  choiceResult.append(divider);
  toAnswer.textContent = questionsLeft;
  incrementQuestion();
}

function wrongAnswer() {
  choiceResult.innerHTML = "Wrong! " + "❎";
  var divider = document.createElement("hr");
  choiceResult.append(divider);
  toAnswer.textContent = questionsLeft;
  seconds -= 10;
  incrementQuestion();
}

function incrementQuestion() {
  getQuestion();
}

function clearPage() {
  question.style.display = "none";
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";
  option4.style.display = "none";
  choiceResult.style.display = "none";
}

function submitHighscore() {
  clearPage();
  submitSection.style.display = "inline-block";
  restartButton.style.display = "inline-block";
  question.style.display = "inline-block";
  question.innerHTML = "Enter Your Initials: ";
  submitButton.addEventListener("click", function () {
    var highScoreEntry = {
      initials: submitArea.value,
      highScore: seconds,
    };

    localStorage.setItem("entry", JSON.stringify(highScoreEntry));
  });
}

function viewHighscores() {
  var entryOb = JSON.parse(localStorage.getItem("entry"));
  var newEntry = document.createElement("li");
  newEntry.innerHTML =
    "Initials: " + entryOb.initials + " Score: " + entryOb.highScore;
  highScores.append(newEntry);

  if (highScores != null) {
    question.innerHTML = "High Scores: ";
    highScores.style.display = "inline";
    submitSection.style.display = "none";
  }
}
