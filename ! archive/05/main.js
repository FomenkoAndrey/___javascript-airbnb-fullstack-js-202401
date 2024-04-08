try {
  throw new Error('Помилка')
} catch (err) {
  console.log(err)
  console.log(err.message)
  console.log('Помилка відловлена')
} finally {
  console.log('Цей код виконається завжди')
}

console.log('Цей код виконається?')
