var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {
    storage: {},
    count: 0  
  };
  
  _.extend(newInstance, stackMethods);
  return newInstance;
};

var stackMethods = {
  pop: function () {
    var popped = this.storage[this.count];
    if (this.count > 0) {
      this.count--;
    }
    return popped;
  },
  
  push: function (value) {
    this.count++;
    this.storage[this.count] = value;
  },
  
  size: function () {
    return this.count;
  },
};


