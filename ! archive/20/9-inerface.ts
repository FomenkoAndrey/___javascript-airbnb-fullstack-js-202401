interface LengthInterface {
  length: number
}

function getLength(data: LengthInterface) {
  return data.length
}

const obj = { key: 'value', length: 10 }
const obj2 = { key: 'value', value: 10, length: 20 }

console.log(getLength('string'))
console.log(getLength([1, 2, 3, 4, 5]))
console.log(getLength(obj))
console.log(getLength(obj2))

// --------------------------------------------

// type Person = {
//   name: string
//   age: number
//   sex: string
//   greet: () => void
//   print?: () => void
// }

interface PersonInterface {
  name: string
  age: number
  sex: string
  greet: () => void
  print?: () => void
}

interface GetSkillsInterface {
  skills: string[]
  getSkills: () => string[]
}

const person: PersonInterface = {
  name: 'John',
  age: 25,
  sex: 'male',
  greet: function () {
    console.log('Hello')
  }
}

class Person implements PersonInterface, GetSkillsInterface {
  name: string = 'John'
  age: number = 25
  sex: string = 'male'
  skills: string[] = ['JS', 'TS', 'React']

  getSkills(): string[] {
    return this.skills
  }

  greet: () => void = function () {
    console.log('Hello')
  }
}

const anotherPerson: Person = new Person()

// --------------------------------------------

interface ShapeInterface {
  name: string
  printAreaMsg: () => string
}

class Rectangle implements ShapeInterface {
  name: string = 'Rectangle'

  constructor(
    private width: number,
    private height: number
  ) {}

  printAreaMsg(): string {
    const area = this.width * this.height
    return `Area of ${this.name} is ${area}`
  }
}

class Circle implements ShapeInterface {
  name: string = 'Circle'

  constructor(private radius: number) {}

  printAreaMsg(): string {
    const area = Math.PI * this.radius ** 2
    return `Area of ${this.name} is ${area.toFixed(2)}`
  }
}

const rectangle = new Rectangle(10, 20)
const circle = new Circle(10)

console.log(rectangle.printAreaMsg())
console.log(circle.printAreaMsg())

// const shapes: ShapeInterface[] = []
// shapes.push(rectangle)
// shapes.push(circle)
// shapes.push(123) // Error
// shapes.push({}) // Error
const shapes: ShapeInterface[] = [rectangle, circle]

shapes.forEach((shape: ShapeInterface) => {
  console.log(shape.printAreaMsg())
})
