'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QueryHandler(_ref) {
  var children = _ref.children;


  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.cloneElement(children, { breakpointsStatus: params });
    }
  );
}

QueryHandler.propTypes = {
  children: (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.object]).isRequired
};

exports.default = QueryHandler;