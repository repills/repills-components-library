'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QueryHandler(_ref) {
  var component = _ref.component,
      componentProps = _ref.componentProps;


  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      var Component = component;
      return _react2.default.createElement(Component, _extends({}, componentProps, {
        breakpointsStatus: params
      }));
    }
  );
}

QueryHandler.propTypes = {
  component: (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.object]).isRequired,
  componentProps: _propTypes.object
};

exports.default = QueryHandler;