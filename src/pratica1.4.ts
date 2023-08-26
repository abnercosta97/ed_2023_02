import PromptSync from "prompt-sync";

const prompt = PromptSync();

const letra1:string = prompt("Digite uma letra: ");
const letra2:string = prompt("Digite outra letra: ");

if(letra1.charCodeAt < letra2.charCodeAt){
    console.log(`${letra1} vem antes ${letra2}`);
} else if(letra1 > letra2){
    console.log(`${letra2} vem antes ${letra1}`); 
}else {
    console.log(`${letra1} e ${letra2} são iguais`);
};