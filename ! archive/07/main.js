console.time('TEST')

const arr = []

for (let i = 0; i < 10000; i++) arr[i] = 0

function walkForIn(arr) {
  for (const key in arr) arr[key]++
}

function walkFor(arr) {
  for (let i = 0; i < arr.length; i++) arr[i]++
}

function bench(f) {
  const date = new Date()
  for (let i = 0; i < 1000; i++) f(arr)
  return new Date() - date
}

const resForIn = bench(walkForIn)
const resFor = bench(walkFor)

console.log(`Время walkForIn ${resForIn} мс`)
console.log(`Время walkFor: ${resFor} мс`)

console.log(`for..in медленее for в ${Math.round(resForIn / resFor)} раз`)

console.timeEnd('TEST')
