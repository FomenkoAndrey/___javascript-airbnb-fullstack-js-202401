/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
function greet(msg, divider) {
  console.log(this)
  console.log(`${msg}${divider} мене звати ${this.name}`)
}
const person = {
  name: 'Андрій',
}
const person2 = {
  name: 'Яна',
  greet,
}
const person3 = {
  name: 'Євген',
}

person2.greet('Hi', '!') // Привіт, мене звати Яна
person2.greet.call(person, 'Привіт', '!!!') // Привіт, мене звати Андрій
person2.greet.apply(person3, [ 'Hello', ',' ]) // Привіт, мене звати Євген

// person2.greet() // Привіт, мене звати Яна
// person3.greet() // Привіт, мене звати Євген

// ! #1
// greet()
// window.greet()

// ! #2
// callback
