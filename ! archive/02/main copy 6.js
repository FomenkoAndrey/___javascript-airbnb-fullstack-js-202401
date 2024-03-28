/* eslint-disable prefer-object-spread */
/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

// var obj = { a: 1, b: { c: 2, e: { g: 123 } } }
// console.log(obj)
// var strAsObject = JSON.stringify(obj)
// console.log(strAsObject)
// var newObj = JSON.parse(strAsObject)
// console.log(newObj)
// obj.a = 123
// newObj.a = 999
// console.log(obj)
// console.log(newObj)

var obj = { a: 1, b: { c: 2 } }

var deepCopy = JSON.parse(JSON.stringify(obj))

console.log(deepCopy) // Очікуваний вивід: { a: 1, b: { c: 2 } }

deepCopy.b.c = 3

console.log(obj.b.c) // Очікуваний вивід: 2
