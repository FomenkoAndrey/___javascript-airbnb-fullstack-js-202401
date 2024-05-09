// * CRUD:

// ! Create => POST
// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })

//   if (!response.ok) {
//     throw new Error('Error fetching data')
//   }

//   return response.json()
// }

// postData('https://jsonplaceholder.typicode.com/posts', {
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
//   description: 'This is a test',
// })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// ! Read => GET
// async function getData(url) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   if (!response.ok) {
//     throw new Error('Error fetching data')
//   }

//   return response.json()
// }

// getData('https://jsonplaceholder.typicode.com/posts')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// ! Update => PUT / PATCH
// ? PUT
// async function putData(url, data) {
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })

//   if (!response.ok) {
//     throw new Error('Error fetching data')
//   }

//   return response.json()
// }

// ? PATCH
// putData('https://jsonplaceholder.typicode.com/posts/2', {
//   title: 'foo',
// })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// async function patchData(url, data) {
//   const response = await fetch(url, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })

//   if (!response.ok) {
//     throw new Error('Error fetching data')
//   }

//   return response.json()
// }

// patchData('https://jsonplaceholder.typicode.com/posts/2', {
//   title: 'foo',
//   description: 'some description',
//   body: 'bar',
// })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// ! Delete => DELETE
// async function deleteData(url) {
//   const response = await fetch(url, {
//     method: 'DELETE',
//   })

//   if (!response.ok) {
//     throw new Error('Error fetching data')
//   }

//   return response.ok
// }

// deleteData('https://jsonplaceholder.typicode.com/posts/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
