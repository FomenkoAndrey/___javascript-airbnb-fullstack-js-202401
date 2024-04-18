const intervalId = setInterval(() => {
  console.log('Інтервал - Регулярне виконання')
}, 1000)

const timeoutId = setTimeout(() => {
  console.log('Таймер DONE - Інтервал знято')
  clearInterval(intervalId) // зупинка регулярного виконання
}, 10000)

// clearTimeout(timeoutId) // скасування виконання
