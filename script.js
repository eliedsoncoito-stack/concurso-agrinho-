// Cada post tem um id único (data-id). O estado de curtida/like fica
// salvo no localStorage do navegador, então cada pessoa só consegue
// curtir e dar like UMA VEZ por post.

document.addEventListener("DOMContentLoaded", () => {
  const artigos = document.querySelectorAll("article");

  artigos.forEach(artigo => {
    const postId = artigo.dataset.id;
    const btnCurtir = artigo.querySelector(".btn-curtir");
    const btnLike = artigo.querySelector(".btn-like");

    configurarBotao(btnCurtir, postId, "curtir");
    configurarBotao(btnLike, postId, "like");
  });

  function configurarBotao(botao, postId, tipo) {
    const chave = `${postId}_${tipo}`;
    const contador = botao.querySelector(".contador");

    if (localStorage.getItem(chave) === "true") {
      botao.classList.add("ativo");
    }

    botao.addEventListener("click", () => {
      const jaReagiu = localStorage.getItem(chave) === "true";
      let valorAtual = parseInt(contador.textContent);

      if (jaReagiu) {
        valorAtual--;
        localStorage.setItem(chave, "false");
        botao.classList.remove("ativo");
      } else {
        valorAtual++;
        localStorage.setItem(chave, "true");
        botao.classList.add("ativo");
      }

      contador.textContent = valorAtual;
    });
  }
});
