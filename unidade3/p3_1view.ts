import * as readline from 'readline';
import { Search } from './p3_1';

function lerArquivoEArmazenarEmVetor(salmo23: string): string[] {
    const fs = require('fs');
  try {
    const texto = fs.readFileSync(salmo23, 'utf-8');
    const palavras = texto.split(/\s+/);
    console.log(palavras)
    return palavras;
  } catch (error) {
    console.error("Erro ao ler o arquivo:", error);
    return [];
  }
}

const salmo23 = './unidade3/ts.txt'; 

const palavras = lerArquivoEArmazenarEmVetor(salmo23);

if (palavras.length > 0) {
  const search = new Search<string>();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite a palavra que deseja buscar: ', (palavraABuscar) => {
    const posicao = search.sequential(palavraABuscar, palavras);

    if (posicao !== -1) {
      console.log(`A palavra '${palavraABuscar}' foi encontrada na posição ${posicao} no vetor.`);
    } else {
      console.log(`A palavra '${palavraABuscar}' não foi encontrada no vetor.`);
    }

    rl.close();
  });
} else {
  console.log("Não foi possível ler o arquivo ou o arquivo está vazio.");
}
