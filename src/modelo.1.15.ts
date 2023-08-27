export class Pessoa{ 
    nome: string;
    idade: number;
    
    constructor(nome:string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    //print():void {
        //console.log(`A pessoa se chama ${this.nome} e sua idade é ${this.idade} anos.`)
    //}
}

export let caracteres: string = "Olá";
export let numero: number = 42;
export let array: string[] = ["Maçã", "Banana", "Laranja"];
export let arraynum: number[] = [1, 2, 3];
export let pessoa: Pessoa = new Pessoa("Alice", 25);





/*
export let cadeiaDeCaracteres: string = "Olá, mundo!";
export let numero: number = 42;
export let arrayDeCadeias: string[] = ["Maçã", "Banana", "Laranja"];
export let arrayDeNumeros: number[] = [1, 2, 3, 4, 5];
export class Pessoa{ 
    nome: string = "Alice";
    idade: number = 30;
    
    constructor(nome:string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    print():void {
        console.log(`A pessoa se chama ${this.nome} e sua idade é ${this.idade} anos.`)
    }
};
*/

/*
export let cadeiaDeCaracteres: string = "Olá, mundo!";
export let numero: number = 42;
export let arrayDeCadeias: string[] = ["Maçã", "Banana", "Laranja"];
export let arrayDeNumeros: number[] = [1, 2, 3, 4, 5];
export let pessoa: { nome: string, idade: number } = { nome: "Alice", idade: 30 };

*/