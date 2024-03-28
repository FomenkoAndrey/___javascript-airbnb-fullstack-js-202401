/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

// var a = 10
// var b = 20

// a = b

// console.log('🚀 ~ a:', a) // 20
// console.log('🚀 ~ b:', b) // 20

// a = 50

// console.log('🚀 ~ a:', a) // 50
// console.log('🚀 ~ b:', b) // 20

// b = 90

// console.log('🚀 ~ a:', a) // 50
// console.log('🚀 ~ b:', b) // 90

var a = { x: 10 }
var b = { x: 20 }

console.log('🚀 ~ a.x:', a.x) // 10
console.log('🚀 ~ b.x:', b.x) // 20

a = b

console.log('🚀 ~ a.x:', a.x) // 20
console.log('🚀 ~ b.x:', b.x) // 20

a.x = 50

console.log('🚀 ~ a.x:', a.x) // * 50
console.log('🚀 ~ b.x:', b.x) // ! 20 => 50

b.x = 90

console.log('🚀 ~ a.x:', a.x) // ! 50 => 90
console.log('🚀 ~ b.x:', b.x) // * 90
