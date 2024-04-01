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

// ! withot callbacks
// function first() {
//   setTimeout(function () {
//     console.log('first request')
//   }, 5000)
// }

// function second() {
//   setTimeout(function () {
//     console.log('second request')
//   }, 2000)
// }

// first()
// second()

// ! with callbacks
function first(callback) {
  setTimeout(function () {
    console.log('first request')
    callback()
  }, 7000)
}

function second() {
  setTimeout(function () {
    console.log('second request')
  }, 5000)
}

first(second)
