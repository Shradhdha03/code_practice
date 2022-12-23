
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
    BFS() {
        let currentNode = this.root;
        let queue = [currentNode];
        let list = [];
        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        return list;
    }

    BFSResersive(queue, list) {
        if (!queue.length) return list;
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left !== null) queue.push(currentNode.left);
        if (currentNode.right !== null) queue.push(currentNode.right);
        return this.BFSResersive(queue, list);
    }
    BFSResersiveFn() {
        return this.BFSResersive([this.root], []);
    }

    DFSInOrder() {
        //1 4 6 9 15 20 170
        return this.traverseInOrder(this.root, []);
    }
    traverseInOrder(node, list) {
        if (node.left) this.traverseInOrder(node.left, list);
        list.push(node.value);
        if (node.right) this.traverseInOrder(node.right, list);
        return list;
    }
    DFSPreOrder() {
        //to REcreate a tree
        //9 4 1 6 20 15 170
        return this.traversePreOrder(this.root, []);
    }
    traversePreOrder(node, list) {
        list.push(node.value);
        if (node.left) this.traversePreOrder(node.left, list);
        if (node.right) this.traversePreOrder(node.right, list);
        return list;
    }
    DFSPostOrder() {
        //1 6 4 15 170 20 9
        return this.traversePostOrder(this.root, []);
    }
    traversePostOrder(node, list) {
        if (node.left) this.traversePostOrder(node.left, list);
        if (node.right) this.traversePostOrder(node.right, list);
        list.push(node.value);
        return list;
    }


    height() {
        return this.maxDepth(this.root);
    }
    maxDepth(node) {
        if (!node) return 0;
        let leftDepth = 0, rightDepth = 0;
        if (node.left) leftDepth = this.maxDepth(node.left);
        if (node.right) rightDepth = this.maxDepth(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    heightWithBFS() {
        let queue = [];
        let height = 0;
        if (this.root) queue.push(this.root);
        while (queue.length > 0) {
            let size = queue.length;
            for (let index = 0; index < size; index++) {
                let currentnode = queue.shift();
                if (currentnode.left) queue.push(currentnode.left);
                if (currentnode.right) queue.push(currentnode.right);
            }
            height += 1;
        }
        return height;
    }
    heightWithBFSRecursive() {
        let queue = [];
        let height = 0;
        if (this.root) queue.push(this.root);
        height = this.heightWithBFSRec(queue, height);
        return height;
    }

    heightWithBFSRec(queue, height) {
        if (queue.length == 0) return height;
        let size = queue.length;
        for (let index = 0; index < size; index++) {
            let currentnode = queue.shift();
            if (currentnode.left) queue.push(currentnode.left);
            if (currentnode.right) queue.push(currentnode.right);
        }
        height += 1;
        return this.heightWithBFSRec(queue, height);
    }
}
module.exports = BinaryTree;