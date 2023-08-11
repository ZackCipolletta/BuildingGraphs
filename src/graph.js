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
}