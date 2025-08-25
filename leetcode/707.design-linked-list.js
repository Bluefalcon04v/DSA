// Design A Linked List

//
/*----------  defining a NODE  ----------*/

function Node(val) {
  this.val = val;
  this.next = null;
}

let newNode = new Node(6);

/*----------  defining a Linked List  ----------*/

function MylinkedList() {
  this.head = null;
  this.size = 0;
}
