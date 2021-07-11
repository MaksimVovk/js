import 'package:flutter/material.dart';

class MealDetailScreen extends StatelessWidget {
  static const routeName = '/meal-detail';

  @override
  Widget build(BuildContext context) {
    final mealId = ModalRoute.of(context).settings.arguments as String;

    final appBar = AppBar(title: Text('Meal Detail'));
    final body = Center(
      child: Text('The meal id - $mealId!')
    );
    return Scaffold(
      appBar: appBar,
      body: body,
    );
  }
}