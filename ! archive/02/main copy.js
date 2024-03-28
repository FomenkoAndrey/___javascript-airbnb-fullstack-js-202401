/* eslint-disable vars-on-top */
/* eslint-disable no-var */
var surname = ''
var defaultName = 'Johnovich'

// || - 0, '', null, undefined, NaN, false
// ?? - "Nullish Coalescing" - Оператор об'еднання з null та undefined
var result = surname ?? defaultName

console.log(`ANDRII ${result} Fomenko`) // Выведет: "Johnovich"

var age = 0
var defaultAge = 18

// ?? - "Nullish Coalescing" - Оператор об'еднання з null та undefined
var result2 = age ?? defaultAge

console.log(result2) // Выведет: 0
