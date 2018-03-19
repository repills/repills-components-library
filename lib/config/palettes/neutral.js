'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = require('polished');

var highest = '#1c2020';
var lowest = '#fff';

exports.default = {
  name: 'Neutral',
  colors: [{
    id: 'lowest',
    name: 'Lowest',
    value: lowest
  }, {
    id: 'lower',
    name: 'Lower',
    value: (0, _polished.lighten)(.85, highest)
  }, {
    id: 'low',
    name: 'Low',
    value: (0, _polished.lighten)(.75, highest)
  }, {
    id: 'medium',
    name: 'Medium',
    value: (0, _polished.lighten)(.5, highest)
  },
  /*
  {
    id: 'mediumHigh',
    name: 'Medium High',
    value: '#a0a0a0'
  },
  */
  {
    id: 'high',
    name: 'High',
    value: (0, _polished.lighten)(.2, highest)
  }, {
    id: 'higher',
    name: 'Higher',
    value: (0, _polished.lighten)(.1, highest)
  }, {
    id: 'highest',
    name: 'Highest',
    value: highest
  }]
};