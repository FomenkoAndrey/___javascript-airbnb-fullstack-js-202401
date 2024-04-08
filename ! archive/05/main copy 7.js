/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
function greet() {
  // ! #2
  // ! вирішення проблеми з this через функцію стрілку
  console.log(this)
  setTimeout(() => {
    console.log(this)
    console.log(`Привіт, мене звати ${this.name}`)
  }, 1000)
}
const person = {
  name: 'Андрій',
  greet,
}
const person2 = {
  name: 'Яна',
  greet,
}
const person3 = {
  name: 'Євген',
  greet,
}

person3.greet() // Привіт, мене звати Євген
person.greet() // Привіт, мене звати Андрій
person2.greet() // Привіт, мене звати Яна

// ! #1
// greet()
// window.greet()

// ! #2
// callback
