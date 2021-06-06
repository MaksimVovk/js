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
  final questions = const [
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

  int _questionIndex = 0;

  void _answerQuestion() {
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);

    if (_questionIndex < questions.length) {
      print('We have more questions!');
    } else {
      print('We don\'t have any questions!');
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('My first app'),
        ),
        body: _questionIndex < questions.length
          ? Column(
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
          )
          : Center(
            child: Text('You did it!'),
          ),
      ),
    );
  }
}