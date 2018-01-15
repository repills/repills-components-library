'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (resources) {
  var sourcesCount = resources.length;
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
    }

    return stats;
  }, []);

  stats.map(function (item) {

    var typeConfig = _repillsConfig.types[item.type];
    item.percentage = Math.round(item.count * 100 / sourcesCount);
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