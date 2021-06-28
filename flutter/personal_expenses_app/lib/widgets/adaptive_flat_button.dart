import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class AdaptiveFlatButton extends StatelessWidget {
  final isIOS = Platform.isIOS;

  final Widget child;
  final Function onPressed;

  AdaptiveFlatButton({this.child, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: isIOS
      ? CupertinoButton(
        onPressed: onPressed,
        child: child,
      )
      : TextButton(
        onPressed: onPressed,
        child: child,
      ),
    );
  }
}