/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

var obj = {
  name: 'John Doe',
  age: 30,
}

obj.sex = 'male'
obj.skills = [ 'JS', 'React', 'Node' ]

console.log('🚀 ~ obj.name:', obj.name)
console.log('🚀 ~ obj.age:', obj.age)
console.log(obj.sex)
console.log(obj.skills)

// динамічіні властивості
obj.sex = 'male'
obj.skills = [ 'JS', 'React', 'Node' ]
obj.aodhfahlghadlkghaldghldkgh = 'key'

console.log(obj.sex)
console.log(obj.skills)

console.log('-------- Динаічні властивості: ')
for (var key in obj) {
  var element = obj[key]
  // console.log('🚀 ~ element:', element)
  console.log(`${key}: ${element}`)
}
