export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(name) {
    // As we can see, the implementation is simple. We use Map.prototype.set() to add a key-value pair to our adjacencyList. The key will be the name of the node we are adding and the value will be an empty Set.
    this.adjacencyList.set(name, new Set());
  }

  hasNode(name) {
    if (this.adjacencyList.get(name)) {
      return true;
    }
    return false;
  }

  createEdge(node1, node2) {
    let set1 = this.adjacencyList.get(node1);
    let set2 = this.adjacencyList.get(node2);
    set1.add(node2);
    set2.add(node1);
  }

  hasEdge(node1, node2) {
    if (this.adjacencyList.get(node1).has(node2)) {
      return true;
    }
    return false;
  }

  removeEdge(node1, node2) {
    this.adjacencyList.get(node1).delete(node2);
    this.adjacencyList.get(node2).delete(node1);
  }

  removeNode(name) {
    //We use arrow notation (=>) so that this.adjacencyList remains bound to the same this both inside and outside the loop. If it weren't for =>, the this inside the loop would lose its binding and be undefined.
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).forEach((edge) => {
        this.adjacencyList.get(edge).delete(name);
      });
      this.adjacencyList.delete(name);
    }
  }
}