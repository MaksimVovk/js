import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import './widgets/chart.dart';

import './widgets/transaction_list.dart';
import './widgets/new_transaction.dart';
import './models/transaction.dart';

void main() {
  // WidgetsFlutterBinding.ensureInitialized();
  // SystemChrome.setPreferredOrientations([
  //   DeviceOrientation.portraitUp,
  //   DeviceOrientation.portraitDown,
  // ]);
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.green,
        errorColor: Colors.red.shade400,
        accentColor: Colors.amber,
        fontFamily: 'Quicksand',
        textTheme: ThemeData.light().textTheme.copyWith(
          title: TextStyle(
            fontFamily: 'OpenSans',
            fontWeight: FontWeight.bold,
            fontSize: 18,
          ),
          button: TextStyle(
            color: Colors.white
          ),
        ),
        appBarTheme: AppBarTheme(
          textTheme: ThemeData.light().textTheme.copyWith(
            title: TextStyle(
              fontFamily: 'OpenSans',
              fontSize: 20,
              fontWeight: FontWeight.bold
            ),
            button: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
            )
          )
        )
      ),
      title: 'Personal Expenses',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<Transaction> _userTransaction = [
    // Transaction(
    //   id: 't1',
    //   title: 'new shoes',
    //   amount: 66.99,
    //   date: DateTime.now(),
    // ),
    // Transaction(
    //   id: 't2',
    //   title: 'Weekly Groceries',
    //   amount: 16.53,
    //   date: DateTime.now(),
    // ),
  ];

  bool _chart = false;

  List<Transaction> get _resentTransactions {
    return _userTransaction.where((tx) {
      return tx.date.isAfter(
        DateTime.now().subtract(
          Duration(days: 7),
        )
      );
    }).toList();
  }

  void _addNewTransaction(String txTitle, double txAmount, DateTime txDate) {
    final newTx = Transaction(
      id: DateTime.now().toString(),
      date: txDate,
      title: txTitle,
      amount: txAmount,
    );

    setState(() {
      _userTransaction.add(newTx);
    });
  }

  void _startAddNewTransaction(BuildContext ctx) {
    showModalBottomSheet(
      context: ctx,
      builder: (_) {
        return GestureDetector(
          onTap: () {},
          child: NewTransaction(_addNewTransaction),
          behavior: HitTestBehavior.opaque,
        );
      },
    );
  }

  void _deleteTransaction(String id) {
    if (id == null) {
      return;
    }

    // final deletetObject = _userTransaction.firstWhere((element) => element.id == id);

    // setState(() {
    //   _userTransaction.remove(deletetObject);
    // });

    setState(() {
      _userTransaction.removeWhere((tx) => tx.id == id);
    });
  }

  @override
  Widget build(BuildContext context) {
    final appBar = AppBar(
      title: Text('Flutter App'),
      actions: <Widget>[
        IconButton(
          icon: Icon(Icons.add),
          onPressed: () => _startAddNewTransaction(context),
        )
      ],
    );

    final chartWidget = Container(
      height: (
        MediaQuery.of(context).size.height
        - appBar.preferredSize.height
        - MediaQuery.of(context).padding.top
      ) * 0.25,
      child: Chart(_resentTransactions),
    );

    final transactionListWidget = Container(
      height: (
        MediaQuery.of(context).size.height
        - appBar.preferredSize.height
        - MediaQuery.of(context).padding.top
      ) * 0.75,
      child: TransactionList(
        userTransaction: _userTransaction,
        deleteTransaction: _deleteTransaction,
      ),
    );

    final switchWidget = Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('Show cart'),
        Switch(
          value: _chart,
          onChanged:  (val) {
            setState(() {
              _chart = val;
            });
          },
        ),
      ],
    );

    return Scaffold(
      appBar: appBar,
      body:
      SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            switchWidget,
            _chart
              ? chartWidget
              : transactionListWidget
          ],
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton:
        FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: () => _startAddNewTransaction(context),
        ),
    );
  }
}

