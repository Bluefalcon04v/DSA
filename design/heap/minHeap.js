class MinHeap {
  constructor() {
    this.heap = [5, 10, 20, 30];
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);

      if (this.heap[parentIndex] > this.heap[i]) {
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
}

let heap = new MinHeap();

heap.insert(23);
heap.insert(2);
heap.insert(3);
heap.insert(1);

// console.log(heap);
