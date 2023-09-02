function max(array:number[]):number {
    if (array.length === 2) return array[0] > array[1] ? array[0] : array[1];
    let sub_max = max(array.slice(1));
    return array[0] > sub_max ? array[0] : sub_max;
  }
  

function alternativeSolutionMax(array: number[], max = 0):number {
    return array.length === 0
      ? max
      : alternativeSolutionMax(array.slice(1), array[0] > max ? array[0] : max);
  }

console.log(max([1, 5, 10, 25, 16, 1])); // 25
console.log(alternativeSolutionMax([1, 5, 10, 25, 16, 1])); // 25