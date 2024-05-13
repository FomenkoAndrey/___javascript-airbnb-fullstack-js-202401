function* numberGenerator() {
  yield 1
  yield 2
  yield 3
}
const gen = numberGenerator() // Ініціалізація генератора
console.log(gen.next().value) // Виведе: 1
console.log(gen.next().value) // Виведе: 2
console.log(gen.next().value) // Виведе: 3
