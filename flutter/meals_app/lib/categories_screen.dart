import 'package:flutter/material.dart';
import 'package:meals_app/category_item.dart';

import './dammy_data.dart';

class CategoriesScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    final gridView = GridView(
      padding: EdgeInsets.all(25),
      children: DUMMY_CATEGORIES
        .map((item) => CategoryItem(
          id: item.id,
          title: item.title,
          color: item.color,
        )).toList(),
      gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 200,
        childAspectRatio: 3 / 2,
        crossAxisSpacing: 20,
        mainAxisSpacing: 20,
      ),
    );

    return Scaffold(
      appBar: AppBar(
        title: const Text('Dial Meals'),
      ),
      body: gridView,
    );
  }
}