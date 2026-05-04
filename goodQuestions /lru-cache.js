class Node {
    constructor(key, val) {
        this.val = val;
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}

class linkedList {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map()

        this.head = null;
        this.tail = null;

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    #remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    #add(node) {
        node.next = this.head.next
        node.prev = this.head;
        this.head.next.prev = node
        this.head.next = node
    }

    put(key, val) {
        if (this.map.has(key)) {
            this.#remove(this.map.get(key))
        }

        let newNode = new Node(key, val);
        this.#add(newNode);
        this.map.set(key, newNode);

        if (this.map.size > this.capacity) {
            let lru = this.tail.prev
            this.#remove(lru)
            this.map.delete(lru.key)
        }
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        const node = this.map.get(key);
        this.#remove(node);
        this.#add(node);
        return node.val;
    }
}
