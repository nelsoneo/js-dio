/*
    LAÇOS DE REPETIÇÃO

    for;
    for/in
    for/of
    while
    do/while
*/

const array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

const object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i], i);
// };

// for (let j in array) {
//     console.log(j, array[j]);
// }

// for (let o in object) {  //para objectos
//     console.log(o, object[o]);
// }

// for(let item of array) {
//     console.log(item);
// }

let index = 0
// while (index < 5) {
//     console.log(index);
//     index++;
// }

do {
    console.log(index);
    index++;
} while (index < 5);