

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage) {
    this.removeEdge(key, node);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values 
// contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFromNode = this.storage[fromNode].indexOf(toNode);
  var indexToNode = this.storage[toNode].indexOf(fromNode);
  this.storage[fromNode].splice(indexFromNode, 1);
  this.storage[toNode].splice(indexToNode, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //loop through each node 
    // run callback function on the node
  for (var key in this.storage) {
  //   //this.storage[key] = cb(key);
  //   //this.storage[key] = cb(key);
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


