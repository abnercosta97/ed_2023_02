import promptSync from "prompt-sync";

const prompt = promptSync();

//Essa função recebe uma string palavra e a transforma em uma sequência de números, onde cada número representa a posição da letra no alfabeto. 
function transformar(palavra: string): number[] {     
    const numeros: number[] = [];
    for (let i = 0; i < palavra.length; ++i) {
        const numero = palavra.charCodeAt(i);
        if (numero >= 65 && numero <= 90) // Latin - maiúsculo 
            numeros.push(numero - 64);
        else if (numero >= 97 && numero <= 122) // Latin - minúsculo
            numeros.push(numero - 96);
    }
    //console.log(numeros);
    return numeros;

}

function comparar(palavra1: string, palavra2: string): string {
    const numeros1 = transformar(palavra1);
    const numeros2 = transformar(palavra2);

    let i = 0;
    while (i < numeros1.length && i < numeros2.length) {
        if (numeros1[i] < numeros2[i]) {
            return palavra1;
        } else if (numeros1[i] > numeros2[i]) {
            return palavra2;
        }
        i++;
    }

    if (numeros1.length === numeros2.length) {
        return palavra1; // Palavras iguais
    } else {
        return numeros1.length < numeros2.length ? palavra1 : palavra2;
    }
}

export {transformar, comparar}



/*
Função transformar(palavra: string): number[]
Esta função é responsável por converter uma palavra em uma sequência de números, onde cada número representa a posição da letra no alfabeto. Aqui está o funcionamento detalhado dessa função:
O funcionamento da função transformar é o seguinte:
Ela recebe uma palavra como entrada na forma de uma string (palavra).
Ela inicializa um array vazio chamado numeros onde os números correspondentes a cada letra da palavra serão armazenados.
O loop for percorre cada letra da palavra.
A função charCodeAt(i) é usada para obter o código ASCII do caractere na posição i da palavra.
Através das verificações de intervalo, a função determina se o caractere é uma letra maiúscula ou minúscula e calcula um número correspondente de 1 a 26. Esse número é adicionado ao array numeros.
Qualquer caractere que não seja uma letra (por exemplo, espaços, números, símbolos) é ignorado.
A função retorna o array numeros que contém a sequência de números correspondente às letras da palavra.

Função comparar(palavra1: string, palavra2: string): string
Esta função compara duas palavras com base em suas sequências de números resultantes da função transformar. Aqui está o funcionamento detalhado dessa função:
Ela recebe duas palavras como entrada na forma de strings (palavra1 e palavra2).
Ela chama a função transformar para ambas as palavras, gerando as sequências de números correspondentes (numeros1 e numeros2).
Um loop while é usado para percorrer as sequências de números das palavras.
A cada iteração, ela compara os números correspondentes das duas sequências.
Se um número de numeros1 for menor que o número correspondente de numeros2, isso significa que a palavra1 aparece antes na ordem alfabética, então a função retorna palavra1.
Se um número de numeros1 for maior que o número correspondente de numeros2, isso significa que a palavra2 aparece antes na ordem alfabética, então a função retorna palavra2.
Se todas as letras comparadas até o tamanho do menor array forem iguais, a função compara o comprimento dos arrays restantes. Ela retorna a palavra com a sequência de números mais curta (ou seja, a palavra mais curta).
Esse é o processo detalhado que ocorre na função comparar para determinar qual das duas palavras aparece antes na ordem alfabética, com base na transformação numérica das letras.

Pseudo Codigo

Função transformar(palavra: string) -> números: vetor de inteiros
    números <- vetor vazio
    
    Para cada caractere 'c' na palavra:
        número <- obter código ASCII do 'c'
        Se número >= 65 e número <= 90:
            Adicionar (número - 64) ao vetor números
        Senão, se número >= 97 e número <= 122:
            Adicionar (número - 96) ao vetor números
            
    Retornar números

Função comparar(palavra1: string, palavra2: string) -> resultado: string
    números1 <- chamar função transformar(palavra1)
    números2 <- chamar função transformar(palavra2)
    
    i <- 0
    Enquanto i < tamanho de números1 e i < tamanho de números2:
        Se números1[i] < números2[i]:
            Retornar palavra1
        Senão, se números1[i] > números2[i]:
            Retornar palavra2
        i <- i + 1
    
    Se tamanho de números1 é igual a tamanho de números2:
        Retornar palavra1 (Palavras iguais)
    Senão:
        Se tamanho de números1 < tamanho de números2:
            Retornar palavra1
        Senão:
            Retornar palavra2

palavra1 <- obter entrada do usuário ("Digite a primeira palavra: ")
palavra2 <- obter entrada do usuário ("Digite a segunda palavra: ")

resultado <- chamar função comparar(palavra1, palavra2)
Exibir "A palavra \"" + resultado + "\" aparece antes na ordem alfabética."


*/