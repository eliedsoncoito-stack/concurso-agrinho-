// Tailwind Script já incluído via CDN

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const icon = document.getElementById('theme-toggle');
    icon.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

// Simulador
const prodSlider = document.getElementById('producao');
const sustSlider = document.getElementById('sustentabilidade');
const prodVal = document.getElementById('producao-val');
const sustVal = document.getElementById('sustentabilidade-val');
const resultProd = document.getElementById('result-prod');
const resultAmb = document.getElementById('result-amb');
const balanceFill = document.getElementById('balance-fill');
const status = document.getElementById('status');

function updateFarm() {
    const prod = +prodSlider.value;
    const sust = +sustSlider.value;
    
    prodVal.textContent = prod + '%';
    sustVal.textContent = sust + '%';
    
    const score = (prod + sust) / 2;
    
    if (score > 80) {
        resultProd.textContent = "Excelente";
        resultAmb.textContent = "Saudável";
        balanceFill.style.width = "95%";
        status.textContent = "Equilíbrio Perfeito 🌍";
    } else if (score > 60) {
        resultProd.textContent = "Boa";
        resultAmb.textContent = "Equilibrado";
        balanceFill.style.width = "75%";
        status.textContent = "Bom Equilíbrio 🌱";
    } else {
        resultProd.textContent = "Baixa";
        resultAmb.textContent = "Em Risco";
        balanceFill.style.width = "40%";
        status.textContent = "Atenção necessária ⚠️";
    }
}

prodSlider.addEventListener('input', updateFarm);
sustSlider.addEventListener('input', updateFarm);
updateFarm();

// Quiz (mesmo do anterior, só mais bonito)
let currentQ = 0, score = 0;
const questions = [ /* mesmo array do projeto anterior */ ];

function loadQuiz() {
    // Implementação similar ao anterior com Tailwind styling
    // (Posso expandir se quiser)
}

// Inicialização
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
