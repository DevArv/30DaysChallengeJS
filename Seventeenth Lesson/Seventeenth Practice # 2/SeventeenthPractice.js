// This class allow the user to register the percentage of the battery charge.

class Cellphone {
  constructor (brand, model, color, battery, charge = false) {
    this.brand = brand
    this.model = model
    this.color = color
    this.battery = battery
    this.charge = charge
  }

  chargeOn () {
    this.charge = true
  }

  chargeOff () {
    this.charge = false
  }

  chargePlug (energy) {
    if (this.charge === true) {
      this.battery += energy
      console.log('This is the actual battery level: ' + this.battery)
    } else {
      throw new Error('You cannot charge the phone if it is not plugged in')
    }
  }

  getPhoneData () {
    return {
      brand: this.brand,
      model: this.model,
      color: this.color,
      battery: this.battery,
      charge: this.charge
    }
  }
}

const PHONE = new Cellphone('Iphone', '15 plus', 'Light Blue', 54)
PHONE.chargeOn()
PHONE.chargePlug(20)
console.log(PHONE.getPhoneData())
