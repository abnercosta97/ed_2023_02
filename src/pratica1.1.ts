const numero: number = 26; // questão a
const palavra: string = "Abner"; //questão b
const logico = true; //questão c

class Pessoa{    //questão d
    nome:string;
    idade:number;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    print():void {
        console.log(`A pessoa se chama ${this.nome} e sua idade é ${this.idade} anos.`)
    }
}
const a = new Pessoa("Abner", 26);
const b = new Pessoa("Jéssica", 29);
a.print();
b.print();

var array_de_numeros: number []; //questão e
array_de_numeros = [];
array_de_numeros.push(1);
array_de_numeros.push(2);
console.log(array_de_numeros);
