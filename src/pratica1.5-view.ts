import { comparar } from "./pratica1.5";

import promptSync from "prompt-sync";

const prompt = promptSync();

const palavra1:string = prompt("Digite a primeira palavra: ");
const palavra2:string = prompt("Digite a segunda palavra: ");

const result = comparar(palavra1, palavra2);
console.log(`A palavra "${result}" aparece antes na ordem alfabética.`);