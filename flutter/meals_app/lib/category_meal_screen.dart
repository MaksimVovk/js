import 'package:flutter/material.dart';

class CategoryMealScreen extends StatelessWidget {
  // final String categoryId;
  // final String title;

  // CategoryMealScreen(this.categoryId, this.title);

  @override
  Widget build(BuildContext context) {
    final routeArgs =
      ModalRoute.of(context).settings.arguments as Map<String, String>;

    final title = routeArgs['title'];
    final id = routeArgs['id'];

    final appBar = AppBar(
      title: Text(title)
    );
    final body = Center(
      child: Text(
        'The Recipes For The Category!',
      ),
    );

    return Scaffold(
      appBar: appBar,
      body: body,
    );
  }
}