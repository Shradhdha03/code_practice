class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peak() {
        if (this.top && this.top.value !== null) {
            return this.top.value;
        }
        return null;
    }

    push(value) {
        const node = new Node(value);
        if (this.top !== null && this.top.value != null) {
            node.next = this.top;
            this.top = node;
        } else {
            this.top = node;
            this.bottom = node;
        }
        this.length++;
    }

    pop() {
        if (this.top && this.top.next) {
            this.top = this.top.next;
        } else {
            this.top = null;
            this.bottom = null
        }
        this.length--;

    }

}



module.exports = Stack;

