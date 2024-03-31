// Challenge number 1
function user (setting) {
  return typeof setting
}

console.log(user(30), // >return number
  user('Alexander'), // >return string
  user(false)) // >return boolean
