var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    list.head.next = newNode;
    list.tail = newNode;

//{head: {value: 5;, next: tail}, tail: {value: 5, next: null}}

  };

  list.removeHead = function() {
    if (!list.head) {
      return null;
    }
    var oldHead = list.head.value;
    //console.log('old head', this.head);
    //console.log(this.head.next);
    this.head = this.head.next;
    //console.log('new head', this.head);
    return oldHead;
  };

  list.contains = function(target) {
   //value = target
   //if not current's next
   //start at head node
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) { //creates the node itself with info
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
