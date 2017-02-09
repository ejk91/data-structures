var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.totalCount = 0;
  this.firstCount = 1;
  this.propertyCount = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function (value) {
  this.totalCount++;
  this.propertyCount++;
  this.storage[this.propertyCount] = value;
}; 

Queue.prototype.dequeue = function () {
  var dq = this.storage[this.firstCount];
  delete this.storage[this.firstCount];
  if (this.totalCount > 0) {
    this.firstCount++;
    this.totalCount--; 
  }
  return dq;
};

Queue.prototype.size = function () {
  return this.totalCount;
}; 


