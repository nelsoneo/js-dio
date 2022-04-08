/*
    Cria uma nova função que, quando chamada, tem sua palavra chave this, definida como o valor fornecido, com uma sequência determianda de argumentos precedendo quaisquer outros
    que sejam fornecidos quando a nova função é chamada.

    function.bind(thisArg[, arg1[, arg2[, ...]]])


    Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
*/

const retornaNomes = function (){
    return this.name;
};

let nelson = retornaNomes.bind({name: 'Nelson'});

console.log(nelson());