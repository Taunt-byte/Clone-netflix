const series = [
  {
    titulo: "THE WITCHER",
    descricao:
      "O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar em um mundo onde as pessoas, muitas vezes, são mais perversas do que as criaturas selvagens.",
    tema: "Fantasia",
  },
  {
    titulo: "STRANGER THINGS",
    descricao:
      "Um grupo de crianças enfrenta diversos eventos sobrenaturais em uma pequena cidade do interior dos EUA.",
    tema: "Ficção Científica / Sobrenatural",
  },
  {
    titulo: "LUCIFER",
    descricao:
      "Entediado e infeliz como Senhor do Inferno, Lúcifer abandona seu trono para viver em Los Angeles, onde abre uma boate e começa a ajudar a polícia a resolver crimes.",
    tema: "Crime / Sobrenatural",
  },
  {
    titulo: "LA CASA DE PAPEL",
    descricao:
      "Um grupo de criminosos se une sob a liderança do misterioso 'Professor' para realizar o maior assalto da história na Casa da Moeda da Espanha, enfrentando desafios intensos e emocionais.",
    tema: "Ação / Suspense",
  },
  {
    titulo: "SWEET TOOTH",
    descricao:
      "Em um mundo pós-apocalíptico, um menino híbrido — metade humano, metade cervo — embarca em uma jornada perigosa em busca de respostas sobre sua origem e o futuro do planeta.",
    tema: "Fantasia / Aventura",
  },
  {
    titulo: "SANDMAN",
    descricao:
      "Depois de anos aprisionado, o Rei dos Sonhos escapa e parte em uma jornada para restaurar seu reino e consertar os erros que cometeu ao longo dos séculos.",
    tema: "Fantasia / Sobrenatural",
  },
];

const filmes = [
  {
    titulo: "INCEPTION",
    descricao:
      "Um ladrão especializado em roubo de informações entra em sonhos...",
    tema: "Ficção Científica",
  },
  {
    titulo: "O SENHOR DOS ANÉIS",
    descricao:
      "Um hobbit parte em uma jornada para destruir um anel maligno...",
    tema: "Fantasia",
  },
  {
    titulo: "O IRLANDÊS",
    descricao:
      "Um matador de aluguel relembra seu passado no submundo do crime...",
    tema: "Crime",
  },
];
function exibirConteudoPorTema(tipo, dados) {
  const container = document.getElementById("container");

  const tituloTipo = document.createElement("h1");
  tituloTipo.textContent = tipo;
  container.appendChild(tituloTipo);

  //temas unicos
  const temasUnicos = [...new Set(dados.map((item) => item.tema))];

  temasUnicos.forEach((tema) => {
    const tituloTema = document.createElement("h2");
    tituloTema.textContent = tema;
    container.appendChild(tituloTema);

    dados
      .filter((item) => item.tema === tema)
      .forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <h3 class="titulo">${item.titulo}</h3>
            <p class="descricao">${item.descricao}</p>
            <div>
                <button class="botao"><i>Assistir Agora</i></button>
                <button class="botao"><i>Informações</i></button>
            </div>
            `;
        container.appendChild(div);
      });
  });
}
// Chamada das funções ao carregar a pagina

document,
  addEventListener("DOMContentLoaded", () => {
    exibirConteudoPorTema("Séries", series);
    exibirConteudoPorTema("Filmes", filmes);
  });
