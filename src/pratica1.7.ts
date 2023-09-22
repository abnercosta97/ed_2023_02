import { duvidar, reclamar, sair } from "./modelo.1.7";

import prompt_sync from "prompt-sync";

const prompt = prompt_sync();
let opcao: string = prompt("Bem-Vindo! Digite a sua opcao: 1. Duvidas, 2. Reclamação ou 3.Sair : ");

let escolher: string;
escolher = opcao;


switch (escolher) {
  case "1":
    console.log(duvidar());
    break;
  case "2":
    console.log(reclamar());
    break;
  case "3":
    console.log(sair());
}