/*
    A palavra reservada this é uma referência de contexto. No exemplo this refere-se ao objeto pessoa.
*/

const pessoa = {
    firstName: "Nelson",
    lastName: "Hernandez Guerra",
    id: 1,
    getFullName(){
        console.log(this.firstName +' '+ this.lastName);
    },
    getId(){
        console.log(this.id)
    }
};

pessoa.getFullName();
pessoa.getId()

/*
    Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

    contexto                        referência
    Em um objeto (método)           Própio objeto dono do método
    Sozinha                         Objeto global (em navegadores, windows)
    Função                          Objeto global 
    Evento                          Elemento que recebeu o evento
*/