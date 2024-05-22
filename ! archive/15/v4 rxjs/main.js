/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
const { fromEvent, from, of } = rxjs
const {
  map, filter, debounceTime, distinctUntilChanged, tap, switchMap, catchError,
} = rxjs.operators

const moviesListElement = document.querySelector('#movies-list')
const searchInput = document.querySelector('#search')
const searchCheckbox = document.querySelector('#checkbox')

const fetchData = url => fetch(url)
  .then(res => res.json())
  .then(data => {
    if (!data || !data.Search) throw new Error('Сервер повернув некоректні дані!')
    return data.Search
  })

const getMovies = searchQuery => from(fetchData(`https://www.omdbapi.com/?apikey=18b8609f&s=${searchQuery}`)).pipe(
  catchError(err => {
    console.error('Помилка при завантаженні фільмів:', err.message)
    return of([])
  }),
)

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

const searchMoviesStream$ = fromEvent(searchInput, 'input')
  .pipe(
    map(e => e.target.value.trim()),
    filter(value => value.length > 3),
    debounceTime(2000),
    distinctUntilChanged(),
    tap(() => !searchCheckbox.checked && (moviesListElement.innerHTML = '')),
    switchMap(searchQuery => getMovies(searchQuery)),
    tap(movies => movies.forEach(addMovieToList)),
  )

searchMoviesStream$.subscribe()
