import {
  renderApp, clearMoviesMarkup, addMovieToList,
} from './dom.js'

let searchInput = null
let searchCheckbox = null
let lastSearchQuery = null

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

const inputSearchHandler = e => {
  debounceTime(() => {
    const searchQuery = e.target.value.trim()

    if (!searchQuery || searchQuery.length < 4 || searchQuery === lastSearchQuery) return
    if (!searchCheckbox.checked) clearMoviesMarkup()

    getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${searchQuery}`)
      .then(movies => movies.forEach(addMovieToList))
      .catch(err => console.error(err))

    lastSearchQuery = searchQuery
  }, 1000)
}

export const appInit = () => {
  renderApp()
  searchInput = document.querySelector('#search')
  searchCheckbox = document.querySelector('#checkbox')
  searchInput.addEventListener('input', inputSearchHandler)
}
