/*
1046. Last Stone Weight

You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.
Return the weight of the last remaining stone. If there are no stones left, return 0.

Example 1:
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Example 2:
Input: stones = [1]
Output: 1

*/

class MyMaxPriorityQueue {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  enqueue(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] < this.heap[i]) {
        this.swap(parent, i);
        i = parent;
      } else {
        break;
      }
    }
  }

  dequeue() {
    let val = this.heap[0];
    let len = this.heap.length;
    this.swap(0, len - 1);
    this.heap.pop();
    this.heapifyDown(0);
    return val;
  }

  heapifyDown(i) {
    if (this.size < 1) return null;
    let len = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let largest = i;
      if (left < len && this.heap[largest] < this.heap[left]) {
        largest = left;
      }
      if (right < len && this.heap[largest] < this.heap[right]) {
        largest = right;
      }
      if (largest === i) break;
      this.swap(i, largest);
      i = largest;
    }
  }
}

function lastStoneWeight(nums) {
  let pq = new MyMaxPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
  }

  while (pq.size() > 1) {
    let y = pq.dequeue();
    let x = pq.dequeue();

    if (y - x > 0) {
      pq.enqueue(y - x);
    }
  }
  return pq.enqueue() || 0;
}

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
