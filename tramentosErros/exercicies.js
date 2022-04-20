/* O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. 
Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof 

*/

/* function meuTry(arr, num){
    try {
        if(arr.length === 0) {
            return 'Deve informar um array e seu tamanho'
        } else if (!num){
            return 'number is empty'
        } else {
            if(!(typeof arr === 'object')){
                return 'Deve informar um array';
            }

            if(!(typeof num === 'number')){
                return 'Deve informar um numero'
            }

            if(!(arr.length === num)){
                return 'RangeError'
            }
            return `O array é ${arr} com tamanho ${num}`;
        }
    } catch (error) {
        console.error(error);
    }
} */

function meuTry(arr, num){
    try {
        if(!arr && !num) {
            throw new ReferenceError('Deve informar os parametros'); 
        } else {
            if(typeof arr !== 'object'){
                throw new TypeError('O primeiro parametro informado nao é um array');
            }

            if(typeof num !== 'number'){
                throw new TypeError('O segundo parametro nao é um numero');
            }

            if(arr.length !== num){
                throw new RangeError('O tamanho informado no corresponde ao tamanho do array')
            }
            return `O array é ${arr} com tamanho ${num}`;
        }
    } catch (error) {
        if( error instanceof ReferenceError) {
            // throw 'Error Reference Error';
            console.log('Error Reference: ' + error);
        }
        if( error instanceof TypeError) {
            // throw 'Error Reference Error';
            console.log('Error Type Error');
        }
        if( error instanceof RangeError) {
            // throw 'Error Reference Error';
            console.log('Error Range Error');
        }
    }
}

console.log(meuTry())
// meuTry();