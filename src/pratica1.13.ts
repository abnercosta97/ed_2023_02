class Usuario {
    nome: string;
    nascimento: string;
    cpf: string;
    genero: string;
    
    constructor(nome: string, nascimento: string, cpf: string, genero: string){
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.genero = genero;
    }

    speak_name(): void {
        console.log(`Usuário: ${this.nome}.`);
    }

    equals(outroUsuario: Usuario): boolean {
        return (
            this.nome === outroUsuario.nome &&
            this.nascimento === outroUsuario.nascimento &&
            this.cpf === outroUsuario.cpf &&
            this.genero === outroUsuario.genero
        );
    }
}

// Exemplo de uso da classe
const usuario1 = new Usuario("Abner", "06/04/1997", "123.456.789-00", "Masculino");
const usuario2 = new Usuario("Jessica", "20/09/1993", "987.654.321-00", "Feminino");

usuario1.speak_name();
usuario2.speak_name();

console.log(usuario1.equals(usuario2)); // Exemplo de uso do método equals

/*
class Usuario {
    nome: string;
    nascimento: Date;
    cpf: string; // Alterei para string, pois o CPF pode ter caracteres não numéricos
    genero: string;
    
    constructor(nome: string, nascimento: Date, cpf: string, genero: string){
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.genero = genero;
    }

    speak_name(): void {
        console.log(`Usuário: ${this.nome}.`);
    }

    equals(outroUsuario: Usuario): boolean {
        return (
            this.nome === outroUsuario.nome &&
            this.nascimento.getTime() === outroUsuario.nascimento.getTime() &&
            this.cpf === outroUsuario.cpf &&
            this.genero === outroUsuario.genero
        );
    }
}

// Exemplo de uso da classe
const usuario1 = new Usuario("Alice", new Date(1990, 5, 15), "123.456.789-00", "Feminino");
const usuario2 = new Usuario("Bob", new Date(1985, 3, 10), "987.654.321-00", "Masculino");

usuario1.speak_name();
usuario2.speak_name();

console.log(usuario1.equals(usuario2)); // Exemplo de uso do método equals
*/





/* 
class Usuario {
    nome: string;
    nascimento: Date;
    cpf: number;
    genero: string;
    
    constructor(nome: string, nascimento: Date, cpf: number, genero: string){
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.genero = genero;
    }

    speak_name():void {
        console.log(`Usuário: ${this.nome}.`);
    }
}
*/
