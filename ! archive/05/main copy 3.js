function validateAge(age) {
  try {
    if (age < 0) {
      throw new Error(`Age ${age} is too low, must be more than 0`)
    }

    if (age > 122) {
      throw new Error(`Age ${age} is too high, must be less than 122`)
    }
  } catch (error) {
    console.log(error.message)
  }

  return age
}

console.log(validateAge(25))
console.log(validateAge(125))
console.log(validateAge(-10))
console.log(validateAge(10))
