import 'package:flutter/material.dart';

import './Text.dart';
import './TextControl.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {

    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {

  String _bodyText = 'Some Text';

  void _handlePressButton() {
    setState(() {
      _bodyText = 'New Text';
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Assignment App'),
        ),
        body: Column(
          children: [
            TextCl(_bodyText),
            TextControl(changeText: _handlePressButton,)
          ]
        )
      ),
    );
  }
}
