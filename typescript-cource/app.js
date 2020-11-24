var person = {
    name: 'Maxim',
    age: 25,
    hobbies: ['Sport', 'Cooking'],
    role: [1, 'author'],
    types: [1, 2, 3, 'second']
};
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var per = {
    name: 'Maxim',
    age: 25,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};
if (per.role === Role.AUTHOR) {
    console.log('is author');
}
var favoritesActivities;
favoritesActivities = ['Sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
