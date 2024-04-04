/* eslint-disable no-var */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */

function createCounter() {
  var count = 0
  return function (num) {
    if (num !== undefined) {
      count = num
    }
    return ++count
  }
}

var counter = createCounter()

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
