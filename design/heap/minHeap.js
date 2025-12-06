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

  peek() {
    if (this.heap.length < 1) return null;
    return this.heap[0];
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

  extract() {
    if (this.heap.length < 1) return null;

    let lastIndex = this.heap.length - 1;
    let val = this.heap[0];

    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];

    this.heap.pop();
    this.heapifyDown(0);

    return val;
  }

  heapifyDown(i) {
    let length = this.heap.length;

    let leftIndex = this.getLeftIndex(i);
    let rightIndex = this.getRightIndex(i);

    let smallest = i;

    if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
      smallest = leftIndex;
    }

    if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
      smallest = rightIndex;
    }

    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }
}

let heap = new MinHeap();

heap.insert(23);
heap.insert(2);
heap.insert(3);
heap.insert(1);

// console.log(heap.extract());

// console.log(heap);
