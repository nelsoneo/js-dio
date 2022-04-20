/*
Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

*/

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(value){
        return this._saldo = value;
    }

    depositar(amount){
       return this._saldo += amount;
    }

    sacar(amount){
        if(amount > this._saldo){
            return console.log("Saldo insufficient")
        }
        return this._saldo -= amount;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);

        this.tipo = "Corriente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(value) {
        return this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);

        this.tipo = "Poupança";
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);

        this.tipo = "Universitaria";
    }
    
    sacar(amount){
        if(amount > 500){
            return console.log( "operation denied");
        }
        this._saldo = this._saldo - amount;
        return this._saldo ;
    }
}

// let nelson = new ContaCorrente(360, 147, true);
// nelson.depositar(1000);
// nelson.sacar(200);
// console.log(nelson.saldo);

let daniel = new ContaUniversitaria(390, 741);
daniel.depositar(700)
daniel.sacar(50)
console.log(daniel.saldo);