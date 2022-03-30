const carro = {
    marca: 'Ferrari',
    ano: 2020,
    dono: 'Nelson Hernandez',
    motor: {
        potencia() {return 'Esta novo'},
        cabalhos: 4
    }
};

console.log(carro);
console.log(carro.marca);
console.log(carro.motor.potencia());