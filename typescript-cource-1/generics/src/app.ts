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

class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem (item: T) {
    this.data = [...this.data, item]
  }

  removeItem (item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }

    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems () {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()

textStorage.addItem('Max')
textStorage.addItem('Manuel')
console.log(textStorage.getItems())
textStorage.removeItem('Max')
console.log('After remove', textStorage.getItems())

// const objStorage = new DataStorage<object>()

// objStorage.addItem({ name: 'Max' })
// objStorage.addItem({ name: 'Manuel' })
// objStorage.removeItem({ name: 'Max' })

// console.log(objStorage.getItems())

interface CourseGoal {
  title: string
  description: string
  completeUtil: Date
}

function createCourseGoal (
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUtil = date

  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Max', 'Lena']
// names.push('Manuel')