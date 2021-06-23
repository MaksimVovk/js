import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../models/transaction.dart';

class TransactionList extends StatelessWidget {
  final List<Transaction> userTransaction;
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
          return Card(
            elevation: 5,
            margin: EdgeInsets.symmetric(
              vertical: 8,
              horizontal: 5,
            ),
            child: ListTile(
              leading: CircleAvatar(
                radius: 30,
                child: Padding(
                  padding: EdgeInsets.all(6),
                  child: FittedBox(
                    child: Text('\$${userTransaction[index].amount}'),
                  )
                )
              ),
              title: Text(
                userTransaction[index].title,
                style: Theme.of(context).textTheme.title,
              ),
              subtitle: Text(
                DateFormat.yMMMd().format(userTransaction[index].date),
              ),
              trailing: IconButton(
                icon: Icon(Icons.delete),
                color: Theme.of(context).errorColor,
                onPressed: () => deleteTransaction(userTransaction[index].id),
              ),
            )
          );
        },
        itemCount: userTransaction.length,
      );
  }
}