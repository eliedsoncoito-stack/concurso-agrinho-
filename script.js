document.querySelectorAll(".reacao").forEach(function(botao) {
    botao.addEventListener("click", function() {

        const tipo = botao.dataset.tipo;
        const post = botao.closest(".post");
        const numero = botao.querySelector("span");
        const titulo = post.querySelector("h2").textContent;
        const chave = "reacao_" + tipo + "_" + titulo;

        if (localStorage.getItem(chave)) {
            return;
        }

        numero.textContent = Number(numero.textContent) + 1;
        localStorage.setItem(chave, "true");
        botao.disabled = true;
    });
});

document.getElementById("modoEscuro").addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        this.textContent = "☀️ Modo claro";
    } else {
        this.textContent = "🌙 Modo escuro";
    }
});
