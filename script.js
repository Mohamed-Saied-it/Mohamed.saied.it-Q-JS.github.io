/*jshint esversion: 6 */ 

var quizData = [
    {
        question: "Who killed the Aliens?",
        a: "Ancient Egyptian",
        b: "Arnold Schwarzenegger",
        c: "Rambo",
        d: "Hell boy",
        correct: "b",
    },
    {
        question: "How much do you need to hunt a dragon?",
        a: "2 million dollar",
        b: "65LE",
        c: "Marijuana Cigarette",
        d: "Get Drunk",
        correct: "d",
    },
    {
        question: "Who created sims game?",
        a: "Maximum",
        b: "Maxis",
        c: "Maximus Decimus Meridius",
        d: "EA games",
        correct: "b",
    },
    {
        question: "what was the job of jackie chan on movie rush hour 1 ?",
        a: "searching for treasure",
        b: "searching for who killed his partner",
        c: "rescue the Chinese Consul's kidnapped wife",
        d: "rescue the Chinese Consul's kidnapped daughter",
        correct: "d",
    },
    {
        question: "Can you give me some luck?",
        a: "yes",
        b: "yes and yes",
        c: "i am out of luck",
        d: "Fuck off",
        correct:"c",
    }
];

var quiz = document.getElementById("quiz");


var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");


var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");


var nextBtn = document.getElementById("next");

var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    var currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    var answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

nextBtn.addEventListener("click", () => {
    // check to see the answer
    var answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = 
               `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});