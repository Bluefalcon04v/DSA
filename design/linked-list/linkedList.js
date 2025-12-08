class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  insert_at_tail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;
    return;
  }

  insert_at_head(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    }

    let temp = this.head;
    this.head = newNode;
    newNode.next = temp;
    this.length++;
  }

  search(data) {
    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.val === data) {
        return { curr, prev };
      }
      prev = curr;
      curr = curr.next;
    }
    return null;
  }

  display() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }

    return this.length > 0
      ? "head ---> " + arr.join(" ---> ") + " ---> null"
      : null;
  }

  delete(data) {
    let res = this.search(data);
    if (!res) return null;
    const { curr, prev } = res;

    if (!prev) {
      this.head = curr.next;
    } else {
      prev.next = curr.next;
    }
    this.length--;
  }
}

let list = new LinkedList();
list.insert_at_tail(3);
list.insert_at_tail(4);
list.insert_at_head(9);

// console.log(list.length); // 3
// console.log(list.display()); // head ---> 9 ---> 3 ---> 4 ---> null
// list.delete(9);
// console.log(list.display()); // head ---> 3 ---> 4 ---> null
// console.log(list.length); // 2
