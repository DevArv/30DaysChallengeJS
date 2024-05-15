/* eslint-disable no-useless-constructor */
export class Cellphones {
  constructor (brand, color, model) {
    this.brand = brand
    this.color = color
    this.model = model
  }

  addToCart () {
    throw new Error('Other classes must implement this method')
  }
}

class Comunication extends Cellphones {
  constructor (brand, color, model) {
    super(brand, color, model)
  }

  addToCart () {
    return `You added ${this.brand} ${this.model} ${this.color} to your cart`
  }
}

class Cart {
  constructor () {
    this.Cellphone = []
  }

  addCellphone (cellphone) {
    this.Cellphone.push(cellphone)
    return cellphone.addToCart()
  }

  deleteCellphone (cellphone) {
    const INDEX = this.Cellphone.indexOf((cellphone))
    if (INDEX !== -1) {
      this.Cellphone.splice(INDEX, 1)
    }
  }

  getCellphones () {
    return this.Cellphone
  }
}

const IPHONE = new Comunication('Apple', 'Black', 'Iphone 13')

const CART = new Cart()
console.log(CART.addCellphone(IPHONE))
console.log(CART.getCellphones())
