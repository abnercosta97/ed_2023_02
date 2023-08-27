function comparar(n1: number, n2:number): string{
    if(n1<n2){
        return `${n1} é menor que ${n2}`;
    } else if(n1>n2){
        return `${n1} é maior que ${n2}`;
    } else {
        return `${n1} é igual a ${n2}`;
    }
}
export {
    comparar
}