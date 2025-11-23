let dados = [];

let cardContainer = document.querySelector(".card-container");

function renderizarCards(dados) {
   for (let dado of dados) {
      let article = document.createElement("article");
      article.classList.add("card");
      article.innerHTML = `
      <H2>${dado.nome}</H2>
      <p>${dado.ano}</p>
      <p>${dado.descricao}</p>
      <a href="${dado.link}" target="_blank">Ouça-me</a>`;	
      cardContainer.appendChild(article);
   }
}

async function IniciarBusca() {
   let resposta = await fetch("data.json");
   dados = await resposta.json();
   renderizarCards(dados);
}

