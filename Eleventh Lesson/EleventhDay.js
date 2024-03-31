// Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ age: 31, nick: 'Alex' })
  }, 4000)
})

promise
  .then((result) => {
    const DOUBLED_AGE = result.age * 2
    return DOUBLED_AGE.toString()
  })
  .then((result) => {
    console.log(`The result is: ${result}`)
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log('The promise is finished')
  })

// setTimeOut
const timer = setTimeout(() => {
  console.log('Has passed 5 seconds')
}, 5000)

clearTimeout(timer)

// setInterval
setInterval(() => {
  console.log('Has passed 2 seconds')
}, 2000)

// new functions with setTimeOut
// Example (1)
function waitTimer (milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const SECONDS = milliseconds / 1000
      resolve(SECONDS)
    }, milliseconds)
  })
}

waitTimer(5000).then((result) => {
  console.log(`The result is: ${result} seconds.`)
})

// Example (2)
function waitTimer1 (milliseconds) {
  return new Promise((resolve, reject) => {
    if (milliseconds < 0) {
      reject(new Error('The promise dont accept negative numbers'))
    } else {
      setTimeout(() => {
        const SECONDS = milliseconds / 1000
        resolve(SECONDS)
      }, milliseconds)
    }
  })
}

waitTimer1(-5000)
  .then((result) => {
    console.log(`The result is: ${result} seconds.`)
  })
  .catch((error) => {
    console.error(error.message)
  })

// Function based on the promise challenge

// Whatsapp function
function sendWhatsappMessage (contact, body) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (contact && body) {
        resolve({ contact, message: body })
      } else {
        const INCOMPLETE_DETAILS = []

        if (!contact) INCOMPLETE_DETAILS.push('contact')
        if (!body) INCOMPLETE_DETAILS.push('body')

        const ERROR_SEND = (`Error: You need to complete this information to send a message: ${INCOMPLETE_DETAILS.join(', ')}`)
        reject(new Error(ERROR_SEND))
      }
    }, 3000)
  })
}

sendWhatsappMessage(null, 'You have everthing to make your decision')
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error.message)
  })
