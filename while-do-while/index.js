/*
 While executa uma instruções até que a condição se torne false
*/

function exemploWhile(){
    let num = 0;

    while (num <= 5) {
        console.log(num);
        num++;
    }
}

// exemploWhile()


/*
    Executa a instruções até que a condição se torne false, porém a primeira execução sempre ocorre.
*/

function exemploDoWhile(){
    // let num1 = 0;
    let num1 = 6;  //como não satiface a condição ele vai rodar pelo menos uma vez, exibindo valor 6
    
    do {
        console.log(num1);
        num1++;
    } while (num1 <=5);
}

exemploDoWhile()