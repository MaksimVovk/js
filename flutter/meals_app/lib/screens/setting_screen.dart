import 'package:flutter/material.dart';
import '../widgets/main_drawer.dart';

class SettingScreen extends StatelessWidget {
  static const routeName = '/filters';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Settings'),
      ),
      drawer: MainDrawer(),
      body: Center(
        child: Text('Settings!')
      ),
    );
  }
}