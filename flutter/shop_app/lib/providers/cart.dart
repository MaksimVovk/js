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
    return {..._items};
  }

   List<CartItem> get cartItems {
    return {...items}.values.toList();
  }

  int get itemCount {
    return _items == null ? 0 : _items.length;
  }

  double get totalAmount {
    var _total = 0.0;
    _items.forEach((key, val) {
      _total += val.price * val.quantity;
    });
    return _total;
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

    notifyListeners();
  }
}