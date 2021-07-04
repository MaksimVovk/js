import 'dart:ffi';
import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import './adaptive_flat_button.dart';

class NewTransaction extends StatefulWidget {
  final Function addTransaction;

  NewTransaction(this.addTransaction) {
    print('Constructor new transaction widget');
  }

  @override
  _NewTransactionState createState() {
    print('Create state at new transaction widget');
    return _NewTransactionState();
  }
}

class _NewTransactionState extends State<NewTransaction> {
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();
  DateTime _datePickerController;

  _NewTransactionState() {
    print('Constructor new transaction state');
  }

  @override
  void initState() {
    print('init state');
    super.initState();
  }

  @override
  void didUpdateWidget(covariant NewTransaction oldWidget) {
    print('did update widget');
    super.didUpdateWidget(oldWidget);
  }

  @override
  void dispose() {
    print('dispose');
    super.dispose();
  }

  void _submitData() {
    final enteredTitle = _titleController.text;
    final enteredAmount = double.parse(_amountController.text);
    final enteredDate = _datePickerController;

    final bool isSubmitCondition = enteredTitle.isEmpty || enteredAmount <= 0 || enteredDate == null;

    if (isSubmitCondition) {
      return;
    }

    widget.addTransaction(
      enteredTitle,
      enteredAmount,
      enteredDate,
    );

    Navigator.of(context).pop();
  }

  void _presentDatePicker() {
    showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(2019),
      lastDate: DateTime.now(),
    ).then((value) {
      if (value == null) {
        return;
      }

      setState(() {
        _datePickerController = value;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Card(
        elevation: 5,
        child: Container(
          height: 400,
          padding: EdgeInsets.only(
            top: 5,
            left: 10,
            right: 10,
            // bottom: MediaQuery.of(context).viewInsets.bottom + 10
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: <Widget>[
              TextField(
                decoration: InputDecoration(labelText: 'Title'),
                controller: _titleController,
                onSubmitted: (_) => _submitData(),
              ),
              TextField(
                decoration: InputDecoration(
                  labelText: 'Amount'
                ),
                controller: _amountController,
                keyboardType: TextInputType.number,
                onSubmitted: (_) => _submitData(),
              ),
              Container(
                height: 70,
                child: Row(
                  children: <Widget>[
                    Expanded(
                      child: Text(
                        _datePickerController == null
                          ? 'No Date Chosen!'
                          : DateFormat.yMd().format(_datePickerController),
                        style: TextStyle(color: Theme.of(context).primaryColor)
                      ),
                    ),
                    AdaptiveFlatButton(
                      child: Text('Choose Date IOS'),
                      onPressed: _presentDatePicker
                    ),
                  ],
                ),
              ),
              ElevatedButton(
                child: Text('Add transaction'),
                onPressed: _submitData,
              )
            ],
          )
        ),
      )
    );
  }
}