const PI = 3.14
const EXP = 2.71
const isEmpty = ''

console.log(PI)

// code

namespace Util {
  export const PI = Math.PI
  export const EXP = Math.E
  export const isEmpty = (value: any) => value === undefined || value === null || value === ''
}

console.log(Util.PI)
console.log(Util.EXP)
