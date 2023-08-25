import promptSync from "prompt-sync";

const prompt = promptSync();

function transformar(palavra: string): number[] {
    const numeros: number[] = [];
    for (let i = 0; i < palavra.length; ++i) {
        const numero = palavra.charCodeAt(i);
        if (numero >= 65 && numero <= 90) // Latin - maiúsculo
            numeros.push(numero - 64);
        else if (numero >= 97 && numero <= 122) // Latin - minúsculo
            numeros.push(numero - 96);
    }
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

const palavra1 = prompt("Digite a primeira palavra: ");
const palavra2 = prompt("Digite a segunda palavra: ");

const result = comparar(palavra1, palavra2);
console.log(`A palavra "${result}" aparece antes na ordem alfabética.`);
