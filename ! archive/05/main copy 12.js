const person = {
  name: 'John',
  _age: 20,
  get age() {
    return `${this._age} year${this._age > 1 ? 's' : ''}`
  },
  set age(v) {
    this._age = v < 0 ? 0 : v > 122 ? 122 : v
  },
}

person.age = 35
console.log(person.age)

person.age = 1235
console.log(person.age)

person.age = -235
console.log(person.age)
