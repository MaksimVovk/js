const person: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: 'Max',
  age: 26,
  hobbies: ['Sport', 'Cooking']
}

// let favoriteActivities: any[]
// favariteActivities = ['Sport', 1]

let favoriteActivities: string[]
favoriteActivities = ['Sport']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleLowerCase())
  // console.log(hobby.map()) // !!! Error !!!
}