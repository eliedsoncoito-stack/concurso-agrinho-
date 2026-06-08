// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Simulator
const producaoSlider = document.getElementById('producao');
const sustentSlider = document.getElementById('sustentabilidade');
const producaoVal = document.getElementById('producao-val');
const sustentVal = document.getElementById('sustentabilidade-val');
const resultProd = document.getElementById('result-prod');
const resultAmb = document.getElementById('result-amb');
const balanceFill = document.getElementById('balance-fill');

function updateSimulator() {
    const prod = parseInt(producaoSlider.value);
    const sust = parseInt(sustentSlider.value);
    
    producaoVal.textContent = prod;
    sustentVal.textContent = sust;
    
    const equilibrio = (prod + sust) / 2;
    
    if (equilibrio > 75) {
        resultProd.textContent = "Alta";
        resultAmb.textContent = "Bom";
        balanceFill.style.width = "90%";
    } else if (equilibrio > 50) {
        resultProd.textContent = "Média";
        resultAmb.textContent = "Equilibrado";
        balanceFill.style.width = "65%";
    } else {
        resultProd.textContent = "Baixa";
        resultAmb.textContent = "Crítico";
        balanceFill.style.width = "35%";
    }
}

producaoSlider.addEventListener('input', updateSimulator);
sustentSlider.addEventListener('input', updateSimulator);
updateSimulator();

// Quiz
const questions = [
    {
        q: "Qual é a melhor prática para preservar o solo?",
        a: ["Uso intensivo de agrotóxicos", "Rotação de culturas", "Queima de palha", "Monocultura extensiva"],
        correct: 1
    },
    {
        q: "O que significa agricultura de precisão?",
        a: ["Usar GPS e sensores para otimizar insumos", "Plantar apenas uma espécie", "Irrigar o campo todos os dias", "Usar tratores antigos"],
        correct: 0
    },
    {
        q: "Qual é o principal benefício das áreas de preservação permanente (APP)?",
        a: ["Aumentar a produção", "Proteger rios e biodiversidade", "Facilitar o plantio", "Reduzir custos"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultQuiz = document.getElementById('result-quiz');
const quizScore = document.getElementById('quiz-score');
const quizMessage = document.getElementById('quiz-message');
const restartBtn = document.getElementById('restart-btn');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.q;
    optionsContainer.innerHTML = '';
    
    q.a.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(btn);
    });
    
    nextBtn.style.display = 'none';
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    const buttons = optionsContainer.querySelectorAll('button');
    
    buttons.forEach((btn, i) => {
        if (i === correct) btn.style.backgroundColor = '#4CAF50';
        if (i === selected && i !== correct) btn.style.backgroundColor = '#f44336';
        btn.disabled = true;
    });
    
    if (selected === correct) score++;
    
    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    resultQuiz.style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    quizScore.textContent = `Você acertou ${score} de ${questions.length} (${percentage}%)`;
    
    if (percentage >= 80) {
        quizMessage.textContent = "Parabéns! Você é um excelente guardião do agro sustentável! 🌱";
    } else if (percentage >= 50) {
        quizMessage.textContent = "Bom trabalho! Ainda há espaço para aprender mais sobre sustentabilidade.";
    } else {
        quizMessage.textContent = "Continue estudando! O futuro sustentável depende de todos nós.";
    }
}

restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    resultQuiz.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
});

// Initialize Quiz
loadQuestion();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
