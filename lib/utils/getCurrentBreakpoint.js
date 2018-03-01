'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (statusBreakpoints) {
  var current = null;

  _breakpoints.queryList.forEach(function (b) {
    if (statusBreakpoints[b]) {
      current = b;
    }
  });

  return current;
};

var _breakpoints = require('../config/breakpoints');

;