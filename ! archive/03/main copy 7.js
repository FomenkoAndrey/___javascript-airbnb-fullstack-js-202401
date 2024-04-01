/* eslint-disable prefer-arrow-callback */
/* eslint-disable block-scoped-var */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-redeclare */
/* eslint-disable no-shadow */
/* eslint-disable prefer-object-spread */
/* eslint-disable no-new-object */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars

// ! withot callbacks
// function first() {
//   setTimeout(function () {
//     console.log('first request')
//   }, 5000)
// }

// function second() {
//   setTimeout(function () {
//     console.log('second request')
//   }, 2000)
// }

// first()
// second()

// ! with callbacks
function getUserData(callback) {
  console.log('Робимо запит на сервер')

  setTimeout(function () {
    var userData = {
      name: 'John',
      age: 25,
      id: 1,
    }
    console.log('Отримані дані з сервера')
    callback(userData)
  }, 3000)
}

function displayUserData(data) {
  setTimeout(function () {
    console.log('Дані користувача: ', data)
  }, 2000)
}

getUserData(displayUserData)
