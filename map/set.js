/*
    Sets são esturturas que armazenam apenas valores únicos
*/

const array = [1,1,2,3,4,5];
const mySet = new Set(array);


/*
    Metodos: add(inset), has(consultar) and delete
*/

mySet.add(6);


console.log(mySet);
console.log(mySet.has(6));
console.log(mySet.delete(6));

/*
    Diferenças Set vs Arrays
    - Possui valores únicos
    - Em vezda propriedade length, consulta-se o número de registros pela propriedade size
    - Não possui os métodos map, filter, reduce
*/