class Node {
    constructor(key, val) {
        this.val = val
        this.key = key
        this.next = null
        this.prev = null
    }
}

class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    #remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    #add(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;

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
        if (!this.map.has(key)) return -1
        let node = this.map.get(key)
        this.#remove(node)
        this.#add(node)
        return node.val
    }
}

let lru = new LRU(2);
lru.put(1, 1)
lru.put(2, 2)
console.log(lru.get(2)) //2
lru.put(3, 3)
lru.put(4, 4)
lru.put(1, 1)
console.log(lru.get(3)) // -1
console.log(lru) // 1 ==> 4

