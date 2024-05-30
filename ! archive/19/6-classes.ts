class Person {
  static readonly start: number = 0
  static readonly end: number = 122

  constructor(
    public name: string,
    private age: number,
    protected sex: string,
    public skills: string[]
  ) {}

  public getAge(): number {
    return this.age
  }
}

const person = new Person('John', 30, 'male', ['JavaScript', 'TypeScript'])

console.log(person.getAge())

// Person.start = 123 // Cannot assign to 'start' because it is a read-only property.

console.log(Person.start)
