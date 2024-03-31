const formData = {
  name: 'Juan',
  lastname: 'Perez',
  email: 'juan@example.com',
  password: '123456'
}

const registeredUsers = [
  { name: 'Pedro', lastname: 'Gomez', email: 'pedro@example.com' },
  { name: 'Maria', lastname: 'Garcia', email: 'maria@example.com' }
]

function validateForm (formData, registeredUsers) {
  // This validate if the required fields are completed
  const IS_REQUIRED = ['name', 'lastname', 'email', 'password']
  const IS_INCOMPLETE = IS_REQUIRED.filter((data) => !formData[data])

  if (IS_INCOMPLETE.length > 0) {
    throw new Error(`This field is required: ${IS_INCOMPLETE.join(', ')}`)
  }

  // This validate if any email is duplicated
  if (registeredUsers.some((user) => user.email === formData.email)) {
    throw new Error(`This email already exists: ${formData.email}`)
  }

  // Add new user to the list of the registered users
  const ADD_NEW_USER = {
    name: formData.name,
    lastname: formData.lastname,
    email: formData.email,
    password: formData.password
  }

  registeredUsers.push(ADD_NEW_USER)

  // Return success message
  return `User registered successfully: ${formData.name} ${formData.lastname}`
}

try {
  const RESULT_MESSAGE = validateForm(formData, registeredUsers)
  console.log(RESULT_MESSAGE)
} catch (error) {
  console.error(error.message)
}
