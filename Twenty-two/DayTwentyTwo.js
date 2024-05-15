// Adapter and Decorator pattern
class Iqos {
    smoke(heets) {
        console.log('You need ' + heets, 'to smoke with an Iqos' );
    }
}

class IqosAdapter {
    constructor(iqos) {
        this.iqos = iqos;
    }

    smoke() {
        this.iqos.smoke('Required cigarettes');
    }
}

const IQOS = new Iqos();
const IQOSADAPTER = new IqosAdapter(IQOS);
IQOSADAPTER.smoke(); //> You need Required cigarettes to smoke with an Iqos

// Current Date
class NewDate {
    constructor() {
        this.currentDate = new Date();
    }

    getDate() {
        const DAY = this.currentDate.getDate();
        const MONTH = this.currentDate.getMonth() + 1;
        const YEAR = this.currentDate.getFullYear();

        return `${DAY}/${MONTH}/${YEAR}`;
    }
}

class NewDateAdapter {
    constructor(newDate) {
        this.newDate = newDate;
    }

    getFormattedDate() {
        return this.newDate.getDate();
    }
}

const newDateInstance = new NewDate();
const adapter = new NewDateAdapter(newDateInstance);
console.log(adapter.getFormattedDate()); //> "16/4/2024"

//Decorator pattern
//Main class
class Laptop {
    price() {
        return 1700;
    }
}

//Decorator class
class Keyboard extends Laptop {
    constructor(setUp) {
        super();
        this.setUp = setUp;
    }

    price() {
        return this.setUp.price() + 25;
    }
}

//Decorator class
class Mouse extends Laptop {
    constructor(setUp) {
        super();
        this.setUp = setUp;
    }

    price() {
        return this.setUp.price() + 15;
    }
}

const LAPTOP = new Laptop();
console.log(LAPTOP.price()); //> 1700

const LAPTOP_WITH_KEYBOARD = new Keyboard(LAPTOP);
console.log(LAPTOP_WITH_KEYBOARD.price()); //> 1725

const LAPTOP_WITH_MOUSE = new Mouse(LAPTOP);
console.log(LAPTOP_WITH_MOUSE.price()); //> 1715

const OBJ1 = new Laptop();
const OBJ2 = new Keyboard(OBJ1);
const COMBO = new Mouse(OBJ2);
console.log(OBJ2.price()); //> 1725
console.log(COMBO.price()); //> 1740