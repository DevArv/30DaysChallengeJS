// This function protects all the properties of the object
function protectPhone (phone) {
  const PROTECTED_PHONE = Object.assign({}, phone)

  for (const prop in PROTECTED_PHONE) {
    if (typeof PROTECTED_PHONE[prop] === 'object' && PROTECTED_PHONE[prop] !== null) {
      Object.freeze(PROTECTED_PHONE[prop])
    }
  }

  Object.freeze(PROTECTED_PHONE)
  return PROTECTED_PHONE
}

const Cellphone = {
  brand: 'Apple',
  product: 'Iphone 15',
  serie: 'Plus',
  colort: 'Light Blue',
  year: 2023
}

const PROTECTED_CELLPHONE = protectPhone(Cellphone)
PROTECTED_CELLPHONE.product = 'A02'
console.log(PROTECTED_CELLPHONE.product)

/* This code snippet creates a function called protectPhone that takes an object phone as input.
It creates a copy of the object using Object.assign, then iterates through the properties of the copy and freezes any nested objects.
Finally, it freezes the entire object and returns the protected copy. */
