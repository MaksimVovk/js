import 'package:flutter/material.dart';
import 'package:meals_app/widgets/meal_item.dart';
import '../models/meal.dart';

class FavoritesScreen extends StatelessWidget {
  final List<Meal> favoriteMeals;

  FavoritesScreen(this.favoriteMeals);
  @override
  Widget build(BuildContext context) {
    if (favoriteMeals.isEmpty) {
      return Center(
        child: Text('Empty!'),
      );
    }

    return ListView.builder(
      itemBuilder: (ctx, i) {
        final id = favoriteMeals[i].id;
        final title = favoriteMeals[i].title;
        final imageUrl = favoriteMeals[i].imageUrl;
        final duration = favoriteMeals[i].duration;
        final complexity = favoriteMeals[i].complexity;
        final affordability = favoriteMeals[i].affordability;

        return MealItem(
          id: id,
          title: title,
          imageUrl: imageUrl,
          duration: duration,
          complexity: complexity,
          affordability: affordability
        );
      },
      itemCount: favoriteMeals.length,
    );
  }
}