/* eslint-disable prefer-rest-params */
const Person = function (name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
  this._id = '123456'
  this._show = function () {
    console.log('Show')
  }
}

Person.prototype.greet = function () {
  console.log(`Hi, my name is ${this.name}`)
}

Person.prototype.print = function () {
  console.log('Print')
}

console.dir(Person)

const person = new Person('Jhon', 35, 'male')
console.log(person)
person.greet()
person.print()
person._show()

const Developer = function (name, age, sex, skills) {
  Person.apply(this, arguments)
  this.skills = skills || []
}

Developer.prototype = Object.create(Person.prototype)
Developer.prototype.constructor = Developer

Developer.prototype.develop = function () {
  console.log('Working...')
}

console.dir(Developer)

const developer = new Developer('Yana', 18, 'female', [ 'JavaScript', 'HTML', 'CSS' ])
console.log(developer)
developer.greet()
developer.develop()
developer.print()
developer._show()
