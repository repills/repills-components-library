'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (resources, relative) {
  var sourcesCount = resources.length;
  var maxNumberPerType = 1;
  var stats = resources.reduce(function (stats, resource) {

    var type = resource.frontmatter.type[0];
    var elemIndex = stats.findIndex(function (e) {
      return e.type === type;
    });

    if (elemIndex === -1) {
      stats.push({
        type: type,
        count: 1
      });
    } else {
      stats[elemIndex].count += 1;

      if (relative && stats[elemIndex].count > maxNumberPerType) {
        maxNumberPerType = stats[elemIndex].count;
      }
    }

    return stats;
  }, []);

  stats.map(function (item) {

    var typeConfig = _repillsConfig.types[item.type];
    var sourceCountBase = relative ? maxNumberPerType : sourcesCount;
    item.percentage = Math.round(item.count * 100 / sourceCountBase);
    item.label = typeConfig[item.count === 1 ? 'singular' : 'plural'];
    item.color = typeConfig.color;

    return item;
  });

  stats.sort(function (a, b) {
    return b.count - a.count;
  });

  return stats;
};

var _repillsConfig = require('repills-config');

;