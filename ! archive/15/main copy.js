const getData = url => fetch(url)
  .then(res => res.json())
  .then(data => data.Search)

const batman = getData('http://www.omdbapi.com/?apikey=18b8609f&s=batman')
const ironman = getData('http://www.omdbapi.com/?apikey=18b8609f&s=iron man')
const superman = getData('http://www.omdbapi.com/?apikey=18b8609f&s=superman')

// batman.then(console.log)
// ironman.then(console.log)
// superman.then(console.log)

// Promise.all([ batman, ironman, superman ]).then(moviesArrays => {
//   moviesArrays.forEach(movies => {
//     movies.forEach(movie => {
//       console.log(movie)
//     })
//   })
// })

Promise.race([ batman, ironman, superman ]).then(movies => {
  console.log(movies)
})
