/* eslint-disable no-extend-native */
// This is a practice of the first challenge of this day.

// Exercise # 1
function arrayRequest () {
  Array.prototype.myFilter = function (callback) {
    const ARRAY_UPDATED = []

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        ARRAY_UPDATED.push(this[i])
      }
    }

    return ARRAY_UPDATED
  }
}

const array = [
  { name: 'Riku', level: 9 },
  { name: 'Saki', level: 12 },
  { name: 'Kukitsu', level: 8 }
]

arrayRequest()
const VALUE = array.myFilter(player => player.level >= 9)
console.log(VALUE)

// Exercise # 2

function arrayCharge () {
  Array.prototype.myFilter = function (callback) {
    const NEW_ARRAY = []

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        NEW_ARRAY.push(this[i])
      }
    }
    return NEW_ARRAY
  }
}

const CURRENT_CHARGE = [
  { brand: 'Apple', charge: 92 },
  { brand: 'Samsung', charge: 70 },
  { brand: 'Xiaomi', charge: 45 }
]
arrayCharge()
const RESULT = CURRENT_CHARGE.myFilter(battery => battery.charge > 71)
console.log(RESULT)
