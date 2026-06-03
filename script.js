// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Formulário
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ Mensagem enviada com sucesso! Agradecemos seu contato.');
  form.reset();
});

// Animação ao scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .cards, .stats').forEach(el => {
  el.style.transition = 'all 0.8s';
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  observer.observe(el);
});
