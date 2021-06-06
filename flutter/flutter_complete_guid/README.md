# flutter_complete_guid

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.


example dart

class Person {
  String name = 'Max';
  int age = 26;

  <!-- Person ({String inputName, int age}) {
    name = inputName
    this.age = age
  } -->

  Person ({ this.name, this.age = 26})
}

num addNumbers (num num1, num num2) {
  var number = num1 + num2;
  return number;
}

void main() {
  num firstResult = addNumbers(2,2.5);
  print(firstResult);
  firstResult = addNumbers(2,5);
  print(firstResult);
  print('Hello');

  var p1 = Person(name: 'Max');
  var p2 = Person(age: 27, name: 'Alex');
  print(p1.name);
  print(p2.name);
  p2.name = 'Alex';

  print(p1.name);
  print(p2.name);
}
