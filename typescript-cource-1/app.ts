const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] //tuple
  // role: (number | string)[]
} = {
// const person = {
  name: 'Max',
  age: 26,
  hobbies: ['Sport', 'Cooking'],
  role: [2, 'author']
}

// person.role.push('admin')
// person.role[1] = 10

// let favoriteActivities: any[]
// favariteActivities = ['Sport', 1]

let favoriteActivities: string[]
favoriteActivities = ['Sport']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleLowerCase())
  // console.log(hobby.map()) // !!! Error !!!
}