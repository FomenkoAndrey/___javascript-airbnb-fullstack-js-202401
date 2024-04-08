function validateAge(age) {
  try {
    if (age < 0) {
      const error = new Error(`Age ${age} is too low, must be more than 0`)
      error.status = -1
      throw error
    }

    if (age > 122) {
      const error = new Error(`Age ${age} is too high, must be less than 122`)
      error.status = -2
      throw error
    }
  } catch (error) {
    console.dir(error)
    console.log(error.message)
    if (error.status === -1) {
      console.log('Age is too low')
    } else if (error.status === -2) {
      console.log('Age is too high')
    }
  }

  return age
}

console.log(validateAge(25))
console.log(validateAge(125))
console.log(validateAge(-10))
console.log(validateAge(10))
