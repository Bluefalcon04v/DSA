class Banking {
    #balance = 0 // this is a private property
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.#balance += amount
    }

    #interestCalculator(amount) { // this is a private method
        return amount / 2
    }

    getLoan(amount) {
        this.#balance -= this.#interestCalculator(amount)
    }

    set setBalance(amount) {
        this.#balance = amount
    }

    get getBalance() {
        return this.#balance
    }
}


let customer1 = new Banking('amit', 500);
customer1.getLoan(100)
console.log(customer1)