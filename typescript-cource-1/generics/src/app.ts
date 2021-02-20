// const names: Array<string> = [] //string[]
// // names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 200)
// })

// promise.then(data => {
//   // data.split(' ')
// })

function merge<T, U>(objA: T, objB: U) {
  return ({
    ...objA,
    ...objB,
  })
}

const mergeObject = merge({ name: 'Max' }, { age: 26 })

console.log(mergeObject.age)

