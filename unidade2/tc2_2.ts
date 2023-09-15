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



