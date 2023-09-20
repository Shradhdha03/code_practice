class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
    }

    prepand(value) {
        const node = new Node(value);
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    printList() {
        let list = [];
        let currunt_node = this.head;
        while (currunt_node) {
            list.push(currunt_node.value);
            currunt_node = currunt_node.next;
        }
        return list;
    }

    insert(index, value){
        
    }
}
module.exports = DoublyLinkList;