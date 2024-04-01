/* eslint-disable prefer-object-spread */
/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

var i = 100
while (i < 10) {
  console.log(i)
  i++
} // 0 iterations

console.log('-------------------')
var i = 100
do {
  console.log(i++)
} while (i < 10)
// 1 iteration
