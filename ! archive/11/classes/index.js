import SwipeCarousel from './swipe.js'

const carousel = new SwipeCarousel({
  containerId: '#carousel123',
  // slideId: '.item',
  interval: 2000,
  isPlaying: false,
})

carousel.init()
