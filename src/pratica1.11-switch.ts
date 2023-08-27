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
/*
Caso você deseje que o programa discrimine três condições (>, < ou =), a dificuldade surge porque o bloco switch é projetado para fazer comparações exatas de valores, não comparações baseadas em intervalos numéricos. Portanto, nesse caso, seria mais apropriado usar uma estrutura de if-else aninhada para lidar com todas as possíveis combinações de relação entre os números. Isso pode se tornar um pouco mais complexo em comparação com a utilização de apenas if-else para duas condições.
*/