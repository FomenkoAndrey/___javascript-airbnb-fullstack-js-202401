/* eslint-disable no-shadow */
/* eslint-disable prefer-object-spread */
/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

// ! function declaration
// function sum(a, b) {
//   var sum = a + b
//   return sum
// }

// ! function expression
var sum = function (a, b) {
  var sum = a + b
  return sum
}

console.log(sum(1, 2))
