import 'package:flutter/material.dart';
import 'package:meals_app/models/meal.dart';
import './dammy_data.dart';
import './screens/setting_screen.dart';
import './screens/tabs_screen.dart';
import './screens/meal_detail_screen.dart';
import './screens/category_meal_screen.dart';
import './screens/categories_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  // This widget is the root of your application.
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Map<String, bool> _filters = {
    'gluten': false,
    'lactose': false,
    'vegan': false,
    'vegetarian': false,
  };

  List<Meal> _availabelMeals = DUMMY_MEALS;

  void _setFilters(Map<String, bool> filterData) {
    setState(() {
      _filters = filterData;
      _availabelMeals = DUMMY_MEALS.where((el) {
        if (_filters['gluten'] && !el.isGlutenFree) {
          return false;
        }
        if (_filters['lactose'] && !el.isLactoseFree) {
          return false;
        }
        if (_filters['vegan'] && !el.isVegan) {
          return false;
        }
        if (_filters['vegetarian'] && !el.isVegetarian) {
          return false;
        }

        return true;
      }).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DeliMeals',
      theme: ThemeData(
        primarySwatch: Colors.pink,
        accentColor: Colors.amber,
        canvasColor: Color.fromRGBO(255, 254, 229, 1),
        fontFamily: 'Raleway',
        textTheme: ThemeData.light().textTheme.copyWith(
          bodyText1: TextStyle(
            color: Color.fromRGBO(20, 51, 51, 1),
          ),
          bodyText2: TextStyle(
            color: Color.fromRGBO(20, 51, 51, 1),
          ),
          headline6: TextStyle(
            fontSize: 20,
            fontFamily: 'RobotoCondensed',
            fontWeight: FontWeight.bold,
          )
        )
      ),
      // home: CategoriesScreen(),
      initialRoute: '/',
      routes: {
        '/': (ctx) => TabScreen(),
        '/category-meals': (ctx) => CategoryMealScreen(_availabelMeals),
        // CategoryMealScreen.routeName: (ctx) => CategoryMealScreen()
        MealDetailScreen.routeName: (ctx) => MealDetailScreen(),
        SettingScreen.routeName: (ctx) => SettingScreen(_filters, _setFilters),
      },
      onGenerateRoute: (settings) {
        return MaterialPageRoute(builder: (ctx) => CategoriesScreen());
      },
      onUnknownRoute: (settings) {
        return MaterialPageRoute(builder: (ctx) => CategoriesScreen());
      },
    );
  }
}
