const functionality = {
  greet() {
    console.log(`Hello, ${this.first} ${this.last}!`)
  },
  print() {
    console.log(this)
  },
}
const person = {
  first: 'John',
  last: 'Doe',
}

// person.__proto__ = functionality
Object.setPrototypeOf(person, functionality)

console.log(person)
// console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.greet()
