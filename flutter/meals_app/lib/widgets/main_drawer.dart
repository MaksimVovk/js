import 'package:flutter/material.dart';

import '../screens/setting_screen.dart';

class MainDrawer extends StatelessWidget {

  Widget _buildListTile(String text, IconData icon, Function handler) {
    return ListTile(
      leading: Icon(
        icon,
        size: 26,
      ),
      title: Text(
        text,
        style: TextStyle(
          fontFamily: 'RobotoCondensed',
          fontSize: 24,
          fontWeight: FontWeight.bold,
        ),
      ),
      onTap: handler
    );
  }
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          Container(
            height: 120,
            width: double.infinity,
            padding: EdgeInsets.all(20),
            alignment: Alignment.centerLeft,
            color: Theme.of(context).accentColor,
            child: Text(
              'Cooking Up!',
              style: TextStyle(
                fontWeight: FontWeight.w900,
                fontSize: 30,
                color: Theme.of(context).primaryColor,
              ),
            )
          ),
          SizedBox(
            height: 20,
          ),
          _buildListTile(
            'Cooking Up!',
            Icons.restaurant,
            () {
              Navigator.of(context).pushNamed('/');
            }
          ),
          _buildListTile(
            'Settings',
            Icons.settings,
            () {
              Navigator.of(context).pushNamed(SettingScreen.routeName);
            }
          ),
        ],
      ),
    );
  }
}