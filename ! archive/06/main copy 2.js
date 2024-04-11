const fruits = new Set([ 'apple', 'banana', 'orange' ])
// ! Ітерація за допомогою for...of
// for (const fruit of fruits) {
//   console.log(fruit)
// }

// ! Ітерація за допомогою forEach
fruits.forEach(fruit => console.log(fruit))
// fruits.forEach((value, valueAgain, set) => console.log(value, valueAgain, set))

// ! Використання методу keys()
// for (const key of fruits.keys()) {
//   console.log(key)
// }

// ! Використання методу values()
// for (const value of fruits.values()) {
//   console.log(value)
// }

// ! Використання методу entries()
// for (const entry of fruits.entries()) {
//   console.log(entry)
// }
