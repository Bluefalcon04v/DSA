function Banking(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount
    }
    this.withDrawl = function (amount) {
        this.balance -= amount
    }
}

// const customer1 = new Banking('Shivam', 2000, 300)
// customer1.deposit(300)
// const customer2 = new Banking('Amit')
// customer2.withDrawl(300)
// console.log(customer1, customer2)

// ------------------------------------------------------------------------------------
// account form details 
const accountForm = document.querySelector('#account_form');
const customerName = document.querySelector('#customer_name');
const balance = document.querySelector('#balance');

let allAccountsInfo = [];
accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newAccount = new Banking(customerName.value, +balance.value);
    allAccountsInfo.push(newAccount)
    console.log(allAccountsInfo)
})

// deposit form details 
const accountNumber = document.querySelector('#account_number');
const depositForm = document.querySelector('#deposit_form');
const depositAmount = document.querySelector('#deposit');
const withDrawlAmount = document.querySelector('#with_drawl');

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = allAccountsInfo.find((acc) => acc.accountNumber === +accountNumber.value)
    account.deposit(+depositAmount.value)

    account.withDrawl(+withDrawlAmount.value)
    console.log(allAccountsInfo)
})
