// Importando o file system, para podermos trabalhar com a manipulação de arquivos.
const fs = require('fs').promises;

async function start() {
    fs.writeFile(
      './qtd-videos-assistido.json',
      JSON.stringify({ flashcards: allFlashCards }, null, 2)
    );
  }
  
  start();