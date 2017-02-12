var BinarySearchTree = function(value) {
  var newBST = {};

  newBST.value = value;
  newBST.left = null; // all values are lower than the value value
  newBST.right = null; // all values that are higher than the current value

  _.extend(newBST, BinarySearchTree.methods);

  return newBST;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
  // base case : newBST.value === value 
    //exit out of the function
  if (this.value === value) {
    return;
  }
  // check if value is greater than head
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    //check if head.right === null
      // if true head.right = value
      // else run insert on head.right
    }
  }  
  // check if value is less than head
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    // check if head.left === null
      // if true head.left = value
      // else run insert on head.left  
    }
  }

};

BinarySearchTree.methods.contains = function(value) {
  // check if current value equal to desired value - base case
  if (this.value === value) {
    // if return true
    return true;
  } else {
    if (value < this.value) {
      if (this.left !== null) {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        return this.right.contains(value);
      }
    }
    return false;
  }
  // check if desired value is than current value
    // if less than - check left child - contains
    // if greater than - check right child - contains
};

BinarySearchTree.methods.depthFirstLog = function(func) {
  func(this.value);
  if (!!this.right) {
    this.right.depthFirstLog(func);
  }
  if (!!this.left) {
    this.left.depthFirstLog(func);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
