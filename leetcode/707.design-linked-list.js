// Design A Linked List

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
  let newNode = new Node(val);
  if (this.head == null) {
    this.AddAtHead(val);
    return;
  } else if (index == this.size) {
    this.AddAtTail(val);
    return;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode = curr.next;
    curr.next = newNode;
  }
  this.size++;
}
