/*
    * Crei uma função que recebe dois números como parâmetros.
    * Confira se os números são iguais.
    * Confira se a soma dos números é maior que 10 ou menor que 20.
    * Retorne uma string dizendo "Os números num1 e num2 não/são igual. Sua soma é soma menor/maior que 10 e maior/menor que 20".
*/


function operacion(num1, num2){
let igual = '';
let maior10 = '';
let menor20 = '';
let result = '';

    if(num1 == num2){
        igual = 'sim';
    }else {
        igual = 'não';
    }

    if(num1 + num2 > 10){
        maior10 = 'maior';
    } else {
        maior10 = 'menor'
    }

    if(num1 + num2 < 20){
        menor20 = 'menor';
    } else {
        menor20 = 'maior';
    }
   result  = `Os números ${num1} e ${num2} ${igual} são iguais. Sua soma é ${num1 + num2} ${maior10} que 10 e ${menor20} que 20`;
    console.log(result);
    return result
}

operacion(10,10);