/* eslint-disable no-unused-vars */
/* En este desafío, tendrás que implementar un sistema de pagos utilizando polimorfismo en JavaScript.

Se debe crear una clase base llamada Pay que contenga un único método llamado makePay.
Este método recibirá la cantidad a pagar y devolverá un objeto con dos propiedades

realized: true
quantity: $cantidadAPagar
Además, se deben crear también las clases PayPal, Card y Cash, donde cada una debe heredar de la clase Pay.

La clase PayPal debe recibir un email en el constructor y el método makePay debe agregar las propiedades:

platform: "PayPal"
email: $EmailRecibido.
La clase Card recibirá un número de tarjeta de 16 dígitos. Al momento de acceder al método makePay,
se validará si la tarjeta en cuestión tiene esa longitud. En caso de no tener los 16 dígitos, se debe retornar un error.
En caso contrario, al método que proviene de Pay, se le agregará la propiedad de lastCardNumbers: donde se devolverán los últimos 4 dígitos de la tarjeta.

La clase Cash simplemente nos devolverá lo mismo que la clase base.

Por último se debe implementar la lógica de la función processPay la cual recibirá un método de pago y la cantidad,
para poder devolver el objeto llamando al método makePay de cada entidad recibida.

Cada clase tiene su propio archivo dentro del sistema de archvios del playground

Ejemplo 1:

Input:
const card = new Card("4913478952471122")

processPay(card, 100)

Output:

{
  realized: true,
  quantity: 100,
  lastCardNumbers: "1122",
}

Ejemplo 2:

Input:
const paypal = new PayPal("test@mail.com")

processPay(paypal, 240)

Output:

{
  realized: true,
  quantity: 240,
  platform: "PayPal",
  email: "test@mail.com",
}

Ejemplo 3:

Input:
const cash = new Cash()

processPay(cash, 400)

Output:

{
  realized: true,
  quantity: 400,
} */

// Challenge #2
// Payment system

// Base class for payment handling
class Pay {
  // Method that creates an object with 'realized' and 'quantity' properties
  makePay (quantity) {
    return {
      realized: true,
      quantity
    }
  }
}

// Class representing payment via PayPal
class Paypal extends Pay {
  // Constructor that initializes the user's email
  constructor (email) {
    super()
    this.email = email
  }

  // Method that creates an object with payment properties, including the platform and the user's email
  makePay (quantity) {
    return {
      ...super.makePay(quantity), // Inherits properties from the makePay method of the Pay class
      platform: 'PayPal',
      email: this.email
    }
  }
}

// Class representing payment via credit card
class Card extends Pay {
  // Constructor that initializes the card number
  constructor (cardNumber) {
    super()
    this.cardNumber = cardNumber
  }

  // Method that creates an object with payment properties, including the last 4 digits of the card number
  makePay (quantity) {
    // Checks if the card number is valid (has 16 digits)
    if (this.cardNumber.length !== 16) {
      throw new Error('This card number is invalid.')
    }

    return {
      ...super.makePay(quantity), // Inherits properties from the makePay method of the Pay class
      lastCardNumbers: this.cardNumber.slice(-4) // Gets the last 4 digits of the card number
    }
  }
}

// Class representing cash payment
class Cash extends Pay {
  // Method that creates an object with payment properties inherited from the Pay class
  makePay (quantity) {
    return super.makePay(quantity)
  }
}

// Function that processes the payment using the specified payment method
function processPay (method, quantity) {
  return method.makePay(quantity)
}

// Testing the Pay class
const paymentObject = new Pay().makePay(100)
console.log(paymentObject) // Output: { realized: true, quantity: 100 }

// Testing the Paypal class
const paypalPayment = new Paypal('john@example.com').makePay(200)
console.log(paypalPayment) // Output: { realized: true, quantity: 200, platform: 'PayPal', email: 'john@example.com' }

// Testing the Card class with a valid card number
const validCardPayment = new Card('1234567890123456').makePay(300)
console.log(validCardPayment) // Output: { realized: true, quantity: 300, lastCardNumbers: '3456' }

// Testing the Card class with an invalid card number
try {
  const invalidCardPayment = new Card('123').makePay(400)
} catch (error) {
  console.log(error.message) // Output: "This card number is invalid."
}

// Testing the Cash class
const cashPayment = new Cash().makePay(500)
console.log(cashPayment) // Output: { realized: true, quantity: 500 }

// Testing the processPay function
console.log(processPay(new Paypal('jane@example.com'), 600)) // Output: { realized: true, quantity: 600, platform: 'PayPal', email: 'jane@example.com' }
console.log(processPay(new Card('1234567890123456'), 700)) // Output: { realized: true, quantity: 700, lastCardNumbers: '3456' }
console.log(processPay(new Cash(), 800)) // Output: { realized: true, quantity: 800 }
