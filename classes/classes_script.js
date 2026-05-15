class Banking {
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.balance += +amount;
    }

    withDraw(amount) {
        this.balance -= +amount;
    }
}


let customer1 = new Banking('Amit'); 
let customer2 = new Banking('Prateek', 3000);
customer1.withDraw('112')
console.log(customer1)