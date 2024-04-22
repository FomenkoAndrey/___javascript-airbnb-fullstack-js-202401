const slides = document.querySelectorAll('.slide')

let currentSlide = 0

function nextSlide() {
  slides[currentSlide].className = 'slide'
  currentSlide += 1
  slides[currentSlide].className = 'slide active'
}

setInterval(nextSlide, 2000)
