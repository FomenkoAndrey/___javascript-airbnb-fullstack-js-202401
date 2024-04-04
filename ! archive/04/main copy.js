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

const apply = (x, fn) => fn(x)
const double = x => x * 2

const result1 = apply(3, double)
console.log('🚀 ~ result1:', result1)

const result2 = apply(5, x => x + 2)
console.log('🚀 ~ result2:', result2)

console.log('------------')

function greet(name) {
  return `Hello, ${name}`
}

function shout(text) {
  return `${text.toUpperCase()}!`
}

function applyFunction(shout, param) {
  return shout(param)
}

console.log(applyFunction(greet, 'World')) // ! Hello, World
console.log(applyFunction(shout, 'hello')) // ! HELLO!
