import { headStyle } from './utils.js'

let moviesListElement = null

const createElement = ({
  tag = 'div',
  attrs = {},
  container = null,
  position = 'append',
  event = null,
  handler = null,
}) => {
  const el = document.createElement(tag)

  Object.entries(attrs).forEach(([ key, value ]) => {
    if (key === 'innerHTML') el.innerHTML = value
    else el.setAttribute(key, value)
  })

  if (position === 'append') container?.append(el)
  if (position === 'prepend') container?.prepend(el)

  if (event && handler && typeof handler === 'function') el.addEventListener(event, handler)

  return el
}

const createStyle = () => {
  createElement({
    tag: 'style',
    attrs: { innerHTML: headStyle },
    container: document.head,
  })
}

const createMarkup = () => {
  // ! div.container
  const container = createElement({
    attrs: { class: 'container' },
    container: document.body,
  })
  // ! h1
  createElement({
    tag: 'h1',
    attrs: { innerHTML: 'Застосунок пошуку фільмів' },
    container,
  })
  // ! div.search
  const search = createElement({
    attrs: { class: 'search' },
    container,
  })
  // ! div.search__group.search__group--input
  const inputBox = createElement({
    attrs: { class: 'search__group search__group--input' },
    container: search,
  })
  // ! div.search__group.search__group--checkbox
  const checkBox = createElement({
    attrs: { class: 'search__group search__group--checkbox' },
    container: search,
  })
  // ! label.search__label-input
  createElement({
    tag: 'label',
    attrs: { innerHTML: 'Пошук фільмів', class: 'search__label-input', for: 'search' },
    container: inputBox,
  })
  // ! input.search__input
  createElement({
    tag: 'input',
    attrs: {
      id: 'search',
      type: 'search',
      placeholder: 'Почніть вводити назву фільму...',
      class: 'search__input',
    },
    container: inputBox,
  })
  // ! input.search__checkbox
  createElement({
    tag: 'input',
    attrs: { id: 'checkbox', type: 'checkbox', class: 'search__checkbox' },
    container: checkBox,
  })
  // ! label.search__label-checbox
  createElement({
    tag: 'label',
    attrs: { innerHTML: 'Додавати фільми до вже існуючого переліку', class: 'search__label-checbox', for: 'checkbox' },
    container: checkBox,
  })
  // ! div.movies
  moviesListElement = createElement({
    attrs: { class: 'movies', id: 'movies-list' },
    container,
  })
}

export const addMovieToList = movie => {
  // ! div.movie
  const item = createElement({
    attrs: { class: 'movie' },
    container: moviesListElement,
    position: 'prepend',
  })
  // ! img.movie__image
  createElement({
    tag: 'img',
    attrs: {
      class: 'movie__image',
      src: /^(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'img/no-image.png',
      alt: `${movie.Title} ${movie.Year}`,
      title: `${movie.Title} ${movie.Year}`,
    },
    container: item,
  })
}

export const clearMoviesMarkup = () => {
  if (moviesListElement) moviesListElement.innerHTML = ''
}

export const renderApp = () => {
  createStyle()
  createMarkup()
}
