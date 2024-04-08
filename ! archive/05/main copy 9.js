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

// person2.greet() // Привіт, мене звати Яна
// person3.greet() // Привіт, мене звати Євген

// ! #1
greet.call(person, 'Привіт', ',') // Привіт, мене звати Андрій
// const greetYana = greet.bind(person2)
// greetYana('Привіт', ',') // Привіт, мене звати Яна
// greetYana.call(person3, 'Привіт', ',') // Привіт, мене звати Яна

const greetYana = greet.bind(person2, 'Привіт', ',')
greetYana() // Привіт, мене звати Яна
greetYana() // Привіт, мене звати Яна
greetYana() // Привіт, мене звати Яна
greetYana() // Привіт, мене звати Яна

// ! #2
// callback
