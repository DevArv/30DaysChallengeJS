// Singleton
// Literal object
const USER_LOGIN = {
    currentLogin: null,

    setCurrentLogin(access) {
        this.currentLogin = access;
    },

    getCurrentLogin() {
        return this.currentLogin;
    }
};

// User access
USER_LOGIN.setCurrentLogin({
    username: 'admin',
    token: '1234'
});
console.log(USER_LOGIN.getCurrentLogin()); //> { username: "admin", token: "1234" }

const NEW_USER_LOGIN = USER_LOGIN;
console.log(NEW_USER_LOGIN === USER_LOGIN); //> true

// Class using Object.Freeze()

class User {
    constructor() {
        if(!User.logIn) {
            this.access = 'admin';
            User.logIn = Object.freeze(this);
        }
        return User.logIn;
    }
}

const LOGIN_1ST = new User();
const LOGIN_2ND = new User();
console.log(LOGIN_1ST === LOGIN_2ND); //> true

//Factory pattern
function createProduct(name, price) {
    return {
        name: name,
        price: price,
        getInfo: function() {
            console.log(`The name of this product is ${this.name} and the price is $: ${this.price}.`);
        }
    }
}

const PRODUCT1 = createProduct('Jlab', 25);
const PRODUCT2 = createProduct('Rubik cube', 5);

console.log(PRODUCT1.name); //> Jlab
console.log(PRODUCT2.price); //> 5
PRODUCT1.getInfo(); //> The name of this product is Jlab and the price is $: 25.
PRODUCT2.getInfo(); //> The name of this product is Rubik cube and the price is $: 5.