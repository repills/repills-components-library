'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _queryContext = require('../context/query-context');

var _queryContext2 = _interopRequireDefault(_queryContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsumeContainerQuery = function ConsumeContainerQuery(Component) {
  var Wrapper = function Wrapper(props) {
    return _react2.default.createElement(
      _queryContext2.default.Consumer,
      null,
      function (query) {
        return _react2.default.createElement(Component, _extends({}, props, {
          breakpointsStatus: query
        }));
      }
    );
  };
  Wrapper.displayName = Component.displayName || Component.name;
  return Wrapper;
};

exports.default = ConsumeContainerQuery;