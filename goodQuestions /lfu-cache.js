class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.freq = 1;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addAtHead(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;
        this.size++
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--
    }

    removeLRU() {
        if (this.size == 0) return null
        let node = this.tail.prev;
        this.remove(node)
        return node;
    }
}

class LFU {
    constructor(capacity) {
        this.capacity = capacity;
        this.minFreq = 0;
        this.currSize = 0;

        this.nodeMap = new Map();
        this.freqMap = new Map()
    }

    updateFrequecy(node) {
        let oldFreq = node.freq;
        let oldList = this.freqMap.get(oldFreq);

        oldList.remove(node);

        if (oldFreq === this.minFreq && oldList.size === 0) {
            this.minFreq++
        }

        node.freq++

        let newList = this.freqMap.get(node.freq);

        if (!newList) {
            newList = new DoublyLinkedList();
            this.freqMap.set(node.freq, newList);
        }
        newList.addAtHead(node);
    }


    put(key, val) {
        if (this.capacity === 0) return;

        if (this.nodeMap.has(key)) {
            let node = this.nodeMap.get(key)
            node.val = val;
            this.updateFrequecy(node)
            return

        }

        if (this.currSize == this.capacity) {
            let list = this.freqMap.get(this.minFreq);

            let nodeRemoval = list.removeLRU()
            this.nodeMap.delete(nodeRemoval.key);
            this.currSize--
        }

        let newNode = new Node(key, val);
        this.minFreq = 1
        let list = this.freqMap.get(1);

        if (!list) {
            list = new DoublyLinkedList();
            this.freqMap.set(1, list);
        }

        list.addAtHead(newNode);
        this.nodeMap.set(key, newNode);
        this.currSize++

    }

    get(key) {
        if (!this.nodeMap.has(key)) {
            return -1;
        }
        let node = this.nodeMap.get(key);
        let val = node.val;
        this.updateFrequecy(node);
        return val

    }
}

