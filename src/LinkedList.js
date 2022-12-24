class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepand(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
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
    insert(index, value) {
        if (index >= this.length) {
            this.append(value);
        } else if (index == 0) {
            this.prepand(value);
        } else {
            const leader = this.traverseToTheNode(index - 1);
            const newNode = new Node(value);
            newNode.next = leader.next
            leader.next = newNode;
            this.length++;
        }

    }
    traverseToTheNode(index) {
        let count = 0;
        let curruntNode = this.head;
        while (count < index) {
            curruntNode = curruntNode.next;
            count++;
        }
        return curruntNode;
    }
    remove(index) {
        if (this.length && index == 0) {
            this.head = this.head.next;
            this.length--;
        } else if (index < this.length) {
            const leader = this.traverseToTheNode(index - 1);
            const deleteNode = leader.next;
            leader.next = deleteNode.next;
            if (index == this.length - 1) {
                this.tail = leader;
            }
            this.length--;
        }
    }
    reverse() {
        const old_list = this.head;
        let node = new Node(old_list.value);
        this.head = node;
        this.tail = node;
        this.length = 1;
        let current_node = old_list.next;
        while (current_node) {
            this.prepand(current_node.value);
            current_node = current_node.next;
        }
    }
    reverseRec(){
        const old_list = this.head;
        let node = new Node(old_list.value);
        this.head = node;
        this.tail = node;
        this.length = 1;
        this.prepandRec(old_list.next)
    }
    prepandRec(current_node){
        if(current_node===null){
            return;
        }
        this.prepand(current_node.value);
        current_node = current_node.next;
        return this.prepandRec(current_node);
    }
}
module.exports = LinkedList;