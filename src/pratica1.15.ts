import { 
    Pessoa,
    caracteres, 
    numero, 
    array, 
    arraynum, 
    pessoa, 
} from "./modelo.1.15";

function alterar(caracteres:string , numero:number , array: string[] , arraynum: number[], pessoa:Pessoa): any {
    caracteres = "Hello";
    numero = 50;
    array = ["abelha", "macaco", "cachorro"];
    arraynum = [4,5,6];
    pessoa = new Pessoa("Bob",30);

    return caracteres = "Hello", numero = 50, array = ["abelha", "macaco", "cachorro"], arraynum = [4,5,6], pessoa = new Pessoa("Bob",30);

}

function alter(caracteres:string): string{
    return caracteres = "hello";
}


// Imprimir valores antes da modificação
console.log("Valores antes da modificação:");
console.log(caracteres);
console.log(numero);
console.log(array);
console.log(arraynum);
console.log(pessoa);

const alterado = alterar(caracteres, numero, array, arraynum, pessoa);
alterar(caracteres, numero, array, arraynum, pessoa);
// Imprimir valores após a modificação
console.log("Valores após a modificação:");
console.log(caracteres);
console.log(numero);
console.log(array);
console.log(arraynum);
console.log(pessoa);
