// Chain of Responsibility Pattern
// Class to handle the order
class MakeOrder {
    constructor(cart, price) {
        this.cart = cart;
        this.price = price;
        this.next = null;
    }
}

//Class to handle the discount
class DiscountHandler {
    constructor() {
        this.next = null;
    }

    buy(order) {
        if (order.cart == 'discount') {
            console.log(`You have obtained a 20% discount for your purchase, which makes a total of ${order.price * 0.8} to pay.`)
        } else {
            this.next.buy(order);
        }
    }
}

//Class to handle free shipping
class ShippingHandler {
    constructor() {
        this.next = null;
    }

    buy(order) {
        if (order.price >= 1000) {
            console.log('The price of the product is over 1000, you will receive free shipping.');
        } else {
            this.next.buy(order);
        }
    }
}


//Use
const DISCOUNT_HANDLER = new DiscountHandler();
const SHIPPING_HANDLER = new ShippingHandler();
DISCOUNT_HANDLER.next = SHIPPING_HANDLER;

const MAKE_ORDER = new MakeOrder('discount', 2500);
DISCOUNT_HANDLER.buy(MAKE_ORDER); // Output: You have obtained a 20% discount for your purchase, which makes a total of 2000 to pay.

const MAKE_ORDER_2 = new MakeOrder('normal', 1000);
DISCOUNT_HANDLER.buy(MAKE_ORDER_2); // Output: The price of the product is over 1000, you will receive free shipping.

// Observer Pattern
class UpdateCustomerInfo {
    constructor(name) {
        this.name = name;
    }

    notificationUpdate(change) {
        console.log(`The customer ${this.name} has been updated. ${change}`);
    }
}

class Customer {
    constructor() {
        this.customers = [];
    }

    newCustomer(updateCustomerInfo) {
        this.customers.push(updateCustomerInfo); 
    }
    notifyChange(change) {
        for (const CUSTOMER of this.customers) {
            CUSTOMER.notificationUpdate(change);
        }
    }
}

const CUSTOMER = new Customer();
const UPDATE_CUSTOMER_INFO = new UpdateCustomerInfo('Alex');
const UPDATE_CUSTOMER_INFO_2 = new UpdateCustomerInfo('Maria');

CUSTOMER.newCustomer(UPDATE_CUSTOMER_INFO);
CUSTOMER.newCustomer(UPDATE_CUSTOMER_INFO_2);

CUSTOMER.notifyChange("Data has been updated");