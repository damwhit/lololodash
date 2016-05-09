var _ = require("lodash")

var worker = function (comments) {

  var results = [];
  var counted = _.groupBy(comments, 'username');

  _.forEach(counted, function (value, key) {
    results.push( {username: key, comment_count: _.size(value)});
  });

  return _.sortBy(results, 'comment-count').reverse();

}

module.exports = worker;
