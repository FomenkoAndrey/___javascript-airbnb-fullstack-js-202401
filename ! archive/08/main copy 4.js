const paragraphs = document.getElementsByTagName('div')
console.log(paragraphs)

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.background = 'yellow'
}
