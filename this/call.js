/*
    Call - O método call() invoca uma função com um dado valor this, e argumentos passados individualmente.
            a diferença entre apply(), e que call() aceita uma lista de argumentos, enquanto apply() acieta 
            um único array de argumentos.

            fun.call(thisArg[, arg1[, arg2[, ...]]])
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

// getSomeThing.call(person)
// getSomeThing.call(son)

/*
    è possível passar parâmetros para essa função seprando-os por vírgulas.
*/

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 2); //objeto mais outros argumentos