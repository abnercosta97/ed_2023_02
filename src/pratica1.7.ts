import { duvidar, reclamar, sair } from "./modelo.1.7";

import prompt_sync from "prompt-sync";

const prompt = prompt_sync();
let opcao: string = prompt("Bem-Vindo! Digite a sua opcao: 1. Duvidas, 2. Reclamação ou 3.Sair : ");

let escolher: string;
escolher = opcao;


switch (escolher) {
  case "Duvidas":
    console.log(duvidar());
    break;
  case "Reclamação":
    console.log(reclamar());
    break;
  case "Sair":
    console.log(sair());
}