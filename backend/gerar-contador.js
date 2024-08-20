// Importando o file system, para podermos trabalhar com a manipulação de arquivos.
import { promises as fs } from 'fs';

async function start() {
    fs.writeFile(
      './qtd-clicks-os-videos-receberam.json',
      JSON.stringify({ flashcards: allFlashCards }, null, 2)
    );
  }
  
  start();