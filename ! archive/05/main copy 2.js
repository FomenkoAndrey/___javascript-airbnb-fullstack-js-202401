const myError = new Error('My custom error happened')

function func() {
  try {
    if (Math.random() > 0.5) throw myError
    console.log('Block "try" works')
    return 'Block "try" return something' // Після цього виконання функції завершується, але перед цим спрацьовує finally
  } catch (err) {
    console.log('Block CATCH:', err.message) // Спрацьовує при помилці
    // return з catch також можливий
  } finally {
    console.log('Block "finally" works') // Спрацює завжди, перед виходом з функції
  }

  console.log('Block at the end of the function') // Виконується, якщо не було return в try або catch

  return 'Error happened' // Цей рядок досягається, якщо не було return в try або catch
}

console.log(func())
