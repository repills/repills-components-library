'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (date, days) {
  return (0, _moment2.default)().diff(date, 'days') < days;
};

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;