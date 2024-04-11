/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class Test {
  static staticTest = 'static test'

  #privateTest = 'private test'

  constructor() {
    this.test = 'test'
  }
}

// const test = new Test()

console.log(Test.staticTest)
