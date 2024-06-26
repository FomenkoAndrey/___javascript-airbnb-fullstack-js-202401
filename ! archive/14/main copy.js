// const getData = url => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest()
//   xhr.open('GET', url)
//   xhr.send()
//   xhr.onload = () => {
//     if (xhr.status !== 200) {
//       reject(xhr.status)
//       return
//     }
//     const json = JSON.parse(xhr.response)
//     resolve(json.Search)
//   }
//   xhr.onerror = err => {
//     reject(err)
//   }
// })

const getData = url => fetch(url)
  .then(res => res.json())
  .then(data => data.Search)

getData('http://www.omdbapi.com/?apikey=18b8609f&s=batman')
  .then(console.log)
  .catch(console.log)
