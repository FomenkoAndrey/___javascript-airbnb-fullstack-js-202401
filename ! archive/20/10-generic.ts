function getData<T>(data: T): any {
  return data
}

const newGetData: <T>(d: T) => T = getData

// Auto type for T
newGetData(123).toFixed()
newGetData('str').toLowerCase()
newGetData(true).valueOf()
newGetData([true]).length

// Manual type for T
newGetData<number>(123).toFixed()
newGetData<string>('str').toLowerCase()

// ------------------------------------------------

class Multiply<T extends number | string> {
  constructor(
    private a: T,
    private b: T
  ) {}

  getReult(): number {
    return +this.a * +this.b
  }
}

const mulNum = new Multiply(2, 3)
console.log(mulNum.getReult())

const mulStr = new Multiply('2', '3')
console.log(mulStr.getReult())

const mulNum2 = new Multiply(+true, +true) // number, 1 * 1 = 1
console.log(mulNum2.getReult())

// new Multiply([true], [true]) // Error
