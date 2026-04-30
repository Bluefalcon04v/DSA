// ---------------------------------------- BRUTE FORCE -----------------------------------------------
// Time = O(n^2 log n)
class MedianFinderBrute {
    constructor() {
        this.array = [];
    };

    add(val) {
        this.array.push(val)
        this.array.sort((a, b) => a - b);
    };

    findMedian() {
        let len = this.array.length;
        if (len % 2 != 0) {
            return this.array[Math.floor(len / 2)]
        }
        else {
            let mid = len / 2;
            return (this.array[mid] + this.array[mid - 1]) / 2;
        }
    }
}

// ---------------------------------------- OPTIMIZED ------------------------------------------------


class Heap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    parentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    leftIndex(i) {
        return (2 * i) + 1;
    }
    rightIndex(i) {
        return (2 * i) + 2;
    }
    peek() {
        if (this.size() === 0) return null;
        return this.heap[0];
    }
}

class MaxHeap extends Heap {
    insert(val) {
        this.heap.push(val);
        let lastIndex = this.size() - 1
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i) {
        while (i > 0) {
            let parent = this.parentIndex(i);
            if (this.heap[parent] < this.heap[i]) {
                this.swap(parent, i);
                i = parent
            }
            else {
                break;
            }
        }
    }

    remove() {
        if (this.size() === 0) return null;
        this.swap(0, this.size() - 1);
        const removed = this.heap.pop();
        if (this.size() > 0) {
            this.heapifyDown(0);
        }
        return removed;
    }

    heapifyDown(i) {
        while (this.leftIndex(i) < this.size()) {
            let left = this.leftIndex(i)
            let right = this.rightIndex(i)
            let maxIndex = left;

            if (right < this.size() && this.heap[left] < this.heap[right]) {
                maxIndex = right
            };

            if (this.heap[maxIndex] > this.heap[i]) {
                this.swap(maxIndex, i);
                i = maxIndex
            }
            else {
                break;
            }
        }
    }
}

class MinHeap extends Heap {
    insert(val) {
        this.heap.push(val);
        let lastIndex = this.size() - 1;
        this.heapifyUp(lastIndex);
    }
    heapifyUp(i) {
        while (i > 0) {
            let parent = this.parentIndex(i);
            if (this.heap[parent] > this.heap[i]) {
                this.swap(parent, i);
                i = parent
            }
            else {
                break;
            }
        }
    }
    remove() {
        if (this.size() === 0) return null;
        this.swap(0, this.size() - 1);
        const removed = this.heap.pop();
        if (this.size() > 0) {
            this.heapifyDown(0);
        }
        return removed;
    }

    heapifyDown(i) {
        while (this.leftIndex(i) < this.size()) {
            let left = this.leftIndex(i);
            let right = this.rightIndex(i);
            let minIndexELem = left;

            if (right < this.size() && this.heap[left] > this.heap[right]) {
                minIndexELem = right;
            }

            if (this.heap[minIndexELem] < this.heap[i]) {
                this.swap(minIndexELem, i);
                i = minIndexELem;
            }
            else {
                break;
            }
        }
    }
}

class MedianFinder {
    constructor() {
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
    }

    add(val) {
        this.maxHeap.insert(val);
        this.minHeap.insert(this.maxHeap.remove());
        if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.insert(this.minHeap.remove());
        }
    }
    findMedian() {
        let minHeapSize = this.minHeap.size();
        let maxHeapSize = this.maxHeap.size();
        let minElementPeek = this.minHeap.peek();
        let maxElementPeek = this.maxHeap.peek();
        if (minHeapSize > maxHeapSize) {
            return minElementPeek;
        } else if (maxHeapSize > minHeapSize) {
            return maxElementPeek;
        } else {
            return (maxElementPeek + minElementPeek) / 2;
        }
    }
}
let heap = new MedianFinder()
heap.add(-1)
console.log(heap.findMedian()) // -1
heap.add(-2)
console.log(heap.findMedian()) // -1.5
heap.add(-3)
console.log(heap.findMedian()) // -2
heap.add(-5)
console.log(heap.findMedian()) // -2.5
