/*
232. Implement Queue using Stacks  Queue Data Structure

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

*/

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

MyQueue.prototype.push = function (x) {
  return this.s1.push(x);
};

MyQueue.prototype.pop = function () {
  let n = this.s1.length;
  for (let i = 0; i < n - 1; i++) {
    let topElem = this.s1.pop();
    this.s2.push(topElem);
  }
  let ans = this.s1.pop();

  let n2 = this.s2.length;
  for (let i = 0; i < n2; i++) {
    let topElem = this.s2.pop();
    this.s1.push(topElem);
  }
  return ans;
};

MyQueue.prototype.peek = function () {
  let n = this.s1.length;
  for (let i = 0; i < n - 1; i++) {
    let topElem = this.s1.pop();
    this.s2.push(topElem);
  }
  let ans = this.s1.pop();
  this.s2.push(ans);

  let n2 = this.s2.length;
  for (let i = 0; i < n2; i++) {
    let topElem = this.s2.pop();
    this.s1.push(topElem);
  }
  return ans;
};

MyQueue.prototype.empty = function () {
  return this.s1.length === 0;
};
