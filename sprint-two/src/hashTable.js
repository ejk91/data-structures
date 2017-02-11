

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.storage = [];
};

HashTable.prototype.insert = function(key, value) { //set
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[key, value]]);
  } else if (this._storage.get(index)[0][0] === key) { // override
    this._storage.get(index)[0][1] = value;
  } else {
    this._storage.get(index).push([key, value]); // writes if return undefined
  }
};



HashTable.prototype.retrieve = function(key) { //get
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if ( bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //console.log(this._storage[index]);

  this._storage.set(index, undefined);

  //find arrays at index - how do I access storage?
    //loop through the arrays 
      // if property equal key
        // remove array itself


  // if(this._storage )
  // for (var i = 0; i < this._storage.length; i++) {
  //   if ( === key) {
  //     delete this._storage[key];
  //   }
  // }  

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


