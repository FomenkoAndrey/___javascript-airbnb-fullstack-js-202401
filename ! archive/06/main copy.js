const obj = {
  name: 'John',
  age: 30,
  city: 'New York',
}

// console.log(Object.keys(obj))
// for (const key of Object.keys(obj)) {
//   console.log(key, obj[key])
// }
Object.keys(obj).forEach(key => console.log(key, obj[key]))

// console.log(Object.values(obj))
// for (const value of Object.values(obj)) {
//   console.log(value)
// }
Object.values(obj).forEach(value => console.log(value))

// console.log(Object.entries(obj))
// for (const entries of Object.entries(obj)) {
//   console.log(entries)
// }
Object.entries(obj).forEach(entry => console.log(entry))

// ! for in
// for (const key in obj) {
//   console.log(key, obj[key])
// }
