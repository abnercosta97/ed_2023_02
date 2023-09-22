import { comparar } from "./pratica1.5";

import promptSync from "prompt-sync";

const prompt = promptSync();

const palavra1:string = prompt("Digite a primeira palavra: ");
const palavra2:string = prompt("Digite a segunda palavra: ");

const result = comparar(palavra1, palavra2);
console.log(`A palavra "${result}" aparece antes na ordem alfabética.`);

/* 
Escreva um programa, em TypeScript, que solicite que o usuário digite duas palavras e
diga qual delas aparece antes da outra no dicionário. O programa não deve solicitar nenhuma
informação adicional por parte do usuário e supõe que as palavras são escritas somente com
caracteres de ‘a’ a ‘z’. Para esse caso, especifique, também, o algoritmo em pseudocódigo,
conforme notação explicada em sala de aula. Utilize o método de string charCodeAt(). 
*/