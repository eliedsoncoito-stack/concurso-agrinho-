// Informações de cada tópico
const TOPIC_INFO = {
  solo: "A saúde do solo é a base de tudo: matéria orgânica, microbiota e cobertura vegetal garantem fertilidade por décadas.",
  agua: "Gestão eficiente da água envolve irrigação de precisão, reuso e proteção de nascentes dentro da propriedade.",
  solar: "A energia solar reduz custos operacionais e emissões — ideal para irrigação, armazéns e ordenha.",
  carbono: "O agro pode capturar carbono no solo e nas florestas, gerando créditos negociáveis no mercado.",
  biodiversidade: "Corredores ecológicos e áreas de reserva mantêm polinizadores e controle natural de pragas."
};

// Scroll suave para qualquer botão com data-scroll
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.scroll;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// Tópicos em alta — clique mostra descrição
const topicItems = document.querySelectorAll('#topic-list li');
const topicInfo = document.getElementById('topic-info');

topicItems.forEach(li => {
  li.addEventListener('click', () => {
    topicItems.forEach(i => i.classList.remove('active'));
    li.classList.add('active');
    const key = li.dataset.topic;
    topicInfo.textContent = TOPIC_INFO[key] || "Sem informações disponíveis.";
  });
});

// Busca de tópicos
const searchInput = document.getElementById('topic-search');
searchInput.addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  topicItems.forEach(li => {
    const match = li.textContent.toLowerCase().includes(q);
    li.style.display = match ? '' : 'none';
  });
});
