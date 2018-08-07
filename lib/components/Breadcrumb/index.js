'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../Icon/icons');

var Icons = _interopRequireWildcard(_icons);

var _propTypes = require('prop-types');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);

var Breadcrumb = function Breadcrumb(_ref) {
  var items = _ref.items,
      others = _objectWithoutProperties(_ref, ['items']);

  return _react2.default.createElement(
    BaseStyle,
    others,
    items.map(function (item, i) {
      return _react2.default.createElement(
        'div',
        { key: 'bc-item-' + i },
        _react2.default.createElement(_Button2.default, _extends({}, item, {
          autoWidth: true,
          size: 'S',
          skin: 'ghost'
        }))
      );
    })
  );
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {};

Breadcrumb.defaultProps = {};

exports.default = Breadcrumb;