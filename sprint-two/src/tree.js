var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  
  this.children.push(Tree(value));
  
};

treeMethods.contains = function(target) {
  // var isTrue = false;
  // console.log(this.children);
  // for (var i = 0; i < this.children.length; i++) {
  //   if (this.children[i].value === target) {
  //     isTrue = true;
  //     return isTrue;
  //   } else if (this.contains(this.children[i]) === false) {
  //     return this.contains(this.children[i].children);
  //   }
  // }
  // return isTrue;

  // var isTrue = false;
  // for (var i = 0; i < this.children.length; i++) {
  //   console.log(this.children[i].value)
  //   if (this.children.length > 0) {

  //     return true;
  //     console.log(this.children[i].children);
  //   } else if (this.children[i].children.length > 0) {
  //     return this.children[i].contains(target);
  //   }
  // }
  // return isTrue; 

  var isTrue = true;
  for (var i = 0; i > this.children.length; i++) {
    if (this.children[i].value !== target) {
      return this.children[i].children.contains(target);
      
    } else {
      isTrue = true;
    }
  }
  return isTrue;

  // var isTrue = false;
  // for (var i = 0; i > this.children.length; i++) {
  //   if (this.children[i].value === target) {
  //     return true;
  //   } else if (this.children[i].value !== target) {
  //     return this.children[i].children.contains(target);
  //   }
  // }
  // return isTrue;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
