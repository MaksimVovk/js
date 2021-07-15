import 'package:flutter/material.dart';
import '../dammy_data.dart';

class MealDetailScreen extends StatelessWidget {
  static const routeName = '/meal-detail';

  final Function toggleFavorite;
  final Function isMealFavorite;

  Widget buildSectionTitle(BuildContext context, String text) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10),
      child: Text(
        text,
        style: Theme.of(context).textTheme.headline6
      )
    );
  }

  Widget buildContainer({ Widget child }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(10),
      ),
      margin: EdgeInsets.all(10),
      padding: EdgeInsets.all(10),
      height: 150,
      width: 300,
      child: child,
    );
  }

  MealDetailScreen(this.toggleFavorite, this.isMealFavorite);

  @override
  Widget build(BuildContext context) {
    final mealId = ModalRoute.of(context).settings.arguments as String;
    final selectedMeas = DUMMY_MEALS.firstWhere((element) => element.id == mealId);

    final appBar = AppBar(
      title: Text('${selectedMeas.title}'),
    );
    final body = SingleChildScrollView(
      child: Column(
        children: [
          Container(
            height: 300,
            width: double.infinity,
            child: Image.network(
              selectedMeas.imageUrl,
              fit: BoxFit.cover,
            ),
          ),
          buildSectionTitle(context, 'Ingredients'),
          buildContainer(
            child: ListView.builder(
              itemBuilder: (ctx, index) => Card(
                color: Theme.of(context).accentColor,
                child: Padding(
                  padding: EdgeInsets.symmetric(vertical: 5, horizontal: 10),
                  child: Text(selectedMeas.ingredients[index])
                ),
              ),
              itemCount: selectedMeas.ingredients.length,
            )
          ),
          buildSectionTitle(context, 'Steps'),
          buildContainer(
            child: ListView.builder(
              itemBuilder: (ctx, index) =>
              Column(
                children: [
                  ListTile(
                    leading: CircleAvatar(
                      child: Text('${index + 1}'),
                    ),
                    title: Text('${selectedMeas.steps[index]}'),
                  ),
                  Divider(),
                ],
              ),
              itemCount: selectedMeas.steps.length,
            ),
          ),
        ]
      )
    );
    return Scaffold(
      appBar: appBar,
      body: body,
      floatingActionButton: FloatingActionButton(
        child: Icon(
          isMealFavorite(mealId)
            ? Icons.star
            : Icons.star_border
        ),
        onPressed: () => toggleFavorite(mealId),
      ),
    );
  }
}