/*
    For-Loop dentro de elementos iteráveis (array, string)
*/

function multiForTwo(arr){
    let auxArr = [];

    for(let i=0; i < arr.length; i++){
        auxArr.push(arr[i] * 2);
    }
    return auxArr;
}

// console.log(multiForTwo([2,4,8]))

/*
    For-in entre propriedades enumerativas de um objeto
*/

function forInExemplo(obj){

    for(let item in obj){
        console.log(item, obj[item]); //item mostra o nome da propiedade e obj[item] mostra o valor da propriedade
    }
}

const meuObjeto = {
    nome: "nelson",
    edad: 35,
}

// forInExemplo(meuObjeto);

/*
    For-of entre estruturas iteráveis (array, string)
*/

function forOfExemple(valor){

    for(let item of valor){
        console.log(item); //precorre cada elemento do string ou array
    }
}

// forOfExemple("nelson");
forOfExemple([30,4,5,6]);