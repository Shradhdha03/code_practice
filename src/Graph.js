class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertax(node) {
        if (this.adjacentList[node] === undefined) {
            this.adjacentList[node] = [];
        }
        return this.adjacentList;
    }

    addEdge(node1, node2) {
      
        if (this.adjacentList[node1] && !(this.adjacentList[node1]).includes(node2)) {
            this.adjacentList[node1].push(node2);
        }
        if (this.adjacentList[node2] && !(this.adjacentList[node2]).includes(node1)) {
            this.adjacentList[node2].push(node1);
        }
        return this.adjacentList;
    }

}
module.exports = Graph;