let strJs = 'Hello, TypeScript!'
let strTs: string = 'Hello, TypeScript!'

let numJs = 123
let numTs: number = 123

let boolJs = true
let boolTs: boolean = true

let anyType: any
anyType = 'Hello, TypeScript!'
anyType = 123
anyType = true
anyType = [1, 2, 3]
anyType = { name: 'TypeScript' }

let strNumType: string | number
strNumType = 'Hello, TypeScript!'
strNumType = 123
// strNumType = true // Error

let strNumBoolType: string | number | boolean = true
strNumBoolType = 'Hello, TypeScript!'
strNumBoolType = 123
strNumBoolType = true
// strNumBoolType = [1, 2, 3] // Error
