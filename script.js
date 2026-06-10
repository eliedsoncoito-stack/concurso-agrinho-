// Script interativo do Agrinho 2026

function inscrever() {
    alert("🎉 Inscrições para o Agrinho 2026 abertas!\n\nEm breve entraremos em contato com sua escola. 🌱");
}

// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de brilho no título ao carregar
window.addEventListener('load', () => {
    console.log("%cAgrinho 2026 - Paraná carregado com sucesso! 🚜", "color: #FF00FF; font-size: 16px;");
});
