abstract class Phone {
  public year: number = 2024

  public abstract price: number

  constructor(public model: string) {}

  public getPhoneYear(): number {
    return this.year
  }

  public abstract phoneMessage(msg: string): string
}

class Xiomi extends Phone {
  public price: number = 200

  public phoneMessage(msg: string): string {
    return `${this.model} is the ${msg}`
  }
}

class Samsung extends Phone {
  public price: number = 300

  public phoneMessage(msg: string): string {
    return `${this.model} not too ${msg}`
  }
}

const xiomi = new Xiomi('Redmi Note 10')
const samsung = new Samsung('Galaxy S21')

console.log(xiomi.year)
console.log(xiomi.phoneMessage('best'))

console.log(samsung.year)
console.log(samsung.phoneMessage('good'))
