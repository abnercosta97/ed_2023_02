import {somar, subtrair, despedir} from "./modelo"

//import prompt_sync from "prompt-sync";

//const prompt = prompt_sync();
//let opcao: string = prompt("Digite sua opção: ");

let escolher:string;
escolher = "despedir";
let resultado:number;

switch (escolher){
    case "somar":
        resultado = somar(1,2);
        console.log(resultado);
        break;
    case "subtrair":
        resultado = subtrair(1,2);
        console.log(resultado);
        break;
    case "despedir":
        console.log(despedir());
}

// Visão é ponto de interação com usuário. 
// MVC (Modelo, Visão, Controlador)