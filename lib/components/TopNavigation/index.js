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

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _Logo = require('../Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

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
      onClickLogo = _ref.onClickLogo,
      others = _objectWithoutProperties(_ref, ['items', 'onClickLogo']);

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      var loading = Object.keys(params).length === 0;

      return _react2.default.createElement(
        BaseStyle,
        others,
        loading && _react2.default.createElement(_Spinner2.default, { position: 'absolute' }),
        _react2.default.createElement(
          WrapperStyle,
          { className: (0, _classnames2.default)(params) },
          _react2.default.createElement(
            LogoContainerStyle,
            {
              className: (0, _classnames2.default)(params),
              onClick: onClickLogo
            },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_Logo2.default, {
                color: basic.primary,
                secondaryColor: neutral.higher
              })
            )
          ),
          items.length > 0 && _react2.default.createElement(
            NavigationStyle,
            {
              className: (0, _classnames2.default)(params)
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
  );
}

TopNavigation.propTypes = {
  items: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    href: _propTypes.string,
    label: _propTypes.string.isRequired,
    onClick: _propTypes.func,
    hidden: _propTypes.bool
  })),
  onClickLogo: _propTypes.func
};

TopNavigation.defaultProps = {
  items: []
};

exports.default = TopNavigation;