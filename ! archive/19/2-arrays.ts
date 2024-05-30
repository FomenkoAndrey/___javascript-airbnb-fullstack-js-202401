const strArrJs = ['a', 'b', 'c']
const strArrTs: string[] = ['a', 'b', 'c']
const strArrTs2: Array<string> = ['a', 'b', 'c']

const numArrJs = [1, 2, 3]
const numArrTs: number[] = [1, 2, 3]
const numArrTs2: Array<number> = [1, 2, 3]

const boolArrJs = [true, false]
const boolArrTs: boolean[] = [true, false]
const boolArrTs2: Array<boolean> = [true, false]

const someTypesArrJs = [1, 'a', true]
const someTypesArrTs: (number | string | boolean)[] = [1, 'a', true]
const someTypesArrTs2: Array<number | string | boolean> = [1, 'a', true]

// tuples
const tuplesArr: [number, number, string] = [1, 2, 'a']
const tuplesArr2: [string, number, boolean] = ['a', 1, true]

// arrays of any data type
const anyArr: any[] = [1, 'a', true]
