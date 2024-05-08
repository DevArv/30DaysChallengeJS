// Facade pattern

// Underlying system
class Welcome {
    isMorning() {
        console.log('Good morning');
    }
    isAfternoon() {
        console.log('Good afternoon');
    }
    isNight() {
        console.log('Good night');
    }
}

// Facade
class WelcomeFacade {
    constructor() {
        this.welcome = new Welcome();
    }

    getWelcome() {
        this.welcome.isMorning();
        this.welcome.isAfternoon();
        this.welcome.isNight();
    }
}

const WELCOME = new WelcomeFacade();
WELCOME.getWelcome(); // Good morning, Good afternoon, Good night
// Facade pattern is used to simplify the system by hiding the complexity of the underlying system.

//Proxy pattern

// Object
const Plan = {
    name: 'Basic',
    price: 36,
    usersAvailable: 2
}

// Proxy Function
const proxy = new Proxy(Plan, {
    get(target, prop) {
        console.log(`Accessing to the property ${prop}`);
        return target[prop];
    },

    set(target, prop, value) {
        console.log(`Setting the property ${prop} with value ${value}`);
        target[prop] = value;
        return true;
    }
});

console.log(proxy.name);
//Accessing to the property name
//Basic

proxy.price = 30;
// Setting the property price with value 30

console.log(proxy.price);
// Accessing to the property price
// 30

proxy.usersAvailable = 1;
// Setting the property usersAvailable with value 1

console.log(proxy.usersAvailable);
// Accessing to the property usersAvailable
// 1

// Proxy pattern - class

class Mouse {
    constructor(product, user) {
        this.product = product;
        this.user = user;
    }

    getName() {
        return this.product.name;
    }

    getColor() {
        return this.product.color;
    }

    getConectivity() {
        return this.product.conectivity;
    }

    info() {
        if (this.user.isOlderThan18) {
            this.product.info();
        } else {
            console.log(`This ${user} has not reached the age of 18`);
        }
    }
}

// Complex object using proxy pattern
const Dog = {
    name: 'Tobbie',
    color: 'Brown',
    breed: {
        breedOne: 'Chihuahua',
        breedTwo: 'Random'
    }
}

const proxy = new Proxy(Dog, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        }
        return null;
    }
});

console.log(proxy.name); //> Tobbie
console.log(proxy.breed.breedOne); //> Chihuahua