class Animal {
    constructor(type = 'animal'){ //constuctor
        this.type = type;
    }

    get type(){ //methods get
        return this._type;
    }

    set type(value){//methods get
        this._type = value;
    }

    makeSound(){//methods 
        console.log('making animal sound');
    }
}

class Cat extends Animal {
    constructor(){ 
        super('cat');  //chama o constructor de a classe pai
    }

    makeSound(){
        super.makeSound(); //super.makeSound
        console.log('miau');
    }
}

let anim = new Animal('dog')
// console.log(anim.type);

let anima = new Cat();
console.log(anima.type)
