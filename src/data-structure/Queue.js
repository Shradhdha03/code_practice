class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    queue(value) {
        let node = new Node(value);
        if (this.length == 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }
    dequeue() {
        if (this.length > 1) {
            this.first = this.first.next;
        } else {
            this.first = null;
            this.last = null;
        }
        this.length--;
    }
    peak() {
        return this.first;
    }
}

module.exports = Queue;