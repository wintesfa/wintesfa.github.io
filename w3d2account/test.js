/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank, CheckingAccount */
'use strict';



//test Account
describe("Account-Savings Test", function(){

    let mysavings = new SavingsAccount('123456');
    mysavings.deposit(1200);
    mysavings.setInterest(10);
    mysavings.addInterest();
    // alert(mysavings.toString());

    it('Expected output of getInterest() after setInterest(10) is 10', function () {
        assert.equal(mysavings.getInterest(), 10);
    });
    it('Expected output of getBalance() after smysavings.addInterest(); is 1320', function () {
        assert.equal(mysavings.getBalance(), 1320);
    });
    it('Expected output of toString() after call to mysavings.toString(); is Account 0141075400: balance 148500: interest 10', function () {
        assert.equal(mysavings.toString(), 'Account 123456: balance 1320: interest 10');
    });
});


//test account
describe("Account Test", function(){
    let account = new Account(1234);

    it("account.getNumber() returns 1234", function(){
        assert.equal(account.getNumber(), 1234);
    });
    //test account.getBalance()
    it("account.getBalance returns 0", function(){
        assert.equal(account.getBalance(), 0);
    });
    it("account.getBalance returns 5000", function(){
        account.deposit(5000);
        assert.equal(account.getBalance(), 5000);
    });
    //test account.getBalance() after withdrawing 3000
    it("account.getBalance returns 2000", function(){
        account.withdraw(3000);
        assert.equal(account.getBalance(), 2000);
    });
    //test account.getBalance() after withdrawing 3000
    it("account.getBalance returns Account 1234: balance 2000", function(){
        console.log(account.toString());
        assert.equal(account.toString(), 'Account 1234: balance 2000');
    });

});


describe("Bank Test", function () {
    let bankOfAmerica = new Bank();

    //test bankOfAmerica.addAccount()
    it("addAccount() returns 64001", function () {
        assert.equal(bankOfAmerica.addAccount(), 64001);
    });
    //test bankOfAmerica.addSavingsAccount(10)
    it("addSavingsAccount(10) returns 64002", function () {
        assert.equal(bankOfAmerica.addSavingsAccount(10), 64002);
    });
    //test bankOfAmerica.addCheckingAccount(1000)
    it("addCheckingAccount(1000) returns 64003", function () {
        assert.equal(bankOfAmerica.addCheckingAccount(1000), 64003);
    });
    //test accountReport()
    it("closeAccount(64002) and toString() returns all accounts without 64002", function () {
        //closeAccount(64002)
        bankOfAmerica.closeAccount(64002);
        assert.equal(bankOfAmerica.accountReport(), "Account 64001: balance 0\nAccount 64003: balance 0: Overdraft_limit 1000\n");
    });
});


//CHECKING ACCOUNT
describe("Checkings Test ", function () {
    let mychecking = new CheckingAccount('110110075');
    mychecking.setOverdraft_limit(10000);
    mychecking.deposit(10000);
    mychecking.withdraw(20000);

    it("'Expected output of mychecking.getBalance() after mychecking.deposit(10000) and mychecking.withdraw(20000) is -10000'", function () {
        assert.equal(mychecking.getBalance(), -10000);
    });
    it("'Expected output of  mychecking.toString() is Account 110110075: balance -10000: Overdraft_limit 10000", function () {
        assert.equal(mychecking.toString(), 'Account 110110075: balance -10000: Overdraft_limit 10000');
    });
});

