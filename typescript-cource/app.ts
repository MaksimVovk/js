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

let favoritesActivities: string[]
favoritesActivities = ['Sport']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}