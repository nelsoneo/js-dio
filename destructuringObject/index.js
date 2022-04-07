/*
    Entre chaves podems filtrar apenas os dados que nos interesssam em um objeto
*/

const user = {
    id: 35,
    displayName: "Nelson",
    fullName: {
        firstName: "Nelson",
        lastName: "Hernandez Guerra"
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

console.log(userId(user))

console.log(getFullName(user))