const someString = 'Non-empty string'
const emptyString = ''
let newString1
let newString2

// newString1 = someString || 'Default string';
if (someString.length > 0) {
  newString1 = someString
} else {
  newString1 = 'Default string'
}
// newString2 = emptyString || 'Default string';
if (emptyString.length > 0) {
  newString2 = emptyString
} else {
  newString2 = 'Default string'
}

console.log(newString1)
console.log(newString2)
