const questions = [
  {
    question: "When a stock market crisis occurs, what will you do?",
    options: {
      A: "Analyze fundamentals and buy more",
      B: "Sell immediately to minimize losses",
      C: "Wait and observe the situation",
      D: "Look for hidden opportunities",
    },
  },
  {
    question: "What do you prefer to invest in?",
    options: {
      A: "Stocks with strong fundamentals",
      B: "Trending assets",
      C: "Diversified investments",
      D: "Undervalued assets",
    },
  },
  {
    question: "What type of investor are you?",
    options: {
      A: "Long-term investor",
      B: "Short-term trader",
      C: "Balanced investor",
      D: "Contrarian investor",
    },
  },
];

let currentQuestionIndex = 0;
let answers = { A: 0, B: 0, C: 0, D: 0 };

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  for (let key in question.options) {
    const btn = document.createElement("button");
    btn.innerText = question.options[key];
    btn.onclick = () => selectAnswer(key);
    optionsContainer.appendChild(btn);
  }
}

function selectAnswer(option) {
  answers[option]++;
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";

  const maxKey = Object.keys(answers).reduce((a, b) =>
    answers[a] > answers[b] ? a : b
  );

  const resultText = {
    A: "You are 'The Key of Wisdom' - A long-term investor.",
    B: "You are 'The Key of Risk' - A bold trader.",
    C: "You are 'The Key of Balance' - A balanced investor.",
    D: "You are 'The Key of Mystery' - A contrarian thinker.",
  };

  document.getElementById("result-text").innerText = resultText[maxKey];
}

function restartQuiz() {
  currentQuestionIndex = 0;
  answers = { A: 0, B: 0, C: 0, D: 0 };
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("result-container").style.display = "none";
  loadQuestion();
}

// Load the first question when the app starts
loadQuestion();
