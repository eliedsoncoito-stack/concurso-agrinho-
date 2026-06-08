document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. SISTEMA DE BUSCA EM TEMPO REAL
    // ==========================================
    const searchInput = document.getElementById("main-search");
    const cards = document.querySelectorAll(".item-card");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const value = e.target.value.toLowerCase().trim();

            cards.forEach(card => {
                const title = card.getAttribute("data-title");
                
                if (title.includes(value)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    }

    // ==========================================
    // 2. COMPORTAMENTO DE FECHAR TAGS (Estilo Miku)
    // ==========================================
    const closeButtons = document.querySelectorAll(".close-pill");

    closeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation(); 
            const pill = button.parentElement;
            
            pill.style.opacity = "0";
            pill.style.transform = "scale(0.8)";
            
            setTimeout(() => {
                pill.remove();
            }, 300);
        });
    });

    // ==========================================
    // 3. EFEITOS DE FEEDBACK NOS BOTÕES PREMIUM
    // ==========================================
    const connectBtn = document.getElementById("btn-connect");
    
    if (connectBtn) {
        connectBtn.addEventListener("click", () => {
            connectBtn.innerText = "Conectado";
            connectBtn.style.background = "linear-gradient(135deg, #00b0ff 0%, #00e676 100%)";
            console.log("AGRO.CORE v3: Conexão segura estabelecida com a rede.");
        });
    }
});
