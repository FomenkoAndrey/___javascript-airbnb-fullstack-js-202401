const person = {
  name: 'John',
  _age: 20,
  get age() {
    return `${this._age} year${this._age > 1 ? 's' : ''}`
  },
  set age(v) {
    this._age = v < 0 ? 0 : v > 122 ? 122 : v
  },
  sex: 'male',
}

// console.log(Object.getOwnPropertyDescriptor(person, 'name'))
// console.log(Object.getOwnPropertyDescriptor(person, 'age'))

// ! all at once
// Object.defineProperty(person, 'sex', {
//   configurable: false,
//   enumerable: false,
//   value: 'male',
//   writable: false,
// })

// ! writable
// Object.defineProperty(person, 'sex', {
//   writable: false,
// })

// console.log(person.sex)
// person.sex = 'female'
// console.log(person.sex)

// ! enumerable
Object.defineProperty(person, 'sex', {
  enumerable: false,
})
Object.defineProperty(person, '_age', {
  enumerable: false,
})

for (const key in person) {
  console.log(key, ':', person[key])
}

console.log(Object.getOwnPropertyDescriptor(person, 'sex'))

Object.defineProperty(person, 'sex', {
  enumerable: true,
})
Object.defineProperty(person, '_age', {
  enumerable: true,
})

for (const key in person) {
  console.log(key, ':', person[key])
}
