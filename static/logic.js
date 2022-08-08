window.onload = function () {

    // Navigation
    document.querySelectorAll('a').forEach((a_elem) => {
        if (window.location.pathname == a_elem.id) {
            a_elem.style.color = 'white';
        }
    });

    // Gallery
    const slides = document.querySelectorAll('.slide');

    const clearActives = () => {
        slides.forEach(slide => slide.classList.remove('active'));
    }
    const setActive = (e) => {
        clearActives();
        e.target.classList.add('active');
    }
    slides.forEach(slide => {
        slide.addEventListener('click', setActive);
    });
};

//Quiz

//Global variables
var questionDisplay = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var quiz = document.querySelector(".quiz");
var startBtn = document.querySelector(".startBtn");
var startText = document.querySelector("#startText");
var gameOver = document.querySelector(".gameOver");

//Initiate values
var correctAnswers = 0;
let question;

function startGame() {
    gameOver.style.visibility = "hidden";
    startBtn.style.visibility = "hidden";
    quiz.style.display = "flex";
    quiz.style.visibility = "visible";
    correctAnswers = 0;
    questionOne();
}

//Functions that create questions and answers
var questionOne = () => {
  question = {
  number: "1",
  question: "How old I am?",
  option1: "19 y.o.",
  option2: "20 y.o.",
  option3: "22 y.o.",
  option4: "34 y.o.",
  correctAnswer: "20 y.o."
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

var questionTwo = () => {
  question = {
    number: "2",
    question: "What is the best game in the world in my opinion?",
    option1: "Grand Theft Auto: V",
    option2: "Skyrim: Elder Scrolls",
    option3: "Counter Strike: GO",
    option4: "Dota 2",
    correctAnswer: "Dota 2"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

var questionThree = () => {
  question = {
    number: "3",
    question: "What is my favourite musical instument?",
    option1: "Violin",
    option2: "Trombone",
    option3: "Guitar",
    option4: "Piano",
    correctAnswer: "Guitar"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

var questionFour = () => {
  question = {
    number: "4",
  question: 'How many projects I listed on "My Projects" page?',
  option1: "3",
  option2: "10",
  option3: "78",
  option4: "5",
  correctAnswer: "3"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

var questionFive = () => {
  question = {
    number: "5",
  question: "What is the main poject I'm working at now?",
  option1: "discMathematics_bot",
  option2: "TimeSoft",
  option3: "ControlMicTray",
  option4: "OTETO",
  correctAnswer: "OTETO"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

//Show progress throughout quiz
function displayProgress(currentQuestion){
  var progress = document.querySelector(".progress");
  progress.innerHTML = `This is ${currentQuestion} of 5 questions.`
}

//Show questions and potential answers
function displayQuestion(question){
  questionDisplay.innerHTML = question.question;
  option1.innerHTML = question.option1;
  option2.innerHTML = question.option2;
  option3.innerHTML = question.option3;
  option4.innerHTML = question.option4;
}

//Check if answer is correct, add to correct answers count
function checkAnswer(e, question){
  if (e.target.innerHTML === question.correctAnswer){
    correctAnswers++;
  }
}

//Load next question
function moveToNextQuestion(currentQuestion){
  switch (currentQuestion){
    case "1":
      questionTwo();
      break;
      case "2":
      questionThree();
      break;
      case "3":
      questionFour();
      break;
      case "4":
      questionFive();
      break;
      case "5":
      showScore(correctAnswers);
      break;
    default:
  }

}

//Game over, reveal score
function showScore(correctAnswers){
  var score = document.getElementById("score");
  score.innerHTML = `You got ${correctAnswers} out of 5 answers correct!`;
  quiz.style.display = "none";
  quiz.style.visibility = "hidden";
  gameOver.style.visibility = "visible";
  startText.innerHTML = "Play Again";
  startBtn.style.visibility = "visible";
}

//On each click, check selected option and change to next question.
$('.option').on('click', function(e){
  if (e.target.classList.contains("option")){

    checkAnswer(e, question);
    moveToNextQuestion(question.number);
  } else {
    console.log("answer not selected");
  }

});