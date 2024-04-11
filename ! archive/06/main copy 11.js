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

console.dir(Person.prototype)

const person = new Person('Jhon', 35, 'male')
console.log(person)
person.greet()

// const Developer = Object.create(Person)

// Developer.constructor = function (name, age, sex, skills) {
//   Person.constructor.apply(this, arguments)
//   this.skills = skills || []
//   return this
// }

// Developer.develop = function () {
//   console.log('Working...')
// }

// console.log(Developer)

// const developer = Object.create(Developer).constructor('Yana', 18, 'female', [ 'JavaScript', 'HTML', 'CSS' ])
// console.log(developer)
// developer.greet()
// developer.develop()
