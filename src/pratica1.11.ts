import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n1: number = parseInt(prompt("Digite um número: "));
const n2: number = parseInt(prompt("Digite outro número: "));

let resultado: string;

if(n1 < n2){
    resultado = `${n1} é menor que ${n2}`;
} else {
    resultado = `${n1} é maior que ${n2}`;
}
console.log(resultado);
