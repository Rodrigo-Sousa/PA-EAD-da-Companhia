const uuid = require('uuid').v4;
const fs = require('fs').promises;

const allVideosClicados = [
  {
    tituloVideo: "pis-cofins",
    qtdAssistido: 0
  },
  {
    tituloVideo: "reforma-tributaria",
    qtdAssistido: 0
  },
  {
    tituloVideo: "imposto-sobre-servico-digitais",
    qtdAssistido: 0
  },
  {
    tituloVideo: "tributacao-investimentos",
    qtdAssistido: 0
  },
  {
    tituloVideo: "combate-evasao-fiscal",
    qtdAssistido: 0
  },
  {
    tituloVideo: "imposto-csll",
    qtdAssistido: 0
  },
  {
    tituloVideo: "senhas-seguras",
    qtdAssistido: 0
  },
  {
    tituloVideo: "cofre-senhas",
    qtdAssistido: 0
  },
  {
    tituloVideo: "bloquear-tela-computador",
    qtdAssistido: 0
  },
  {
    tituloVideo: "aberturas-chamado",
    qtdAssistido: 0
  }
]
  .map(item => {
    return { id: uuid(), ...item };
  })
  .sort((a, b) => a.tituloVideo.localeCompare(b.tituloVideo));

async function start() {
  fs.writeFile(
    './qtd-clicks-os-videos-receberam.json',
    JSON.stringify({ videosClicados: allVideosClicados }, null, 2)
  );
}

start();
