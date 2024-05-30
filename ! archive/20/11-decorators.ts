function consoleLog(constrClass: Function) {
  console.log(constrClass)
}

function conditionLog(flag: boolean = false) {
  return flag ? consoleLog : () => {}
}

// @consoleLog
@conditionLog(true)
class Person {
  constructor(
    public name: string,
    public age: number
  ) {
    console.log('Hello from Person constructor')
  }
}

const person = new Person('John', 30)

// ------------------------------

function AddPrinter(constrClass: Function) {
  constrClass.prototype.printInfo = function () {
    const p = document.createElement('p')
    p.innerHTML = `
      ${JSON.stringify(this)}<br>
      Name: ${this.name}<br>
      Age: ${this.age}<br>
      Sex: ${this.sex}<br>
      SkillS: ${this.skills}
      `
    document.body.append(p)
  }
}

@AddPrinter
class Developer {
  constructor(
    public name: string,
    public age: number,
    public sex: string,
    public skills: string[]
  ) {}
}

const developer: any = new Developer('John', 30, 'male', ['JS', 'TS', 'React'])

developer.printInfo()

console.log('-'.repeat(20))

// ------------------------------

function Override(label: string) {
  // console.log(label)
  return function (target: any, key: string) {
    // console.log(target)
    // console.log(key)
    Object.defineProperty(target, key, {
      configurable: true,
      get: () => label,
      set: (_) => {}
    })
  }
}

function ReadOnly(target: any, key: string) {
  console.log(target)
  // console.log(key)
  Object.defineProperty(target, key, {
    // value: 'Default',
    // writable: false // Можлива помилка при записі
    get: () => 'Default',
    set: (_) => {}
  })
}

class Test {
  // @Override('Hello world')
  @ReadOnly
  name: string = 'Some start text'
}

const test = new Test()

console.log(test.name)
test.name = 'New!!!'
console.log(test.name)
