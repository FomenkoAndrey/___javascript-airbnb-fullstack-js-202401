/* eslint-disable prefer-object-spread */
/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

var target = { a: 1, b: 2 }
var source = { b: 4, c: 5 }

Object.assign(target, source)

console.log(target) // Очікуваний вивід: Object { a: 1, b: 4, c: 5 }

var result = Object.assign({}, source)
console.log(result) // новий об'єкт

result.b = 100
console.log(result)
console.log(source)
