/* eslint-disable prefer-arrow-callback */
/* eslint-disable block-scoped-var */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-redeclare */
/* eslint-disable no-shadow */
/* eslint-disable prefer-object-spread */
/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

function curryAdd(a) {
  return function (b) {
    return a + b
  }
}

console.log(curryAdd(1)(2)) // 3

var addFive = curryAdd(5)
console.log(addFive(20))
console.log(addFive(10))
console.log(addFive(5))
