'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _Logo = require('../Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;


var BaseStyle = _styledComponents2.default.nav(_templateObject, _style.base);
var LogoLinkStyle = _styledComponents2.default.a(_templateObject, _style.logoLink);

function TopNavigation() {
  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        null,
        _react2.default.createElement(
          LogoLinkStyle,
          {
            className: (0, _classnames2.default)(params),
            href: '/'
          },
          _react2.default.createElement(_Logo2.default, {
            color: basic.primary,
            secondaryColor: neutral.highest
          })
        )
      );
    }
  );
}

TopNavigation.propTypes = {};

exports.default = TopNavigation;