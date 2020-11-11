const person: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: 'Maxim',
  age: 25,
  hobbies: ['Sport', 'Cooking'],
}

let favoritesActivities: string[]
favoritesActivities = ['Sport']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}