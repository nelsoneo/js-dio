/*
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
*/

const myMap = new Map();

myMap.set('nelson', 'Usuarios')
myMap.set('Daniel', 'Socio')
myMap.set('Mimi', 'ADMIN')
myMap.set('Dan', 'ADMIN')
myMap.set('Jorh', 'ADMIN')

function membres(map){

    let admin = []

    for([key, value] of map){
        if(value === 'ADMIN')
            admin.push(key)
    }
    return admin;
}

console.log(membres(myMap))
