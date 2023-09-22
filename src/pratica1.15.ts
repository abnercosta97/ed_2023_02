import {
  Pessoa,
  caracteres,
  numero,
  array,
  arraynum,
  pessoa,
} from "./modelo.1.15";

function alterar(
  caracteres: string,
  numero: number,
  array: string[],
  arraynum: number[],
  pessoa: Pessoa
): any {
  caracteres = "Hello";
  numero = 50;
  array = ["abelha", "macaco", "cachorro"];
  arraynum = [4, 5, 6];
  pessoa = new Pessoa("Bob", 30);

  return (
    (caracteres = "Hello"),
    (numero = 50),
    (array = ["abelha", "macaco", "cachorro"]),
    (arraynum = [4, 5, 6]),
    (pessoa = new Pessoa("Bob", 30))
  );
}

// Imprimir valores antes da modificação
console.log("Valores antes da modificação:");
console.log(caracteres);
console.log(numero);
console.log(array);
console.log(arraynum);
console.log(pessoa);

//alterar(caracteres, numero, array, arraynum, pessoa); ou
const alterado = alterar(caracteres, numero, array, arraynum, pessoa);
// Imprimir valores após a modificação
console.log("Valores após a modificação:");
// console.log(alterar(caracteres, numero, array, arraynum, pessoa)); ou
console.log(alterado);

/*
Observamos que, apesar de termos alterado os valores dentro da função, os valores originais das variáveis não foram modificados fora da função.
Isso acontece porque as variáveis são passadas para a função por valor (quando são primitivas) ou por referência (quando são objetos), mas as alterações feitas dentro da função não afetam diretamente as variáveis fora da função. Portanto, a conclusão é que as variáveis mantêm seus valores originais, mesmo após serem passadas para a função e modificadas internamente.*/
