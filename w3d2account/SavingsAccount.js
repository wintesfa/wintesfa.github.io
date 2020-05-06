/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank */
'use strict';
class SavingsAccount extends Account {
    constructor(number) {
        super(number); //acc number of Account class
        this._interest = 0;
    }
    getInterest() {
        return this._interest;
    }
    setInterest(newInterest) {
        this._interest = newInterest;
    }

    addInterest() {
        let interestAmount = this.getBalance() * (this.getInterest() / 100);
        this.deposit(interestAmount);

    }

    endofMonth() {
        this.addInterest();
        return "Interest added SavingsAccount 2: balance" + this._balance + " interest: " + this._interest;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }
}





