class UserData {
    static token = "123NAX21";
    static greeting = "Hello World"
}

console.log(UserData) // we can access the static class without creating class instance

class Banking {
    static id = 1
    constructor(name, balance = 0) {
        this.name = name
        this.balance = balance
        this.id = Banking.id++; // implemented the static Property
    }

    static sortInBalanceOrder(user1, user2) { // implemented the static Method 
        return user1.balance - user2.balance
    }

    static getId() {
        console.log(this.id) // we can use this keyword only when we use it on static property and static method at the same time 
    }

    getIdWithoutStatic() {
        console.log(Banking.id);
    }

    // static instance Block
    static {
        console.log("static Block is run")
        this.id = 4
    }
}

// let customer1 = new Banking('ben', 400);
// let customer2 = new Banking('zill', 1000);
// let customer3 = new Banking('Lucy', 300);

// let sortedOrder = [customer1, customer2, customer3];
// sortedOrder.sort(Banking.sortInBalanceOrder); // we have just checked the sorting order for each Banking Customers 
// console.log(sortedOrder) // lucy -> ben -> zill


// we can get this without creating any class Instance
// Banking.getId() 

// for this we have to create static instance 
let customer1 = new Banking('ben', 400);
customer1.getIdWithoutStatic()