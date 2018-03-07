'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = require('polished');

var primary = '#7a08fa';

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
    value: (0, _polished.darken)(0.4, primary)
  }, {
    id: 'secondary',
    name: 'Secondary',
    value: '#ffdc2e'
  }]
};