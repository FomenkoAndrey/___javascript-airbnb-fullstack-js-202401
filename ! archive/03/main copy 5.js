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

// ! traditional way, es5
// var sum = function () {
//   var sum = 0
//   for (var i = 0; i < arguments.length; i++) {
//     console.log('it.', arguments[i])
//     var sum = sum + arguments[i]
//   }
//   return sum
// }

// ! es6 way
const sum = (...a) => a.reduce((p, c) => p + c, 0)

console.log(sum(1, 2, 3, 4, 5, 7, 8, 9, 10))
// 0+1=1
//   1+2=3
//     3+3=6
//       6+4=10
//         10+5=15
//           15+7=22
//             22+8=30
//               30+9=39
//                 39+10=49
