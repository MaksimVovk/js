import 'package:flutter/material.dart';
// void main () {
//   runApp(MyApp());
// }

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  void answerQuestion() {
    print('Answer chosen');
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      'What\'s your favorite color?',
      'What\'s your favorite animal',
    ];
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('My first app'),
        ),
        body: Column(
          children: [
            Text('The question!'),
            ElevatedButton(
              child: Text('Answer 1'),
              onPressed: () => answerQuestion(),
            ),
            ElevatedButton(
              child: Text('Answer 1'),
              onPressed: () => answerQuestion(),
            ),
            ElevatedButton(
              child: Text('Answer 1'),
              onPressed: () => answerQuestion(),
            ),
          ],
        ),
      ),
    );
  }
}