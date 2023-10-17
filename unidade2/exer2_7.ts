/** 
 * P.2.7. Defina uma classe denominada MyArray que contenha 
 * um método recursivo que retorne 
 * a soma de todos os elementos presentes no array. 
*/


class MyArray{
    array: number[];

    constructor(array: number[]){
    this.array = array;
    }

    soma(i:number) :number {
        if(i === this.array.length){
            return 0;
        }
        return this.array[i] + this.soma(i+1);
    }
}

const array: number[] = [1,2,3,4,5,6];

const myArray = new MyArray(array);
const r = myArray.soma(0);
console.log("Soma dos elementos no array: ", r);
