/**
 *  Uma coleção de arrays no formato [chave, valor]. Pode ser iterado por um loop for - of
 
    *  const myMap = new Map()


    Metodos : set(insert), get(update, read), and delete 
 */


const myMap = new Map();

myMap.set('apple', 'fruit'); //chave, valor

console.log(myMap)
console.log(myMap.get('apple'));
console.log(myMap.delete('apple'));


/*
    Diferenças Map vs Object

    - Map podem ter chaves de qualquer tipo
    - Map possuem a propriedade length
    - Map são mais fáceisde iterar.
    - Utilizado quando o valor das chaves é desconhecido.
    - Os valores tem o mesmo tipo.
*/