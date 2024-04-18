const elements = document.getElementsByClassName('example')
console.log('🚀 ~ elements:', elements)
console.log('🚀 ~ elements[0]:', elements[0])
console.log('🚀 ~ elements[1]:', elements[1])

// Зміна кольору тексту всіх елементів
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'blue'
}
