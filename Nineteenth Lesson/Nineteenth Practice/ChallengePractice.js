// Nineteenth Practice Challenge # 2
class Payment {
  makePayment (quantity) {
    const PAY_INFO = {
      realized: true,
      quantity
    }
    return PAY_INFO
  }
}

class PayPal extends Payment {
  constructor (email) {
    super()
    this.email = email
  }

  makePayment (quantity) {
    const BASE_PAYMENT_INFO = super.makePayment(quantity)
    const PAY_INFO = {
      platform: 'PayPal',
      email: this.email,
      ...BASE_PAYMENT_INFO
    }
    return PAY_INFO
  }
}

class Card extends Payment {
  constructor (cardNumber) {
    super()
    this.cardNumber = cardNumber
  }

  makePayment (quantity) {
    const BASE_PAYMENT_INFO = super.makePayment(quantity)
    if (this.cardNumber.length === 16) {
      const PAY_INFO = {
        lastCardNumbers: this.cardNumber.slice(-4),
        ...BASE_PAYMENT_INFO
      }
      return PAY_INFO
    } else {
      throw new Error('Invalid card number')
    }
  }
}

class Cash extends Payment {
  makePayment (quantity) {
    return super.makePayment(quantity)
  }
}

function processPayment (method, quantity) {
  return method.makePayment(quantity)
}

const PAY = new Payment().makePayment(1000)
console.log(PAY)

const PAYPAL = new PayPal('test@test.com').makePayment(1000)
console.log(PAYPAL)

const CARD = new Card('1234567890098765').makePayment(1000)
console.log(CARD)

const CASH = new Cash().makePayment(1000)
console.log(CASH)

console.log(processPayment(new Payment(), 100))
console.log(processPayment(new PayPal('test@test.com'), 200))
console.log(processPayment(new Card('1234567890098765'), 300))
console.log(processPayment(new Cash(), 400))
