import 'package:flutter/material.dart';

class CartItem {
  final String id;
  final String title;
  final int quantity;
  final double price;

  CartItem({
    @required this.id,
    @required this.title,
    @required this.quantity,
    @required this.price,
  });
}

class Cart with ChangeNotifier {
  Map<String, CartItem> _items = {};

  Map<String, CartItem> get items {
    return {...items};
  }

  void addItem(String id, double price, String title){
    if (_items.containsKey(id)) {
      _items.update(id, (value) => CartItem(
        id: value.id,
        title: value.title,
        quantity: value.quantity + 1,
        price: value.price
      ));
    } else {
      _items.putIfAbsent(id, () =>
        CartItem(
          id: DateTime.now().toString(),
          title: title,
          price: price,
          quantity: 1,
        )
      );
    }
  }
}