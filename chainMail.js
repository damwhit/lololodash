var _ = require("lodash");

var worker = function(words) {
  return _.chain(words)
  .map(function(word) {
    return word.toUpperCase() + 'CHAINED';
  })
  .sortBy()
  .value()
}

module.exports = worker;
