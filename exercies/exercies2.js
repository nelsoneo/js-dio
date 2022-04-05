/*
    Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.  

    exemplo:
    input: [1, 3, 4, 6, 80, 33, 23, 90]
    output: [1, 3, 0, 0, 0, 33, 23, 0]

    input: []
    output: -1
 */

function trocaElements(arr) {
  if (!arr) {
    return -1;
  } else if (arr.length == 0) {
    return -1;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        arr[i] = 0;
      }
    }
  }
  return arr;
}

// console.log(trocaElements([1, 3, 4, 6, 80, 33, 23, 90]));
// console.log(trocaElements([]));
console.log(trocaElements(false));
