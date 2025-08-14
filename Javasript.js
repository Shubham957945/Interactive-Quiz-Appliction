const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    choices: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Central Style Sheets", "Cascading Style Sheets", "Coded Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');

function loadQuestion() {
  feedbackEl.innerText = "";
  nextBtn.style.display = "none";

  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement('div');
    btn.classList.add('choice');
    btn.innerText = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    feedbackEl.innerText = "✅ Correct!";
    score++;
  } else {
    feedbackEl.innerText = "❌ Wrong! Correct answer:"; $,{correct};
  }

  // Disable all choices
  document.querySelectorAll('.choice').forEach(btn => {
    btn.onclick = null;
    btn.style.background = (btn.innerText === correct) ? "#c8f7c5" : "#f7c5c5";
  });

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.innerText = "Quiz Completed!";
  choicesEl.innerHTML = "";
  feedbackEl.innerText = "";
  nextBtn.style.display = "none";
  scoreEl.innerText = Your ;Score: $,{score} / $,{quizData,length};
}

loadQuestion();
