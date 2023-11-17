/* A basic graph usage example
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

import { Graph } from "./graph";

let g = new Graph(['sjc', 'jac', 'sti', 'mlo', 'tbt']);

/*
santa isabel - jacareí (35km)
jacareí - sjc (15km)
sjc - monteiro lobato (40km)
sjc - taubaté (43km)
*/
console.log(g.adj_matrix);
console.log(g.vertices);


g.connect_vertices("jac","sti", 35);
g.connect_vertices("sjc", "jac", 15);
g.connect_vertices("sjc", "tbt", 43);
g.connect_vertices("sjc", "mlo", 40);
console.log("\n");
g.print();

g.vertices.forEach((city)=>{
    console.log("Nodes connected to ", city, " : ", g.get_connected_vertices(city));
});

let aula = new Graph(['sp', 'mg', 'rj', 'cr', 'sc']);

console.log(aula.adj_matrix);
console.log(aula.vertices);

/*
sp - mg (600km)
sp - rj (400km)
sp - cr (300km)
cr - sc (200km)
*/

aula.connect_vertices("sp", "mg", 600);
aula.connect_vertices("sp", "rj", 400);
aula.connect_vertices("sp", "cr", 300);
aula.connect_vertices("cr", "sc", 200);
console.log("\n");
aula.print();

aula.vertices.forEach((city)=>{
    console.log("Nodes connected to ", city, " : ", aula.get_connected_vertices(city));
});



