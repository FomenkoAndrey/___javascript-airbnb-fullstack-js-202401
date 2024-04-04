/* eslint-disable no-else-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-loop-func */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */

//  ! for
// function pow(x, n) {
//   let res = x
//   for (let i = 1; i < n; i++) {
//     res *= x
//   }
//   return res
// }
// console.log(pow(2, 3))

// ! recursion
function pow(x, n) {
  if (n !== 1) {
    return (x *= pow(x, n - 1))
  } else {
    return x
  }
}
console.log(pow(2, 3)) // 8
