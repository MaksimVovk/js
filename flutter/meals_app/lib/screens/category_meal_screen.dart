import 'package:flutter/material.dart';
import 'package:meals_app/widgets/meal_item.dart';

import '../dammy_data.dart';

class CategoryMealScreen extends StatelessWidget {
  // final String categoryId;
  // final String title;

  // CategoryMealScreen(this.categoryId, this.title);
  // static const routeName = '/category-meals';

  @override
  Widget build(BuildContext context) {
    final routeArgs =
      ModalRoute.of(context).settings.arguments as Map<String, String>;

    final title = routeArgs['title'];
    final categoryId = routeArgs['id'];
    final categoryMeals = DUMMY_MEALS
      .where((meal) {
        return meal.categories.contains(categoryId);
      })
      .toList();

    final appBar = AppBar(
      title: Text(title)
    );

    // final body = Center(
    //   child: Text(
    //     'The Recipes For The Category!',
    //   ),
    // );

    final body = ListView.builder(
      itemBuilder: (ctx, i) {
        final id = categoryMeals[i].id;
        final title = categoryMeals[i].title;
        final imageUrl = categoryMeals[i].imageUrl;
        final duration = categoryMeals[i].duration;
        final complexity = categoryMeals[i].complexity;
        final affordability = categoryMeals[i].affordability;

        return MealItem(
          id: id,
          title: title,
          imageUrl: imageUrl,
          duration: duration,
          complexity: complexity,
          affordability: affordability
        );
      },
      itemCount: categoryMeals.length,
    );

    return Scaffold(
      appBar: appBar,
      body: body,
    );
  }
}