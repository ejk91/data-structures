var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var totalCount = 0;
  var firstCount = 1;
  var propertyCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    totalCount++;
    propertyCount++;
    storage[propertyCount] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[firstCount];
    delete storage[firstCount];
    if (totalCount > 0) {
      totalCount--;
      firstCount++;
    } 
    return result;
  };

  someInstance.size = function() {
    return totalCount;
  };

  return someInstance;
};
