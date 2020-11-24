const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string]
  types: (string | number)[]
} = {
  name: 'Maxim',
  age: 25,
  hobbies: ['Sport', 'Cooking'],
  role: [1, 'author'],
  types: [1, 2, 3, 'second']
}

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN, READ_ONLY, AUTHOR }

const per = {
  name: 'Maxim',
  age: 25,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN,
}

if (per.role === Role.AUTHOR) {
  console.log('is author')
}

let favoritesActivities: any[] //anything: array/array of, numbers, chars
favoritesActivities = ['Sport', 1, { id: 1, name: 'Sport' }]

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}