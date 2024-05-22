/* eslint-disable no-return-assign */
const moviesListElement = document.querySelector('#movies-list')
const searchInput = document.querySelector('#search')
const searchCheckbox = document.querySelector('#checkbox')

let lastSearchQuery = null
let isSearchTriggerEnabled = false

const debounceTime = (() => {
  let timer = null
  return (cb, ms) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(cb, ms)
  }
})()

const getData = url => fetch(url)
  .then(res => res.json())
  .then(data => {
    if (!data || !data.Search) throw new Error('Сервер повернув некоректні дані!')
    return data.Search
  })

const addMovieToList = movie => {
  const item = document.createElement('div')
  const img = document.createElement('img')

  item.classList.add('movie')

  img.classList.add('movie__image')
  img.src = /^(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'img/no-image.png'
  img.alt = `${movie.Title} ${movie.Year}`
  img.title = `${movie.Title} ${movie.Year}`

  item.append(img)
  moviesListElement.prepend(item)
}

const clearMoviesMarkup = () => {
  if (moviesListElement) moviesListElement.innerHTML = ''
}

const inputSearchHandler = e => {
  debounceTime(() => {
    const searchQuery = e.target.value.trim()

    if (!searchQuery || searchQuery.length < 4 || searchQuery === lastSearchQuery) return
    if (!isSearchTriggerEnabled) clearMoviesMarkup()

    getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${searchQuery}`)
      .then(movies => movies.forEach(addMovieToList))
      .catch(err => console.error(err))

    lastSearchQuery = searchQuery
  }, 1000)
}

searchInput.addEventListener('input', inputSearchHandler)
searchCheckbox.addEventListener('change', e => (isSearchTriggerEnabled = e.target.checked))
