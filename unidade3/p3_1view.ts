
import {Search} from './p3_1'

let s_string = new Search<string>();
let s_number = new Search<number>();

let v1: number[] = [2, 3, -3, 10, 5];
let v2: string[] = ['joão', 'fabricio',
                   'thales', 'fabíola'];

                   
console.log(s_string.sequential('fabíola',v2));
console.log(s_string.sequential('eduardo',v2));

console.log("Unordered numerical vector: ", v1)
console.log("Sequential sort (found): ", s_number.sequential(10,v1));
console.log("Sequential sort (not found): ", s_number.sequential(100,v1));
console.log("Sequential sort while (not found): ", s_number.sequential_w(100,v1));
console.log("Sequential sort while sentinel (not found): ", s_number.sequential_ws(100,v1));
console.log("Unordered numerical vector (after sentinel): ", v1);