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

var i = 5 // global scope
console.log(i) // * 5
var func = function () {
  i = 10 // ! global 5 => 10
  console.log(i) // * 10
  var innerFunc = function () {
    i = 15 // ! global 10 => 15
    console.log(i) // * global 15
  }
  innerFunc()
  console.log(i) // * global 15
}
func()
console.log(i) // * global 15
