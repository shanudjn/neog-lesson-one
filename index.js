const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
//questions
var questions = [
    {
        question: "What is Shahazad's favorite food ?",
        answer: "Biryani"
    },
    {
        question: "What is Shahazad's favorite superhero ?",
        answer: "Iron Man"
    },
    {
        question: "What is Shahazad's favorite pastime ?",
        answer: "Singing"
    }
]

function checkAnswer(question, answer) {
    let userAnswer = readlineSync.question(question);
    // console.log(userAnswer);
    if (userAnswer.toLowerCase() == answer.toLowerCase()) {
        console.log(chalk.green("Correct!!"));
        score++;
    }
    else {
        console.log(chalk.red("Wrong answer!!"));
        score--;
    }
}

function startQuiz() {
    for (let i = 0; i < questions.length; i++) {
        let currentQuestion = questions[i];
        // console.log(currentQuestion.question);
        checkAnswer(currentQuestion.question, currentQuestion.answer);
    }
}




//entry point
console.log(chalk.bold.blue('Welecome To ShahazadCLI\n'));

var userInput = readlineSync.question("Test yourself on how much\nyou know me.\nPress 1 to start\nOR Press anything to exit\n")

if (userInput == 1) {
    startQuiz();
    console.log('Your Score : ' + score);
} else {
    process.exit()
}