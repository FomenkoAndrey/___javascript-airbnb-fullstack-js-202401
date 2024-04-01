/* eslint-disable prefer-object-spread */
/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

var age = 20
var msg = ''

// msg = age <= 18 ? 'You are a child' : age <= 45 ? 'You are an adult' : 'You are old'

msg = age <= 18
  ? 'You are a child'
  : age <= 45
    ? 'You are an adult'
    : 'You are old'

console.log(msg)

// if (age <= 18) {
//   msg = 'You are a child'
// } else if (age <= 45) {
//   msg = 'You are an adult'
// } else {
//   msg = 'You are old'
// }
// console.log(msg)
