// const getFakeMembers = (count) =>
//   new Promise((resolve, reject) => {
//     const api = `https://api.randomuser.me/?nat=US&results=${count}`;
//     const request = new XMLHttpRequest();
//     request.open('GET', api);
//     request.onload = () =>
//       request.status === 200
//         ? resolve(JSON.parse(request.response).result)
//         : reject(Error(request.statusText));
//     request.onerror = (err) => reject(err);
//     request.send;
//   });

// getFakeMembers(5).then(
//   (members) => console.log(members),
//   (err) => console.error(new Error('cannot load memebers from randomuser.me'))
// );

// let promises = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Whoops")), 1000)
// })

// let promises = new Promise((resolve, reject) => {
//   resolve('done');

//   reject(new Error('...'));
//   setTimeout(() => resolve('...'));
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('done');
//   }, 1000);
// });

// promise.then(
//   (result) => alert(result),
//   (error) => alert(error)
// );

// let promise = new Promise((resolve, reject) => {
//   resolve(1)

//   setTimeout(() => resolve(2), 1000)
// });

// promise.then(alert)

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
delay(3000).then(() => alert("runs after 3 seconds"))
