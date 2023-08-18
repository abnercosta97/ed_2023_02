import { somar, subtrair, despedir } from "./modelo";

import prompt_sync from "prompt-sync";

const prompt = prompt_sync();
let opcao: string = prompt("Digite sua opção: ");

let escolher: string;
escolher = opcao;
let resultado: number;

switch (escolher) {
  case "somar":
    resultado = somar(
      parseInt(prompt("Digite um número:")),
      parseInt(prompt("Digite outro número:"))
    );
    console.log("Resultado da soma é:", resultado);
    break;
  case "subtrair":
    resultado = subtrair(
      parseInt(prompt("Digite um número:")),
      parseInt(prompt("Digite outro número:"))
    );
    console.log("Resultado da subtração é:", resultado);
    break;
  case "despedir":
    console.log(despedir());
}

// Visão é ponto de interação com usuário.
// MVC (Modelo, Visão, Controlador)
