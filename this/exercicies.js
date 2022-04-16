/*
    Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

    function calculaIdade(anos) {
        return `Daqui a ${anos} anos, ${this.nome} terá ${
            this.idade + anos
        } anos de idade.`;
    }
*/

const person1 = {
    name:'nelson', age: 35
}
const person2 = {
    name:'daniel', age: 9
}
const person3 = {
    name:'mimi', age: 34
}

function calculaIdade(years) {
  return `Daqui a ${years} anos, ${this.name} terá ${this.age + years} anos de idade.`;
}

console.log(calculaIdade.call(person1, 10))
console.log(calculaIdade.apply(person2, [10]))