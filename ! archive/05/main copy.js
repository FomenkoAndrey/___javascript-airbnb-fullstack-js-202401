const safeDivision = function (numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('Division by zero is not allowed')
    }
    return numerator / denominator
  } catch (error) {
    return error.message
  } finally {
    console.log('Attempted division operation completed')
  }
}

console.log(safeDivision(10, 0)) // Виведе помилку "Division by zero is not allowed"
console.log(safeDivision(10, 2)) // Виведе результат ділення: 5
