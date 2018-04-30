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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ActionStyle = _styledComponents2.default.div(_templateObject, _style.action);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);

var TileCta = function TileCta(_ref) {
  var description = _ref.description,
      icon = _ref.icon,
      title = _ref.title,
      cta = _ref.cta,
      others = _objectWithoutProperties(_ref, ['description', 'icon', 'title', 'cta']);

  var Icon = Icons[icon + 'Icon'];

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      IconStyle,
      null,
      _react2.default.createElement(Icon, { size: 60 })
    ),
    _react2.default.createElement(
      TitleStyle,
      null,
      title
    ),
    description && _react2.default.createElement(DescriptionStyle, { dangerouslySetInnerHTML: { __html: description } }),
    cta && _react2.default.createElement(
      ActionStyle,
      null,
      _react2.default.createElement(_Button2.default, _extends({
        autoWidth: true,
        size: 'S'
      }, cta))
    )
  );
};

TileCta.propTypes = {
  cta: _Button2.default.propTypes,
  description: _propTypes.string,
  icon: _propTypes.string,
  title: _propTypes.string
};

exports.default = TileCta;