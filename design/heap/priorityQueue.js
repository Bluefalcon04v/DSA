class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }
  enqueue(val, priority) {
    this.heap.push({ val, priority });
    this.heapifyUp();
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent].priority < this.heap[i].priority) {
        this.swap(i, parent);
        i = parent;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  dequeue() {
    if (this.heap.length < 1) return null;
    let max = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return max;
  }

  heapifyDown() {
    let i = 0;
    let len = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let largest = i;

      if (
        left < len &&
        this.heap[left].priority > this.heap[largest].priority
      ) {
        largest = left;
      }
      if (
        right < len &&
        this.heap[right].priority > this.heap[largest].priority
      ) {
        largest = right;
      }

      if (largest === i) break;
      this.swap(largest, i);
      i = largest;
    }
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
}

let pq = new MaxPriorityQueue();
pq.enqueue("A", 10);
pq.enqueue("B", 1);
pq.enqueue("C", 20);
pq.enqueue("D", 0);
pq.enqueue("E", 5);
pq.enqueue("F", 110);

// console.log(pq);
//  heap: [
//     { val: 'F', priority: 110 },
//     { val: 'E', priority: 5 },
//     { val: 'C', priority: 20 },
//     { val: 'D', priority: 0 },
//     { val: 'B', priority: 1 },
//     { val: 'A', priority: 10 }
//   ]
// console.log(pq.peek()); // { val: 'F', priority: 110 }
// console.log(pq.dequeue()); // { val: 'F', priority: 110 }
// console.log(pq);
// heap: [
//     { val: 'C', priority: 20 },
//     { val: 'E', priority: 5 },
//     { val: 'A', priority: 10 },
//     { val: 'D', priority: 0 },
//     { val: 'B', priority: 1 }
//   ]
