var _ = require("lodash")

var sorted = function(items) {
  return _.reverse(_.sortBy(items, 'quantity'))
}

module.exports = sorted;
