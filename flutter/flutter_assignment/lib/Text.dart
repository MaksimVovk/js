import 'package:flutter/material.dart';

class TextCl extends StatelessWidget {
  final String innerText;

  TextCl(this.innerText);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: EdgeInsets.all(10),
      child: Text(
        innerText,
        style: TextStyle(fontSize: 28),
        textAlign: TextAlign.center,
      )
    );
  }
}