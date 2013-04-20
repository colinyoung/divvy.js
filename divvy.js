'use strict';

var inflection = require('inflection');

var divvy = function(obj) {
  var divvied = [];

  if (typeof obj !== "object") {
    throw new Error('Divvy can only work on objects');
  }

  var k = Object.keys(obj)[0];
  var array = obj[k];

  // Requires that all inner arrays are the same length
  for (var i = 0; i < array.length; i++) {

    var tuple = {};
    for (var field in obj) {
      if (obj.hasOwnProperty(field)) {
        var value = obj[field][i],
            singularized = inflection.singularize(field);
        tuple[singularized] = value;
      }
    }
    divvied.push(tuple);
  }

  return divvied;
};

module.exports = divvy;