/* eslint-disable prefer-rest-params */
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
console.log(person)

const Developer = Object.create(Person)

Developer.constructor = function (name, age, sex, skills) {
  Person.constructor.apply(this, arguments)
  this.skills = skills || []
  return this
}

Developer.develop = function () {
  console.log('Working...')
}

console.log(Developer)

const developer = Object.create(Developer).constructor('Yana', 18, 'female', [ 'JavaScript', 'HTML', 'CSS' ])
console.log(developer)
developer.greet()
developer.develop()
