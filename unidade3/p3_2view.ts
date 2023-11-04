import * as readline from 'readline';
import { Search } from './p3_1';

function lerArquivoEArmazenarEmVetor(listadechamada: string): string[] {
    const fs = require('fs');
  try {
    const texto = fs.readFileSync(listadechamada, 'utf-8');
    const palavras = texto.split(/\s+/);
    console.log(`Lista de chamada:  ${palavras}`)
    return palavras;
  } catch (error) {
    console.error("Erro ao ler o arquivo:", error);
    return [];
  }
}

const listadechamada = './unidade3/listadechamada.txt'; 

const palavras = lerArquivoEArmazenarEmVetor(listadechamada);

if (palavras.length > 0) {
  const search = new Search<string>();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o nome que deseja buscar na lista de chamada: ', (palavraABuscar) => {
    const posicao = search.binary(palavraABuscar, palavras);

    if (posicao !== -1) {
      console.log(`A palavra '${palavraABuscar}' foi encontrada na posição ${posicao} no vetor.`);
      console.log(`Tamanho da Lista de chamada: ${palavras.length} `);
    } else {
      console.log(`A palavra '${palavraABuscar}' não foi encontrada no vetor.`);
    }

    rl.close();
  });
} else {
  console.log("Não foi possível ler o arquivo ou o arquivo está vazio.");
}
