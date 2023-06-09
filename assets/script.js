// Continuing to work on Javascript
var start = document.querySelector('#start');
var header = document.querySelector('#header');
var questTitle = document.querySelector('#question-title');
var questionsEL = document.querySelector('#question');
var answers = document.querySelector('#question-answers');
var timer;
var timerCount = 100;
var time = document.querySelector('#timer');
var score = document.querySelector('#score');
var initials = document.querySelector('#initials');
var endQuizEL = true;
var quizEnd = document.querySelector('#end');
var submit = document.querySelector('#submit');
var highScores = document.querySelector('#highscores');
var highScoreList = document.querySelector('#highscores-list');
var goBack = document.querySelector('#go-back');
var clear = document.querySelector('#clear-highscores');
var endScore = 0;




    

    var questions = [
        {
            title: 'Commonly used data types DO NOT include:',
            choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
            answer: 'Alerts'
        },
        {
            title: 'The condition in an if / else statement is enclosed within ____.',
            choices: ['Quotes', 'Curly Brackets', 'Parentheses', 'Square Brackets'],
            answer: 'Parentheses'
        },
        {
            title: 'Arrays in JavaScript can be used to store ____.',
            choices: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above'],
            answer: 'All of the Above'
        },
        {
            title: 'String values must be enclosed within ____ when being assigned to variables.',
            choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parentheses'],
            answer: 'Quotes'
        },
        {
            title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
            choices: ['JavaScript', 'Terminal / Bash', 'For Loops', 'Console.log'],
            answer: 'Console.log'
        }
    ];



var currentQuestion = 0;

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        time.textContent = timerCount;
        if (timerCount <= 0) {
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    header.classList.add('hide');
    questionsEL.classList.remove('hide');
    questTitle.textContent = questions[currentQuestion].title;
    answers.textContent = '';
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('value', questions[currentQuestion].choices[i]);
        button.textContent = questions[currentQuestion].choices[i];
        button.onclick = checkAnswer;
        answers.appendChild(button);
    }
}

function checkAnswer() {
   
    if (questions[currentQuestion].answer === this.value) {
        
    } else {
        timerCount -= 10; 
    }
    currentQuestion++; 
    if (currentQuestion < questions.length) {
        
        showQuestion();
    } else {
    
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    questionsEL.classList.add('hide');
    quizEnd.classList.remove('hide');
    score.textContent = "Score: " + endScore;
    endScore = timerCount;
    time.classList.add('hide');
    endQuizEL = true;
}

start.addEventListener('click', function() {
    startTimer();
    showQuestion();
});