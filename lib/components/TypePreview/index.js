'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('../Icon/icons/types');

var Icons = _interopRequireWildcard(_types);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var TextStyle = _styledComponents2.default.div(_templateObject, _style.text);
var CountStyle = _styledComponents2.default.div(_templateObject, _style.count);

function TypePreview(_ref) {
  var active = _ref.active,
      color = _ref.color,
      path = _ref.path,
      count = _ref.count,
      icon = _ref.icon,
      id = _ref.id,
      label = _ref.label,
      navigateTo = _ref.navigateTo,
      others = _objectWithoutProperties(_ref, ['active', 'color', 'path', 'count', 'icon', 'id', 'label', 'navigateTo']);

  var Icon = Icons[icon + 'Icon'];

  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      active: active,
      color: color,
      id: id,
      onClick: active ? null : function () {
        return navigateTo(path);
      }
    }),
    _react2.default.createElement(
      IconStyle,
      {
        active: active
      },
      _react2.default.createElement(Icon, { size: 28 })
    ),
    _react2.default.createElement(
      TextStyle,
      null,
      count === 1 ? label.singular : label.plural
    ),
    _react2.default.createElement(
      CountStyle,
      {
        active: active
      },
      count
    )
  );
}

TypePreview.propTypes = {
  active: _propTypes.bool,
  color: _propTypes.string,
  count: _propTypes.number.isRequired,
  icon: _propTypes.string.isRequired,
  id: _propTypes.string,
  label: (0, _propTypes.shape)({
    singular: _propTypes.string.isRequired,
    plural: _propTypes.string.isRequired
  }),
  navigateTo: _propTypes.func,
  path: _propTypes.string.isRequired
};

exports.default = TypePreview;