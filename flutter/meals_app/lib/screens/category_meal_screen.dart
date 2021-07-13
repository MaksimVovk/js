import 'package:flutter/material.dart';
import '../models/meal.dart';
import 'package:meals_app/widgets/meal_item.dart';

import '../dammy_data.dart';

class CategoryMealScreen extends StatefulWidget {
  // final String categoryId;
  // final String title;

  // CategoryMealScreen(this.categoryId, this.title);
  static const routeName = '/category-meals';

  @override
  _CategoryMealScreenState createState() => _CategoryMealScreenState();
}

class _CategoryMealScreenState extends State<CategoryMealScreen> {

  String title;
  List<Meal> displayMeal;
  var _loadedInitData = false;

  @override
  void didChangeDependencies() {
    if (_loadedInitData) {
      return;
    }

    final routeArgs = ModalRoute.of(context).settings.arguments as Map<String, String>;

    title = routeArgs['title'];
    final categoryId = routeArgs['id'];
    displayMeal = DUMMY_MEALS.where((meal) {
      return meal.categories.contains(categoryId);
    })
    .toList();
    _loadedInitData = true;

    super.didChangeDependencies();
  }

  void _removeMeal(mealId) {
    setState(() {
      displayMeal.removeWhere((element) => element.id == mealId);
    });
  }

  @override
  Widget build(BuildContext context) {

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
        final id = displayMeal[i].id;
        final title = displayMeal[i].title;
        final imageUrl = displayMeal[i].imageUrl;
        final duration = displayMeal[i].duration;
        final complexity = displayMeal[i].complexity;
        final affordability = displayMeal[i].affordability;

        return MealItem(
          id: id,
          title: title,
          imageUrl: imageUrl,
          duration: duration,
          complexity: complexity,
          affordability: affordability,
          removeItem: _removeMeal,
        );
      },
      itemCount: displayMeal.length,
    );

    return Scaffold(
      appBar: appBar,
      body: body,
    );
  }
}