//   <input type="text" name="user-input" value="Перший введений текст">
//   <input type="text" name="user-input" value="Другий введений текст"></input>

// Отримання всіх елементів з ім'ям 'user-input'
const inputs = document.getElementsByName('user-input')

// Виведення значень цих елементів
for (let i = 0; i < inputs.length; i++) {
  console.log(inputs[i].value)
}
