/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

// #1 літерал об'єкта
// var person = {
//   name: 'Jhon',
//   age: 25,
//   gender: 'male',
//   sayHi() {
//     return 'Hello world!'
//   },
// }
// console.log(person.sayHi())

// #2 конструктор об'єкта
// var person = new Object({
//   name: 'Jhon',
//   age: 25,
//   gender: 'male',
//   sayHi() {
//     return 'Hello world!'
//   },
// })
// console.log(person.sayHi())

// #3 Object.create()
var car = Object.create({
  year: 2020,
  driver: 'John',
  owner: 'Bill',
})

car.driver = 'Alina'

console.log(car.year)
console.log(car.driver)
console.log(car.owner)

console.log(car)

delete car.driver
console.log(car)

console.log(car.hasOwnProperty('driver'))
'driver' in car ? console.log('yes') : console.log('no')
