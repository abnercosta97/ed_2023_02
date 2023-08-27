import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n01: number = parseFloat(prompt("Digite um número: "));
const n02: number = parseFloat(prompt("Digite outro número: "));

let resultado;

switch (true){
    case n01 < n02:
        resultado = `${n01} é menor que ${n02}`;
        break;
    case n01 > n02:
        resultado = `${n01} é maior que ${n02}`;
        break;
}

console.log(resultado);