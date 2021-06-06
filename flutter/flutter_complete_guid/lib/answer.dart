import 'package:flutter/material.dart';

class Answer extends StatelessWidget {
  final Function selectHandler;
  final answer;

  Answer({this.selectHandler, this.answer});
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      child: ElevatedButton(
        child: Text(answer),
        onPressed: selectHandler,
        style: ButtonStyle(
          foregroundColor: MaterialStateProperty.all(Colors.white),
          backgroundColor: MaterialStateProperty.all(Colors.blue),
        ),
        // style: ElevatedButton.styleFrom(
        //   primary: Colors.orange,
        //   onPrimary: Colors.white,
        // ),
      ),
    );
  }
}