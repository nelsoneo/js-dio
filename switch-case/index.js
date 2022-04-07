/*
    Equivalente a uma comparação de tipo e valor (===).
    Sempre precisa de um valor default
    Ideal para quando se precisa comparar muitos valores
*/

function getAnimal(id){
    switch (id) {
        case 1:
            return 'Dog'
            break;
        case 2:
            return 'Cat'
            break;
        case 3:
            return 'Mouse'
            break;    
        default:
            return 'Camel'
            break;
    }
}

console.log(getAnimal(4))