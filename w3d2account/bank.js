/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank, CheckingAccount */
'use strict';

class Bank {
    //static next Number that tracks the next account number
    static nextNumber = 1;
    //constructor
    constructor() {
        this.bankAccounts = [];
    }

    //add an account
    addAccount() {
        let acctNo = Bank.nextNumber;
        let account = new Account(acctNo);
        Bank.nextNumber++;
        this.bankAccounts.push(account);
        return account.getNumber();
    }

    // add a savings account
    addSavingsAccount(interest) {
        let acctNo = Bank.nextNumber;
        let savings = new SavingsAccount(acctNo);
        Bank.nextNumber++;
        savings.setInterest(interest);
        this.bankAccounts.push(savings);
        return savings.getNumber();

    }
    //add a checking account
    addCheckingAccount(overdraft) {
        let acctNo = Bank.nextNumber;
        let checking = new CheckingAccount(acctNo);
        Bank.nextNumber++;
        checking.setOverdraft_limit(overdraft);
        this.bankAccounts.push(checking);
        return checking.getNumber();
    }

    //close a specific account by number
    closeAccount(number) {
        for (const value of this.bankAccounts) {
            if (value.getNumber() === number) {
                const index = this.bankAccounts.indexOf(value);
                this.bankAccounts.splice(index, 1);
            }
        }
    }

    //a general account report for all bank accounts
    accountReport() {
        let string = '';
        for (let i = 0; i < this.bankAccounts.length; i++) {
            string += this.bankAccounts[i].toString() + '\n';
        }
        return string;
    }

    //end of month
    endOfMonth() {
        this.bankAccounts.forEach(account => {
            console.log(account.endofMonth());
        });
    }
}
