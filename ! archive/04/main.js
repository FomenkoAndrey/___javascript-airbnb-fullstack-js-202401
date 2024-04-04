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

var fn = (function (arg1) {
  console.log('Hello', arg1)
  return function (arg2) {
    console.log('Inner', arg2)
  }
}('world'))

fn('function')
