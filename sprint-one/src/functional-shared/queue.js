var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {
    storage: {},
    totalCount: 0,
    firstCount: 1,
    propertyCount: 0
  };
  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.propertyCount++;
    this.storage[this.propertyCount] = value;
    this.totalCount++;

  },

  dequeue: function() {
    var dq = this.storage[this.firstCount];
    delete this.storage[this.firstCount];
    if (this.totalCount > 0) {
      this.totalCount--;
      this.firstCount++;
    }

    return dq;
  },

  size: function() {
    return this.totalCount;
  }

};


