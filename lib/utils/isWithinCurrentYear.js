'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (date) {
  return (0, _moment2.default)(date).year() === (0, _moment2.default)().year();
};

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;