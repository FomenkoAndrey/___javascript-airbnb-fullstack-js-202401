const personJs = {
  name: 'John',
  age: 30,
  sex: 'male',
  skills: ['JavaScript', 'TypeScript', 'React'],
  print() {
    console.log(`${this.name} is ${this.age} years old`)
  }
}

type Person = {
  name: string
  sex: string
  skills: string[]
  age?: number
  print?: () => void
}

const personTs: Person = {
  name: 'John',
  // age: 30,
  sex: 'male',
  skills: ['JavaScript', 'TypeScript', 'React']
  // print() {
  //   console.log(`${this.name} is ${this.age} years old`)
  // }
}

type Developer = {
  level: string
  experience: number
}

const developer: Person & Developer = {
  name: 'John',
  age: 30,
  sex: 'male',
  skills: ['JavaScript', 'TypeScript', 'React'],
  level: 'Junior',
  experience: 1
}

type Advanced = Person & Developer

const developer2: Advanced = {
  name: 'John',
  age: 30,
  sex: 'male',
  skills: ['JavaScript', 'TypeScript', 'React'],
  level: 'Trainee',
  experience: 0
}

const developer3: Partial<Advanced> = {
  name: 'Bob',
  // age: 40,
  // sex: 'male',
  // skills: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Vue', 'Node'],
  level: 'Senior',
  experience: 10
}

const developer4: Required<Advanced> = {
  name: 'John',
  age: 30,
  sex: 'male',
  skills: ['JavaScript', 'TypeScript', 'React'],
  level: 'Trainee',
  experience: 0,
  print() {
    console.log(`${this.name} is ${this.age} years old`)
  }
}
