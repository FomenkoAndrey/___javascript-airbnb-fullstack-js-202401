function getNameJs() {
  return +'John Doe' // NaN
}
function getAgeJs() {
  return 25 + '' // '25'
}

// --------------------------------------------

function getNameTs(): string {
  return 'John Doe'
}
function getAgeTs(): number {
  return 25
}

// --------------------------------------------

function getName(name: string): string {
  return name
}

console.log(getName('John Doe')) // John Doe
// console.log(getName(12)) // Error

function getAge(age: number): number {
  return age
}

console.log(getAge(25)) // 25
// console.log(getAge('25')) // Error

function getNameAge(name: string, age: number): string {
  return `${name} is ${age} years old`
}

console.log(getNameAge('John Doe', 25)) // John Doe is 25 years old

// --------------------------------------------

function getNameAgeDefault(name: string = 'Guest', age: number = 18): string {
  return `${name} is ${age} years old`
}

console.log(getNameAgeDefault('John Doe', 25))
console.log(getNameAgeDefault('John Doe'))
console.log(getNameAgeDefault())

// --------------------------------------------

function log(str: string): void {
  console.log(str) // return undefined
}

log('Hello')

// --------------------------------------------

// function sum(a: number, b: number): number {
//   return a + b
// }

// const sum = function (a: number, b: number): number {
//   return a + b
// }

// const sum = (a: number, b: number): number => {
//   return a + b
// }

const sum = (a: number, b: number): number => a + b

console.log(sum(2, 3)) // 5

const sum1 = (a: number, b: number): number => a + b
const sum2 = (a: number | string, b: number | string): number => +a + +b
const sum3: (a: number, b: number) => number = sum1
const sum4: (a: number | string, b: number | string) => number = sum2

console.log(sum3(5, 4)) // 9
console.log(sum4('5', '4')) // 9
