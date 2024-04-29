import Carousel from './carousel.js'

class SwipeCarousel extends Carousel {
  constructor(...args) { // ... - rest operator
    super(...args) // ... - spread operator
    this.slidesContainer = this.slideItems[0].parentElement
  }

  _initListeners() {
    super._initListeners()
    this.slidesContainer.addEventListener('touchstart', this._swipeStartHandler.bind(this))
    this.slidesContainer.addEventListener('mousedown', this._swipeStartHandler.bind(this))
    this.slidesContainer.addEventListener('touchend', this._swipeEndHandler.bind(this))
    this.slidesContainer.addEventListener('mouseup', this._swipeEndHandler.bind(this))
  }

  _swipeStartHandler(e) {
    this.startPosX = e instanceof MouseEvent
      ? e.pageX // MouseEvent
      : e.changedTouches[0].pageX // TouchEvent
  }

  _swipeEndHandler(e) {
    this.endPosX = e instanceof MouseEvent
      ? e.pageX // MouseEvent
      : e.changedTouches[0].pageX // TouchEvent

    if (this.endPosX - this.startPosX > 100) this.prevHandler()
    if (this.endPosX - this.startPosX < -100) this.nextHandler()
  }
}

export default SwipeCarousel
