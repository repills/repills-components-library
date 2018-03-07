'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _repillsConfig = require('repills-config');

var _repillsConfig2 = _interopRequireDefault(_repillsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorTypes = Object.keys(_repillsConfig2.default.types).reduce(function (acc, key) {
  var item = _repillsConfig2.default.types[key];
  acc.push({
    id: key,
    name: item.label.singular,
    value: item.color
  });
  return acc;
}, []);

exports.default = {
  name: 'Types',
  colors: colorTypes
};