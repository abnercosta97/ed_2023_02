import { somar2 } from "./modelo.1.3";

import PromptSync from "prompt-sync";

const prompt = PromptSync();
let soma: number = somar2(
    parseInt(prompt("Digite um numero: ")), parseInt(prompt("digite outro número: "))
    );
console.log(soma);
