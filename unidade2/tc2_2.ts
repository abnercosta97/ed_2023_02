/* 
TC.2.2. Dê um exemplo de algoritmo recursivo que apresente complexidade espacial superior a
outro, também recursivo, porém distinto. Ilustre esboçando os dados de programa e entrada
na pilha de execução. OBS: Seu exemplo não precisa conter código de programação mas sim
explicar o porquê da complexidade computacional superior utilizando pseudocódigo para
representar os dados analisados.
*/

function fatorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const resultadoFatorial = fatorial(5);
console.log(resultadoFatorial); // Saída: 120

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const resultadoFibonacci = fibonacci(5);
console.log(resultadoFibonacci); // Saída: 5



