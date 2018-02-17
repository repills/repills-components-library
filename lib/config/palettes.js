'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = require('polished');

var _repillsConfig = require('repills-config');

var _repillsConfig2 = _interopRequireDefault(_repillsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primary = '#7a08fa';

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
  basic: {
    name: 'Basic',
    colors: [{
      id: 'primaryLowest',
      name: 'Primary Lowest',
      value: (0, _polished.lighten)(0.4, primary)
    }, {
      id: 'primary',
      name: 'Primary',
      value: primary
    }, {
      id: 'primaryHighest',
      name: 'Primary Highest',
      value: (0, _polished.darken)(0.4, primary)
    }, {
      id: 'secondary',
      name: 'Secondary',
      value: '#ffdc2e'
    }]
  },
  neutral: {
    name: 'Neutral',
    colors: [{
      id: 'lowest',
      name: 'Lowest',
      value: '#fff'
    }, {
      id: 'lower',
      name: 'Lower',
      value: '#fafafa'
    }, {
      id: 'medium',
      name: 'Medium',
      value: '#e0e0e0'
    }, {
      id: 'high',
      name: 'High',
      value: '#666'
    }, {
      id: 'highest',
      name: 'Highest',
      value: '#1c2020'
    }]
  },
  types: {
    name: 'Types',
    colors: colorTypes
  }
};