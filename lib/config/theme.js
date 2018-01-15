'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = require('polished');

var _breakpoints = require('./breakpoints');

var primary = '#7a08fa';

exports.default = {
  palettes: {
    basic: {
      primary: primary,
      primaryHighest: (0, _polished.darken)(0.4, primary),
      secondary: '#ffdc2e'
    },
    neutral: {
      lowest: '#fff',
      highest: '#000'
    },
    mood: {}
  },
  breakpoints: _breakpoints.query
};