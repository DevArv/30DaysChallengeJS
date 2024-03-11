// Exercise # 1
const ELECTRONIC = {
    brand: "Apple",
    serie: "MacBook Pro",
    year: 2022,
}

class Laptop {
    constructor(brand, serie, year) {
        this.brand = brand;
        this.serie = serie;
        this.year = year;
    }
    getDetails() {
        console.log(`The brand of this laptop: ${this.brand}`);
        console.log(`The serie of this laptop: ${this.serie}`);
        console.log(`The year of this laptop: ${this.year}`);
    }
}

class AditionalDetails extends Laptop {
    constructor(brand, serie, year, color, chip) {
        super(brand, serie, year);
        this.color = color;
        this.chip = chip;
    }

    getDetails() {
        super.getDetails();
        console.log(`The color of this laptop: ${this.color}`);
        console.log(`The chip of this laptop: ${this.chip}`);
    }
}


const LAPTOP = new AditionalDetails(ELECTRONIC.brand, ELECTRONIC.serie, ELECTRONIC.year, "Silver", "M2",);
LAPTOP.getDetails();

//Exercise # 2
const ACCESSORY = {
    brand: "Ray-Ban",
    serie: "Wayfarer",
    year: 2021,
}

class Sunglasses {
    constructor(brand, serie, year) {
        this.brand = brand;
        this.serie = serie;
        this.year = year;
    }

    getProductDetails() {
        console.log(`The brand of this accessory: ${this.brand}`);
        console.log(`The serie of this accessory: ${this.serie}`);
        console.log(`The year of this accessory: ${this.year}`);
    }
}

class Price extends Sunglasses {
    constructor(brand, serie, year, price) {
        super(brand, serie, year);
        this.price = price;
    }
    getProductDetails() {
        super.getProductDetails();
        console.log(`The price of this accessory: USD$ ${this.price}`);
    }
}

const SUNGLASSES = new Price(ACCESSORY.brand, ACCESSORY.serie, ACCESSORY.year, 200);
SUNGLASSES.getProductDetails();

// Encapsulation
class MaestrySeven {
    constructor(user, points, role) {
        this._user = user;
        this._points = points;
        this._role = role;
    }

    earn(amount) {
        this._points += amount;
        console.log(`You have ${this._points} points.`);
    }

    lostPoints(quantity) {
        if (quantity <= this._points) {
            this._points -= quantity;
            console.log(`You have lost ${quantity} points.`);
        } else {
            console.log("You don't have enough points to lose.");
        }
    }

    getPoints() {
        return this._points;
    }
}

const MAESTRY_SEVEN = new MaestrySeven("GGARiky", 30, "Jungler");
MAESTRY_SEVEN.earn(20);
MAESTRY_SEVEN.lostPoints(10);
console.log(MAESTRY_SEVEN.getPoints());