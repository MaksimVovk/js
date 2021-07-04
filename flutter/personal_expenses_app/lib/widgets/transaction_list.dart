import 'package:flutter/material.dart';
import '../models/transaction.dart';

import './transaction_item.dart';

class TransactionList extends StatelessWidget {
  List<Transaction> userTransaction;
  Function deleteTransaction;

  TransactionList({this.userTransaction, this.deleteTransaction});

  @override
  Widget build(BuildContext context) {
    return userTransaction.isEmpty
      ? LayoutBuilder(
        builder: (ctx, constraints) {
          return Column(
            children: <Widget>[
              Text(
                'No transactions!',
                style: Theme.of(context).textTheme.title,
              ),
              SizedBox(height: 10),
              Container(
                height: constraints.maxHeight * 0.6,
                child: Image.asset('assets/images/waiting.png', fit: BoxFit.cover)
              ),
            ]
          );
        },
      )
      : ListView.builder(
        itemBuilder: (ctx, index) {
          return TransactionItem(userTransaction: userTransaction[index], deleteTransaction: deleteTransaction);
        },
        itemCount: userTransaction.length,
      );
  }
}