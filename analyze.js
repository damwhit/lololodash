var ld = require("lodash");

var worker = function (incomes) {
  incomes = ld.sortBy(incomes, 'income')

  var average = ld.reduce(incomes, function(sum, income) {
    return sum + income.income;
  }, 0);

  average = average / incomes.length;

  var under = ld.filter(incomes, function(income) {
    return income.income <= average;
  });

  var over = ld.filter(incomes, function(income) {
    return income.income > average;
  });

  return { average: average, underperform: under, overperform: over}
};

module.exports = worker;
