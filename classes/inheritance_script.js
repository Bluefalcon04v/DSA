class Banking {
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }
    printName() {
        console.log("Customer Name is " + this.customerName)
    }
}


class SavingAccount extends Banking {
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }
    deposit(amount) {
        this.balance += amount
        return this.balance
    }
}


let myAccount = new SavingAccount('me', 2000);
myAccount.deposit(1000)
myAccount.printName()
console.log(myAccount)