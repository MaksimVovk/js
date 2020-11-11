var person = {
    name: 'Maxim',
    age: 25,
    hobbies: ['Sport', 'Cooking'],
    role: [1, 'author'],
    types: [1, 2, 3, 'second']
};
var favoritesActivities;
favoritesActivities = ['Sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
