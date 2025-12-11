/*
215. Kth Largest Element in an Array

Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

*/

function kthLargestElem(nums, k) {
  let pq = new MinPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.dequeue();
}

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val) {
    this.heap.push(val);
    let n = this.heap.length - 1;
    while (n > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] > this.heap[n]) {
        this.swap(parent, n);
        n = parent;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    ([this.heap[i], this.heap[j]] = this.heap[j]), this.heap[i];
  }

  dequeue() {
    if (this.heap.length < 1) return null;
    let top = this.heap[0];
    let len = this.heap.length;
    this.swap(0, len - 1);
    this.heap.pop();
    this.heapifyDown();

    return top;
  }

  heapifyDown() {
    let i = 0;
    let len = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let largest = i;

      if (left < len && this.heap[left] < this.heap[largest]) {
        largest = left;
      }

      if (right < len && this.heap[right] < this.heap[largest]) {
        largest = right;
      }

      if (largest === i) break;
      this.swap(largest, i);
      i = largest;
    }
  }
  size() {
    return this.heap.length;
  }
}

// console.log([3, 2, 1, 5, 6, 4], 2);
