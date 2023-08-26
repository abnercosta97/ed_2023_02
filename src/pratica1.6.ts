import PromptSync from "prompt-sync";

const prompt = PromptSync();

const word1: string = prompt("Digite uma palavra: ");
const word2: string = prompt("Digite outra palavra: ");

if (word1 < word2) {
    console.log(`${word1} vem antes de ${word2}`);
} else if (word1 > word2) {
    console.log(`${word2} vem antes de ${word1}`);
} else {
    console.log(`${word1} e ${word2} são iguais`);
}



/* meu codigo
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const word1:string = prompt("Digite uma palavra: ");
const word2:string = prompt("Digite outra palavra: ");
const trans1:string[] = word1.split(",");
const trans2:string[] = word2.split(",");

if(trans1 < trans2){
    console.log(`${word1} vem antes ${word2}`);
} else if(word1 > word2){
    console.log(`${word2} vem antes ${word1}`); 
}else {
    console.log(`${word1} e ${word2} são iguais`);
};
*/
