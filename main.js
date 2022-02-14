'use strict';
const assert = require('assert');

class BankAccount {
    constructor(accountNumber, owner){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
}

balance(){
//balance is computed by summing the amounts in transactions array
let currentBalnce = 0;
for (let i =0; i < this.transactions.length; i++){
    currentBalnce += transactions[i].amount;
}

}
deposit(amt) {
//should not deposit a negative amount
//create a new transaction for deposit and add it to transactions array
if(amt <=0){
    console.log('Deposit must be at least one cent');
} else {
    //make a new transaction instance and push to transactions array
    let newDeposit = new Transaction(amt, 'Deposit');
    this.transactions.push(newDeposit);
}
}
charge(payee, amt){
/*should not be able to make your balance go below zero
method takes in payee amount, creates new transaction with
payee and amount and adds it to transation array*/
//if charge would make balance negative, console.log 'You do not have
//sufficient funds in your account'
    let Charge = new Transaction(amt, payee);
    if (Charge > this.balance){
        console.log('You do not have succifient funds in your account');
    } 
    else{
    this.transactions.push(Charge);
    }
}

}
class Transaction {
    constructor(amount, payee){
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}
//bank account should have an account number,owner name, and transaction list
if (typeof describe === 'function'){
    describe('BankAccount', function(){
        it('should have an account number, owner name, and transaction list', function(){
            //creates a new BankAccount and passes the following arguments into the constructor
            //'12345','Flurff Nurghet'
            const BankAccount1 = new BankAccount('12345','Flurff Nurghet');
            assert.equal(BankAccount1.accountNumber, '12345'); 
            assert.equal(BankAccount1.owner, 'Flurff Nurghet'); 
            //assert.equal(BankAccount1.transactions, '') 
        });

    });
    describe('transaction', function(){
        it('should create transaction correctly for deposit', function(){
            // create a new instance
            const Deposit = new Transaction('50.00','Deposit');
            assert.equal(Deposit.amount, '50.00');  
            assert.equal(Deposit.payee, 'Deposit');  
        });
        it('should create transaction correctly for charge', function(){
            // create a new instance
            const Charge = new Transaction('20.00','HEB');
            assert.equal(Charge.amount, '20.00');  
            assert.equal(Charge.payee, 'HEB');  
        });
    });
 }
    


