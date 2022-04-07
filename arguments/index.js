/*
    Spread: Se utiliza quando se esta chamando a função ...number
    Rest: quando se está declarando a função ...args

    * Spread: Uma forma de lidar separadamente com os elementos
    * Rest: combina os arguments em um array
*/

function findMax(){
    let max = -Infinity;
    
    for(let i=0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
const number = [1,2,4,5,7]
// console.log(findMax(...number));
// console.log(findMax(1,2,6,4));
// console.log(findMax(7));

function showArgs(){
    return arguments;
}

// console.log(showArgs(1,2,3));

function confereTamanho(...args){
    return args.length;
}

// console.log(confereTamanho());
// console.log(confereTamanho(1));
// console.log(confereTamanho(1,2,3));
console.log(confereTamanho([1,2,3]));