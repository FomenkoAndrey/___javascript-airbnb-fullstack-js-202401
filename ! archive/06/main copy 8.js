const Person = {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    return this
  },
  greet() {
    console.log(`Hi, my name is ${this.name}`)
  },
}

const person = Object.create(Person).constructor('Jhon', 35, 'male')
const person2 = Object.create(Person).constructor('Bob', 21, 'male')
const person3 = Object.create(Person).constructor('Mary', 21, 'female')
console.log(person)
person.greet()

// const person = {
//   name: 'Jhon',
//   age: 35,
//   gender: 'male',
//   greet() {
//     console.log(`Hi, my name is ${this.name}`)
//   },
// }

// const anotherPerson = {
//   name: 'Jessi',
//   age: 23,
//   gender: 'female',
//   greet() {
//     console.log(`Hi, my name is ${this.name}`)
//   },
// }

// const thirdPerson = {
//   name: 'Bob',
//   age: 40,
//   gender: 'male',
//   greet() {
//     console.log(`Hi, my name is ${this.name}`)
//   },
// }
