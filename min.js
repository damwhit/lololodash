var _ = require("lodash");


var groupByTemp = function(towns) {

    var groups = {
      hot:  [],
      warm: []
    }

    function checkTemp(town) {
        return town > 19;
    }

    _.forEach(towns, function(town, townName) {
        if (_.every(town, checkTemp)) {
            groups.hot.push(townName);
        } else if (_.some(town, checkTemp)) {
            groups.warm.push(townName);
        }
    });

    return groups;
};

module.exports = groupByTemp;
