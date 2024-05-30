class Person {
  constructor(
    public name: string,
    protected age: number,
    protected sex: string
  ) {}

  public getAge(): string {
    return `${this.age}`
  }
}

const person = new Person('John', 30, 'male')

console.log(person)
console.log(person.getAge())

class Developer extends Person {
  constructor(
    name: string,
    age: number,
    sex: string,
    public skills: string[]
  ) {
    super(name, age, sex)
  }

  public getAge(): string {
    return `${this.name}'s age is ${this.age}`
  }
}

const developer = new Developer('John', 30, 'male', ['JavaScript', 'TypeScript'])

console.log(developer)
console.log(developer.getAge())
