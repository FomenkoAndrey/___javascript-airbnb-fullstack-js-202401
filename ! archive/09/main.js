const list = document.querySelectorAll('#myList li')
let pointer = null

const handleListItemClick = function () {
  console.log('🚀 ~ item:', this.innerText)
  this.style.color = 'red'
  this.style.fontWeight = 'bold'
  if (pointer !== null) {
    pointer.style.color = ''
    pointer.style.fontWeight = ''
  }
  pointer = this
}

list.forEach(item => {
  console.log(item)
  item.addEventListener('click', handleListItemClick)
})
