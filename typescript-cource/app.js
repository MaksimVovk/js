var person = {
    name: 'Maxim',
    age: 25,
    hobbies: ['Sport', 'Cooking']
};
var favoritesActivities;
favoritesActivities = ['Sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
