var ld = require("lodash");

var worker = function(stuff) {
  return ld.template('Hello <%= name %> (logins: <%= count %>)')({ name: stuff.name, count: ld.size(stuff.login) });
};

module.exports = worker;
