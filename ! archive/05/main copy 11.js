const person = {
  name: 'John',
  // ! #1, властивість age
  // age: 20,
  // ! #2, методи
  // _age: 20,
  // getAge() {
  //   return this._age
  // },
  // setAge(value) {
  //   this._age = value
  // },
  // ! #3, аксесори: гетери і сетери
  _age: 20,
  get age() {
    return this._age
  },
  set age(value) {
    this._age = value
  },
}

// ! #1, властивість age
// ! #3, аксесори: гетери і сетери
console.log(person.age)
person.age = 35
console.log(person.age)

// ! #2, методи
// console.log(person.getAge())
// person.setAge(35)
// console.log(person.getAge())
