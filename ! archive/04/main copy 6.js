/* eslint-disable no-var */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */

// function createCounter() {
//   var count = 0
//   console.log('createCounter done')
//   return function () {
//     count += 1
//     return count
//   }
// }

// console.log(createCounter()())
// console.log(createCounter()())
// console.log(createCounter()())

// ! object
// var counter = function (num) {
//   if (num !== undefined) {
//     counter.count = num
//   }
//   return ++counter.count
// }

// counter.count = 0

// ! closure
var counter = (function () {
  var count = 0
  return function (num) {
    if (num !== undefined) {
      count = num
    }
    return ++count
  }
}())

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(100))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(9990))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(0))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
