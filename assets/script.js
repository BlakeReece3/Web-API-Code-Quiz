var start = document.querySelector('#start');
var header = document.querySelector('#header');
var questTitle = document.querySelector('#question-title');
var questions = document.querySelector('#questions');
var answers = document.querySelector('#answers');
var timer;
var timerCount = 100;
var time = document.querySelector('#time');









// Start Quiz
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
    },
];

var currentQuestion = 0;

