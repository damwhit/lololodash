var ld = require("lodash")

var worker = function (coll) {

  var grouped = ld.groupBy(coll, 'article');

  function reduced(total, value, key) {
    total += value.quantity;
    return total;
  };

  var results = [];
  ld.forEach(grouped, function(value, key) {
    results.push({article: parseInt(key), total_orders: ld.reduce(value, reduced, 0)})
  });

  return ld.sortBy(results, 'total_orders').reverse();
};

module.exports = worker;
