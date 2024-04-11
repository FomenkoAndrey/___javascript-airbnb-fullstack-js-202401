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

person.__proto__ = functionality

console.log(person.__proto__)
console.log(person)

person.greet()
