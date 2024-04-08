/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-exponentiation-operator */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */

// for (var i = 0; i < 10; i++) {
//   setTimeout((function (index) {
//     console.log(index)
//   }).bind(null, i), i * 100)
// }
// console.log('🚀 ~ i:', i)

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, i * 100)
// }

const pow = Math.pow.bind(null)
console.log(pow(2, 3))
console.log(pow(3, 4))
