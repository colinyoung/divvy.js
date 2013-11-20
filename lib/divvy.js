'use strict';

var inflection = require('inflection');

var divvy = function(obj, options) {
  var divvied = [],
      options = options || {};

  if (typeof obj !== "object") {
    throw new Error('Divvy can only work on objects');
  }

  var createTuple = function(obj, i, j) {
    var tuple = {}, k = 0;
    for (var field in obj) {
      if (!obj.hasOwnProperty(field)) {
        continue;
      }

      var value = obj[field][i],
          singularized = inflection.singularize(field);

      if (!value) return;

      if (typeof j !== "undefined" && k > 0) {
        value = obj[field][j];
      }

      k++;
      tuple[singularized] = value;
    }
    divvied.push(tuple);
  }

  var longest = 0;
  if (!!options.multiply) {
    // Find the longest array
    for (var f in obj) {
      var array = obj[f];
      if (array.length > longest) {
        longest = array.length; // New longest found
      }
    }
  } else {
    // Use the first array for speed
    var k = Object.keys(obj)[0];
    var array = obj[k];
    longest = array.length;
  }

  // Requires that all inner arrays are the same length
  for (var i = 0; i < longest; i++) {

    
    if (!options.multiply) {
      // No multiply, just divvy
      createTuple(obj, i);
    } else {
      // Multiply longest by the shortest. Currently only supports objects with 2 keys.
      var k = Object.keys(obj)[1];
      var array = obj[k];
      var shortest = array.length;

      // Add the multiplication of this row
      for (var j = 0; j < shortest; j++) {
        createTuple(obj, i, j);
      }
    }
  }
  
  return divvied;
};

module.exports = divvy;
