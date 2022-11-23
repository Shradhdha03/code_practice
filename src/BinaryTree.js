
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (this.root == null) {
            this.root = node;
        } else {
            let currentNode = this.traverseTree(this.root, value);
            if (currentNode) {
                if (currentNode.value > value && currentNode.left == null) {
                    currentNode.left = node;
                } else if (currentNode.value < value && currentNode.right == null) {
                    currentNode.right = node;
                }
            }
        }
        return this.root;
    }


    traverseTree(node, value) {
        if (node.value > value) {
            return this.treverseASide('left', node, value);
        } else if (node.value < value) {
            return this.treverseASide('right', node, value);
        }
    }

    treverseASide(side, node, value) {
        if (node[side] === null) {
            return node;
        } else {
            return this.traverseTree(node[side], value);
        }
    }


    traverseLookupTree(node, value, parenNode, side) {
        if (node) {
            if (node.value > value) {
                return this.traverseLookupTree(node.left, value, node, 'left');
            } else if (node.value < value) {
                return this.traverseLookupTree(node.right, value, node, 'right');
            } else if (node.value == value) {
                return [node, parenNode, side];
            }
        }
        return false;
    }


    lookup(value) {
        if (this.root) {
            let currentNode = this.traverseLookupTree(this.root, value);
            if (currentNode && currentNode[0].value == value) {
                return true;
            }
        }
        return false;
    }



    remove(value) {
        let [node, parentNode, side] = this.traverseLookupTree(this.root, value);
        //removing last child nodes
        if (node && node.left == null && node.right == null) {
            if (parentNode) {
                parentNode[side] = null;
            } else {
                //removing root node
                return null;
            }
        } else if (node && node.left && node.left.right === null) {
            if (parentNode) {
                const NCNode = node.left;
                parentNode[side] = NCNode;
                NCNode['right'] = node.right;
            } else {
                const RCnode = node.right;
                this.root = node.left;
                this.root.right = RCnode;
            }
        } else if (node && node.left && node.left.right !== null) {

        } else if (node && node.right && node.right.left == null) {
            if (parentNode) {
                const NCNode = node.right;
                parentNode[side] = NCNode;
            } else {
                const LCnode = node.left;
                this.root = node.right;
                this.root.left = LCnode;
            }
        } else if (node && node.right && node.right.left !== null) {
        }
        return this.root;
    }
}
module.exports = BinaryTree;