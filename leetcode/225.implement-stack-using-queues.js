/*
225. Implement Stack using Queues Stack Data Structure

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 
*/

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  // using 1 Queues only
  let n = this.q1.length;

  for (let i = 0; i < n - 1; i++) {
    let frontElem = this.q1.shift();
    this.q1.push(frontElem);
  }

  let ans = this.q1.shift();
  return ans;

  //using 2 Queues

  // let n = this.q1.length;
  // for (let i = 0; i < n - 1; i++) {
  //     let frontElem = this.q1.shift()
  //     this.q2.push(frontElem)
  // }

  // let ans = this.q1.shift()

  // let temp = this.q1
  // this.q1 = this.q2
  // this.q2 = temp

  // return ans
};

MyStack.prototype.top = function () {
  // using 1 Queues only
  let n = this.q1.length;

  for (let i = 0; i < n - 1; i++) {
    let frontElem = this.q1.shift();
    this.q1.push(frontElem);
  }

  let frontElem = this.q1.shift();

  this.q1.push(frontElem);

  return frontElem;

  //using 2 Queues

  // let n = this.q1.length
  // for (let i = 0; i < n - 1; i++) {
  //     let frontElem = this.q1.shift()
  //     this.q2.push(frontElem)
  // }
  // let frontElem = this.q1[0]

  // this.q2.push(this.q1.shift())

  // let temp = this.q1
  // this.q1 = this.q2
  // this.q2 = temp

  // return frontElem
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};
