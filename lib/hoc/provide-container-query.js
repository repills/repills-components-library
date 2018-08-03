'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../config/breakpoints');

var _queryContext = require('../context/query-context');

var _queryContext2 = _interopRequireDefault(_queryContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProvideContainerQuery = function ProvideContainerQuery(Component) {
  var Container = function Container(props) {
    return _react2.default.createElement(
      _queryContext2.default.Provider,
      { value: props.containerQuery },
      _react2.default.createElement(Component, props)
    );
  };
  var withContainerQuery = (0, _reactContainerQuery.applyContainerQuery)(Container, _breakpoints.query);
  withContainerQuery.displayName = Component.displayName || Component.name;
  return withContainerQuery;
};

exports.default = ProvideContainerQuery;