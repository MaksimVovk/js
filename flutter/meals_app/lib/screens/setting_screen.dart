import 'package:flutter/material.dart';
import '../widgets/main_drawer.dart';

class SettingScreen extends StatefulWidget {
  static const routeName = '/filters';

  final Function saveSetting;
  Map<String, bool> config;

  SettingScreen(this.config, this.saveSetting);

  @override
  _SettingScreenState createState() => _SettingScreenState();
}

class _SettingScreenState extends State<SettingScreen> {
    var _glutenFree = false;
    var _vegetarian = false;
    var _vegan = false;
    var _lactoseFree = false;

  @override
  initState() {
    _glutenFree = widget.config['gluten'];
    _vegetarian = widget.config['vegetarian'];
    _vegan = widget.config['vegan'];
    _lactoseFree = widget.config['lactose'];
    super.initState();
  }

  Widget buildSectionTitle(String title, String subtitle, bool value, Function handler) {
    return SwitchListTile(
      title: Text(title),
      subtitle: Text(subtitle),
      value: value,
      onChanged: handler,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Settings'),
        actions: [
          IconButton(
            icon: Icon(Icons.save),
            onPressed: () {
              final selectedFilters = {
                'gluten': _glutenFree,
                'lactose': _lactoseFree,
                'vegan': _vegan,
                'vegetarian': _vegetarian,
              };
              widget.saveSetting(selectedFilters);
            },
          )
        ],
      ),
      drawer: MainDrawer(),
      body: Column(
        children: [
          Container(
            padding: EdgeInsets.all(20),
            child: Text(
              'Adjust your meal selection.',
              style: Theme.of(context).textTheme.headline6,
            ),
          ),
          Expanded(
            child: ListView(
              children: [
                buildSectionTitle(
                  'Gluten-free',
                  'Only gluten-free meals',
                  _glutenFree,
                  (newValue) => {
                    setState(() => {
                      _glutenFree = newValue,
                    })
                  }
                ),
                buildSectionTitle(
                  'Vegetarian',
                  'Only vegetarian meals',
                  _vegetarian,
                  (newValue) => {
                    setState(() => {
                      _vegetarian = newValue,
                    })
                  }
                ),
                buildSectionTitle(
                  'Vegan',
                  'Only vegan meals',
                  _vegan,
                  (newValue) => {
                    setState(() => {
                      _vegan = newValue,
                    })
                  }
                ),
                buildSectionTitle(
                  'Lactose-free',
                  'Only lactose-free meals',
                  _lactoseFree,
                  (newValue) => {
                    setState(() => {
                      _lactoseFree = newValue,
                    })
                  }
                ),
              ],
            )
          )
        ],
      ),
    );
  }
}