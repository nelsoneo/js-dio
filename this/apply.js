/*
    O método apply() chama uma função comum dado valor this e arguments providos com uma array (ou um objeto paracido com um array)
    a diferença é que call() acieta uma lista de argumentos, enquanto apply() acieta um array de argumentos.

    fun.apply(thisArg, [argsArray])
*/

const person = {
    name: 'Nelson',
};

const son = {
    name: 'Daniel',
};

function getSomeThing(){
    console.log(this.name);
}

// getSomeThing.apply(person)
// getSomeThing.apply(son)

/*
    É possível passar parâmetros para essa função dentro de um array
*/

const myObj = {
    num1: 3,
    num2: 2,
}

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1,5]) //os argumentos tem que ser passados em um array