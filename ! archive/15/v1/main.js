const moviesListElement = document.querySelector('#movies-list')
const searchInput = document.querySelector('#search')

const getData = url => fetch(url)
  .then(res => res.json())
  .then(data => data.Search)

const addMovieToList = movie => {
  const item = document.createElement('div')
  const img = document.createElement('img')

  item.classList.add('movie')

  img.classList.add('movie__image')
  img.src = movie.Poster
  img.alt = `${movie.Title} ${movie.Year}`
  img.title = `${movie.Title} ${movie.Year}`

  item.append(img)
  moviesListElement.append(item)
}

const inputSearchHandler = e => {
  const searchQuery = e.target.value.trim()

  moviesListElement.innerHTML = ''

  getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${searchQuery}`)
    .then(movies => movies.forEach(addMovieToList))
    .catch(err => console.error(err))
}

searchInput.addEventListener('input', inputSearchHandler)
