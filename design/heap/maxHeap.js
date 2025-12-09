class MaxHeap {
  constructor() {
    this.heap = [];
  }
  get_left_index(i) {
    return 2 * i + 1;
  }
  get_right_index(i) {
    return 2 * i + 2;
  }
  get_parent_index(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let n = this.heap.length - 1;
    this.heapifyUp(n);
  }
  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.get_parent_index(i);
      if (this.heap[parentIndex] < this.heap[i]) {
        [this.heap[parentIndex], this.heap[i]] = [
          this.heap[i],
          this.heap[parentIndex],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  extract() {
    let lastIndex = this.heap.length - 1;
    let val = this.heap[0];
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
    this.heap.pop();
    this.heapifyDown(0);
    return val;
  }
  heapifyDown(i) {
    let leftIndex = this.get_left_index(i);
    let rightIndex = this.get_right_index(i);
    let largest = i;
    if (
      leftIndex < this.heap.length &&
      this.heap[largest] < this.heap[leftIndex]
    ) {
      largest = leftIndex;
    }
    if (
      rightIndex < this.heap.length &&
      this.heap[largest] < this.heap[rightIndex]
    ) {
      largest = rightIndex;
    }

    if (largest !== i) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this.heapifyDown(largest);
    }
  }
}

let heap = new MaxHeap();
heap.insert(3);
heap.insert(10);
heap.insert(40);
heap.insert(30);
heap.insert(8);
heap.insert(6);
heap.insert(1);
// console.log(heap); // [ 40, 30, 10, 3, 8,  6,  1]
// console.log(heap.extract()); // 40
// console.log(heap.extract()); // 30
// console.log(heap); // [ 10, 3, 8,  6,  1]
