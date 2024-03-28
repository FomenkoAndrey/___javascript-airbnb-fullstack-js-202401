/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

const obj = { prop: 42 }

Object.freeze(obj)

obj.prop = 33 // Очікуваний вивід: TypeError (в режимі суворої строгості)

console.log(obj.prop) // Очікуваний вивід: 42
