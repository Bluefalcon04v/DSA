function Banking(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

const customer1 = new Banking('Shivam', 2000)
const customer2 = new Banking('Amit')

Banking.prototype.deposit = function (amount) {
    this.balance += amount
}

Banking.prototype.withDrawl = function (amount) {
    this.balance -= amount
}

customer1.deposit(200);
customer2.deposit(100);

console.log(customer1)
console.log(customer2)