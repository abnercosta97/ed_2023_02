import { comparar } from "./modelo.1.12";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const n1: number = parseFloat(prompt("Digite um número: "));
const n2: number = parseFloat(prompt("Digite outro número: "));

console.log(comparar(n1,n2));