function min(array:number[]):number {
    if (array.length === 2) return array[0] < array[1] ? array[0] : array[1];
    let sub_min = min(array.slice(1));
    return array[0] < sub_min ? array[0] : sub_min;
  }
  

function alternativeSolutionMin(array: number[], min = 0):number {
    return array.length === 0
      ? min
      : alternativeSolutionMin(array.slice(1), array[0] > min ? array[0] : min);
  }

console.log(min([1, 5, 10, 25, 16, 18])); // 1
console.log(alternativeSolutionMin([1, 5, 10, 25, 16, 18])); // 25

/*            Array.prototype.slice()
O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.


https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/