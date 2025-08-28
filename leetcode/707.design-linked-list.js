//? Design A Linked List
//?  707 Linked List Question

/*----------  defining a NODE  ----------*/

function Node(val) {
  this.val = val;
  this.next = null;
}

/*----------  defining a Linked List  ----------*/

function MylinkedList() {
  this.head = null;
  this.size = 0;
}

/*=============================================
//>            Adding Method                            
=============================================*/

/*----------  Add a node at the head  ----------*/
function AddAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}

/*----------  Add a node at the tail ----------*/
function AddAtTail(val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  this.size++;
}

/*----------  Add a node at the Index  ----------*/

function AddAtIndex(index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) {
    this.AddAtHead(val);
    return;
  }
  if (index == this.size) {
    this.AddAtTail(val);
    return;
  }
  let newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
}

/*=============================================
//>            Getting Method                            
=============================================*/

/*----------  Get Value at the Index  ----------*/

function Get(index) {
  if (this.size <= index || index < 0) {
    return -1;
  }
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.value;
}

/*----------  Delete Value at the Index  ----------*/

function DeleteAtIndex(index) {
  if (index < 0 || this.size <= index) return;
  else if (index === 0) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
  this.size--;
}
