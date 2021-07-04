import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
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
  return runApp(MyApp());
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

class _MyHomePageState extends State<MyHomePage> with WidgetsBindingObserver {
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

  @override
  void initState() {
    WidgetsBinding.instance.addObserver(this);
    super.initState();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    print(state);
  }

  @override
  dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

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

  List<Widget> _buildLandscapeContent (Widget transactionListWidget) {
    return [Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('Show cart', style: Theme.of(context).textTheme.title),
        Switch.adaptive(
          activeColor: Theme.of(context).accentColor,
          value: _chart,
          onChanged:  (val) {
            setState(() {
              _chart = val;
            });
          },
        ),
      ],
    ), transactionListWidget];
  }

  List<Widget> _buildPortretContent (MediaQueryData mediaQuery, AppBar appBar, bool isLandscape, Widget transactionListWidget) {
    return [Container(
      height: (
        mediaQuery.size.height
        - appBar.preferredSize.height
        - mediaQuery.padding.top
      ) * (isLandscape ? 0.7 : 0.3),
      child: Chart(_resentTransactions),
    ), transactionListWidget];
  }

  Widget _buildAppBar(bool isIOS) {
    return isIOS
      ? _buildCupertinoNavigationBar()
      : _buildMaterialAppBar();
  }

  Widget _buildCupertinoNavigationBar() {
    return CupertinoNavigationBar(
      middle: Text('Flutter App'),
      trailing: Row(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          GestureDetector(
            child: Icon(CupertinoIcons.add),
            onTap: () => _startAddNewTransaction(context)
          )
        ],
      ),
    );
  }

  Widget _buildMaterialAppBar() {
    return AppBar(
      title: Text('Flutter App'),
      actions: <Widget>[
        IconButton(
          icon: Icon(Icons.add),
          onPressed: () => _startAddNewTransaction(context),
        )
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final mediaQuery = MediaQuery.of(context);
    final isLandscape = mediaQuery.orientation == Orientation.landscape;
    final isIOS = Platform.isIOS;

    final PreferredSizeWidget appBar = _buildAppBar(isIOS);
    final transactionListWidget = Container(
      height: (
        mediaQuery.size.height
        - appBar.preferredSize.height
        - mediaQuery.padding.top
      ) * 0.7,
      child: TransactionList(
        userTransaction: _userTransaction,
        deleteTransaction: _deleteTransaction,
      ),
    );

    final pageBody = SafeArea(
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            if (isLandscape) ..._buildLandscapeContent(transactionListWidget),
            if (!isLandscape) ..._buildPortretContent(mediaQuery, appBar, isLandscape, transactionListWidget),
          ],
        ),
      )
    );

    return isIOS
      ? CupertinoPageScaffold(
        child: pageBody,
        navigationBar: appBar,
      )
      : Scaffold(
        appBar: appBar,
        body: pageBody,
        floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
        floatingActionButton: isIOS
          ? Container()
          : FloatingActionButton(
            child: Icon(Icons.add),
            onPressed: () => _startAddNewTransaction(context),
          ),
      );
  }
}

