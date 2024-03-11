// Getter and Setter
class Debit {
    constructor(ID, projectName, price) {
        this._ID = ID;
        this._projectName = projectName;
        this._price = price;
    }

    forContract(amount) {
        this._price += amount;
        console.log(`The price of ${this._projectName} is USD$ ${this._price}.`);
    }

    discount(quantity) {
        if (quantity <= this._price) {
            this._price -= quantity;
            console.log(`You received USD$ ${quantity} as a discount.`);
        }else {
            console.log("You don't have enough money to receive a discount.");
        }
    }

    get price() {
        console.log(`This is the total amount you have to play to develop this app USD$ ${this._price}.`);
    }

    set price(newPrice) {
        if (newPrice < 0) {
            console.log("The develop of this app can't be free or have a negative price.")
        } else {
            this._price = newPrice;
            console.log(`This is the new price of ${this._projectName} USD$ ${this._price}.`);
        }
    }
}

const DEBIT = new Debit(1, "Mobile App", 1250);
DEBIT.price = 1350;
DEBIT.newPrice;