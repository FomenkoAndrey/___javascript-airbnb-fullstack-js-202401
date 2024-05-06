// ! Vanilla JS
// const header = document.querySelector('h1')
// header.innerHTML = 'Новый заголовок'
// header.style.color = 'red'

// ! jQuery
// $('h1').html('Новый заголовок').css('color', 'red')

// ! Vanilla JS
// const items = document.querySelectorAll('li')
// for (let index = 0; index < items.length; index++) {
//   const element = items[index]
//   console.log(element)
//   element.innerHTML = 'Новый текст'
//   element.style.color = 'red'
// }

// ! jQuery
// $('li').html('Новый текст').css('color', 'red')

// ! Vanilla JS
// const list = document.querySelector('ul')
// function handler(e) {
//   const { target } = e
//   if (target.nodeName === 'LI') {
//     console.log(target.innerText)
//   }
// }
// list.addEventListener('click', handler)

// ! jQuery
$('ul').on('click', 'li', function () {
  console.log($(this).text())
})
