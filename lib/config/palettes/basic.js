'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = require('polished');

var primary = '#ffda00'; // '#7540EE';

exports.default = {
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
    value: (0, _polished.darken)(0.05, primary)
  }, {
    id: 'secondary',
    name: 'Secondary',
    value: '#7a08fa' // '#00d664'
  }]
};