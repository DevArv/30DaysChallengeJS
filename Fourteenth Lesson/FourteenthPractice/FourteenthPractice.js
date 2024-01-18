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

// Practice #3
// This function takes a list of objects representing iPhones and processes each of them.
function processIphoneBuy(list) {
    // Iterate over each 'iphone' object in the list.
    list.forEach(iphone => {
        // Check if the iPhone name includes the word 'discount'.
        if (iphone.name.includes('discount')) {
            // If so, reduce the iPhone price by 20% (multiply by 0.8).
            iphone.price = iphone.price * 0.8;
        }

        // Multiply the iPhone price by the quantity of iPhones purchased.
        iphone.price = iphone.price * iphone.quantity;

        // Delete the 'quantity' property from the 'iphone' object.
        delete iphone.quantity;
    });

    // Calculate the total price by summing up the prices of all iPhones in the list.
    const TOTAL_IPHONE_PRICE = list.reduce((TOTAL_IPHONE_PRICE, iphone) => TOTAL_IPHONE_PRICE + iphone.price, 0);

    // Return the total price of all iPhones after applying discounts and multiplying by quantity.
    return TOTAL_IPHONE_PRICE;
}


const IPHONE_INVENTORY = [
    { name: 'discount Iphone 4', price: 199, quantity: 3 },
    { name: 'discount Iphone 5', price: 199, quantity: 8 },
    { name: 'discount Iphone 6', price: 199, quantity: 2 },
    { name: 'Iphone 7', price: 649, quantity: 5 },
    { name: 'Iphone 8', price: 699, quantity: 7 }
];

const IPHONE_RESULT = processIphoneBuy(IPHONE_INVENTORY);
console.log(IPHONE_RESULT);
console.log(IPHONE_INVENTORY);

/*
10207.6
[
  { name: 'discount Iphone 4', price: 477.6 },
  { name: 'discount Iphone 5', price: 1273.6000000000001 },
  { name: 'discount Iphone 6', price: 318.40000000000003 },
  { name: 'Iphone 7', price: 3245 },
  { name: 'Iphone 8', price: 4893 }
]

This code snippet defines a function called processIphoneBuy that takes in a list of iPhones. 
It iterates over each iPhone in the list and performs several operations. 
If the name of an iPhone includes the word 'discount', its price is reduced by 20%. 
Then, the price of each iPhone is multiplied by its quantity. 
Finally, the 'quantity' property is deleted from each iPhone. 
The function calculates the total price of all the iPhones in the list and returns it.
*/

// Practice #4 -> new challenge.

function getHeetAvialability(heets) {
    const HEETS_INVENTORY = [...heets];

    HEETS_INVENTORY.sort((a, b) => {
        if (a.inStock && !b.inStock) {
            return -1;
        } else if (!a.inStock && b.inStock) {
            return 1;
        } else {
            return a.price - b.price;
        }
    });

    return HEETS_INVENTORY;
}

const HEETS_STOCK = [
    {name: 'Bronze', price: 4.50, inStock: true},
    {name: 'Sienna', price: 4.25, inStock: false},
    {name: 'Blue', price: 4.00, inStock: false},
    {name: 'Purple', price: 3.75, inStock: true},
]

const HEETS_INVENTORY = getHeetAvialability(HEETS_STOCK);
console.log(HEETS_INVENTORY);

/*
[
  { name: 'Purple', price: 3.75, inStock: true },
  { name: 'Bronze', price: 4.5, inStock: true },
  { name: 'Blue', price: 4, inStock: false },
  { name: 'Sienna', price: 4.25, inStock: false }
]
*/