/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class Person {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  greet() {
    return `Hi, my name is ${this.name}`
  }
}

const person = new Person('Jhon', 35, 'male')
console.log(person)
console.log(person.greet())

class Developer extends Person {
  constructor(...args) { // rest operator - збирає всі аргументи в масив
    super(...args) // spread operator - розбирає масив на аргументи
    this.skills = args[3] || []
  }

  greet() {
    const res = super.greet()
    return `${res} and I'm a developer. My skills: ${this.skills.join(', ')}`
  }

  develop() {
    console.log('Working...')
  }
}

const developer = new Developer('Yana', 18, 'female', [ 'JavaScript', 'HTML', 'CSS' ])
console.log(developer)
console.log(developer.greet())
developer.develop()
