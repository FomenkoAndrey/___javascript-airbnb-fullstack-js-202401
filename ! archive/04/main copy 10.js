/* eslint-disable no-loop-func */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */

function makeArmy() {
  const shooters = []

  for (let i = 0; i < 10; i++) {
    const shooter = function () { // функция-стрелок
      console.log(i) // выводит свой номер
    }
    shooters.push(shooter)
    console.log(shooters) // продемонстрирует, как массив заполняется функциями, необходимо для понимания
  }

  return shooters
}

var army = makeArmy()

army[0]() // 1
army[5]() // 5
army[7]() // 7
