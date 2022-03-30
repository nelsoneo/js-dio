/*
    MANIPULANDO ARRAYS

    * forEach() - itera um array.
    * push() - add elmento no final do array.
    * unshift() - add elemento no inicio do array.
    * pop() - remove item no inicio do array e retorna o item removido.
    * shift() - remove item no final do array retorna o item removido.
    * indexOf() - retorna o índice de um valor.
     
    * splice() - remove ou subtitui um item pelo indice.
    * slice() - retorna uma parte do array existente.
*/

let myarray = [1, 2, 3, 4, 5, 'A', 'B', 'C', ['banana', 'maça', 'abacaxi'], [{carro: 'ferrary', rodas: 4, color: 'red'}], true, false];

myarray.push('nelson');
myarray.unshift(true);
const test = myarray.pop();

const shi = myarray.shift();

myarray.forEach(function(item, index){console.log(item, index)});

let a = myarray.splice(0, 5);
let b = myarray.slice();
console.log('slice',b);
