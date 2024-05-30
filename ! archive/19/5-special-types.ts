const arr = ['html', 'css', 'js', 'react', 'node', 'express', 'mongodb', 'angular', 'vue']

enum Skills {
  HTML,
  CSS,
  JS,
  REACT,
  NODE,
  EXPRESS,
  MONGODB,
  ANGULAR,
  VUE
}

console.log(arr[Skills.HTML])
console.log(arr[Skills.CSS])
console.log(arr[Skills.JS])
console.log(arr[Skills.REACT])
console.log(arr[Skills.NODE])

// console.log(Skills.HTML)
// console.log(Skills.CSS)
// console.log(Skills.JS)
// console.log(Skills.REACT)
// console.log(Skills.NODE)

// ------------------------------

function error(message: string): never {
  throw new Error(message)
}

function fail(): never {
  error('This is an error message')
}

function infiniteLoop(): never {
  while (true) {}
}

// ------------------------------

function print(value: number | string): void {
  console.log(value)
}

// ------------------------------

let num: number | null | undefined
num = 10
num = 123
num = null
num = undefined
// num = 'hello' // Error
// num = true // Error

// ------------------------------

function getValue(): unknown {
  return 'Hello World'
}

const result: unknown = getValue()

if (typeof result === 'string') {
  console.log(result.toUpperCase())
} else if (typeof result === 'number') {
  console.log(result.toFixed(2))
} else {
  console.log('Unknown type', result)
}

function processValue(value: unknown) {
  if (typeof value === 'string') {
    console.log(`Отримано рядок: ${value}`)
  } else if (typeof value === 'number') {
    console.log(`Отримано число: ${value}`)
  } else {
    console.log(`Отримано значення невідомого типу: ${value}`)
  }
}

processValue('Hello')
processValue(123)
processValue(true)
