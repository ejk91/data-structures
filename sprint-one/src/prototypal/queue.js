var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.totalCount = 0;
  newQueue.storage = {};
  newQueue.firstCount = 1;
  newQueue.propertyCount = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.totalCount++;
  this.propertyCount++;
  this.storage[this.propertyCount] = value;
};

queueMethods.dequeue = function() {
  var dq = this.storage[this.firstCount];
  delete this.storage[this.firstCount];
  if (this.totalCount > 0) {
    this.totalCount--;
    this.firstCount++;
  }
  return dq;
};

queueMethods.size = function() {
  return this.totalCount;
};


