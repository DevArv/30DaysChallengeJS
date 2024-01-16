//Practice #1
function processPhoneList(list) {

    list.forEach(phone => {
        if (phone.name.includes('discount')) {
            phone.price = phone.price * 0.8;
        }

        phone.price = phone.price * phone.quantity;

        delete phone.quantity;
    });

    const TOTAL_AMMOUNT = list.reduce((TOTAL_AMMOUNT, phone) => TOTAL_AMMOUNT + phone.price, 0);
    return TOTAL_AMMOUNT;
}

const CELLPHONE = [
    {name: 'Iphone', price: 1000, quantity: 1},
    {name: 'Samsung', price: 800, quantity: 2},
    {name: 'discount Xiaomi', price: 700, quantity: 3},
];

const RESULT = processPhoneList(CELLPHONE);
console.log(RESULT);
console.log(CELLPHONE);

//Practice #2
function buyGadgets(array) {
    array.forEach(gadget => {
        if (gadget.name.includes('discount')) {
            gadget.price = gadget.price * 0.8;
        }

        gadget.price = gadget.price * gadget.quantity;

        delete gadget.quantity;
    });

    const TOTAL_PRICE = array.reduce((TOTAL_PRICE, gadget) => TOTAL_PRICE + gadget.price, 0);
    return TOTAL_PRICE;
}


const GADGETS = [
    {name: 'Jlab', price: 26, quantity: 5},
    {name: 'discount SkullCandy', price: 35, quantity: 3},
    {name: 'Airpods', price: 105, quantity: 10}
];

const VALUE = buyGadgets(GADGETS);
console.log(VALUE);
console.log(GADGETS);

/*
This code defines a function called buyGadgets that takes an array of gadgets as an argument. 
It iterates over each gadget in the array and performs some operations on it. 
If the gadget's name includes the word 'discount', the gadget's price is reduced by 20%. 
Then, the price is multiplied by the quantity of the gadget. The quantity property is then deleted from the gadget object. 
Finally, the function calculates the total price of all gadgets in the array and returns it.
*/