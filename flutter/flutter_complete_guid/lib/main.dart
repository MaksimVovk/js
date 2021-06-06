import 'package:flutter/material.dart';

import './question.dart';
import './answer.dart';

// void main () {
//   runApp(MyApp());
// }

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {

    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  int _questionIndex = 0;

  void _answerQuestion() {
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      {
        'question': 'What\'s your favorite color?',
        'answers': ['Black','Red','White','Green'],
      },
      {
        'question': 'What\'s your favorite animal?',
        'answers': ['Rabbit', 'Snake', 'Lion', 'Elephant'],
      },
      {
        'question': 'Who\'s your favorite instructor?',
        'answers': ['Max', 'Max', 'Max', 'Max'],
      },
    ];
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('My first app'),
        ),
        body: Column(
          children: [
            Question(
              questions[_questionIndex]['question'],
            ),
            ...(questions[_questionIndex]['answers'] as List<String>)
            .map((it) {
              return Answer(
                answer: it,
                selectHandler: _answerQuestion
              );
            }).toList(),
          ],
        ),
      ),
    );
  }
}