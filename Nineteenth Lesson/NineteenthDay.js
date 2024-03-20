//  Inheritance
class Pet {
    constructor(color) {
        this.color = color;
    }

    isEating() {
        console.log("This pet is eating");
    }
}

class Cat extends Pet {
    constructor(color, age) {
        super(color);
        this.age = age;

        console.log(`This pet is ${this.color} and is ${this.age} years old`);
    }

    isWalking() {
        console.log("This pet is walking");
    }
}

const cat = new Cat("black", 2);
cat.isWalking();
cat.isEating();