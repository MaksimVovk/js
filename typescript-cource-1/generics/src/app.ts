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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return ({
    ...objA,
    ...objB,
  })
}

const mergeObject = merge({ name: 'Max', hobbies: ['Sport'] }, { age: 26 })

console.log(mergeObject)

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy> (element: T): [T, string] {
  let descriptionText = 'Got no value.'

  if (element.length === 1) {
    descriptionText = 'Got 1 element'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length +  ' elements'
  }

  return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe(['Sport', 'Music']))
console.log(countAndDescribe([]))

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U) {
  return obj[key]
}

extractAndConvert({ name: 'Max' }, 'name')