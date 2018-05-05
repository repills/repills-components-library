'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Logo = require('../Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _QueryHandler = require('../QueryHandler');

var _QueryHandler2 = _interopRequireDefault(_QueryHandler);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;


var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var WrapperStyle = _styledComponents2.default.div(_templateObject, _style.wrapper);
var LogoContainerStyle = _styledComponents2.default.div(_templateObject, _style.logoContainer);
var NavigationStyle = _styledComponents2.default.nav(_templateObject, _style.navigation);

function TopNavigation(_ref) {
  var items = _ref.items,
      breakpointsStatus = _ref.breakpointsStatus,
      onClickLogo = _ref.onClickLogo,
      others = _objectWithoutProperties(_ref, ['items', 'breakpointsStatus', 'onClickLogo']);

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      WrapperStyle,
      { className: (0, _classnames2.default)(breakpointsStatus) },
      _react2.default.createElement(
        LogoContainerStyle,
        {
          className: (0, _classnames2.default)(breakpointsStatus),
          onClick: onClickLogo
        },
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(_Logo2.default, {
            color: basic.primary,
            secondaryColor: neutral.lowest
          })
        )
      ),
      items.length > 0 && _react2.default.createElement(
        NavigationStyle,
        {
          className: (0, _classnames2.default)(breakpointsStatus)
        },
        items.filter(function (i) {
          return !i.hidden;
        }).map(function (item, i) {

          var NavigationItemStyle = _styledComponents2.default[item.href ? 'a' : 'div'](_templateObject, _style.navigationItem);

          return _react2.default.createElement(
            NavigationItemStyle,
            _extends({
              key: 'item-' + i
            }, item),
            item.label
          );
        })
      )
    )
  );
}

TopNavigation.propTypes = {
  breakpointsStatus: _propTypes.object,
  items: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    href: _propTypes.string,
    label: _propTypes.string.isRequired,
    onClick: _propTypes.func,
    hidden: _propTypes.bool
  })),
  onClickLogo: _propTypes.func
};

TopNavigation.defaultProps = {
  items: [],
  breakpointsStatus: {}
};

exports.default = (0, _QueryHandler2.default)(TopNavigation);