'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _basic = require('../Icon/icons/basic');

var Icons = _interopRequireWildcard(_basic);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var TitleStyle = _styledComponents2.default.h3(_templateObject, _style.title);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);

var Message = function Message(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      description = _ref.description,
      others = _objectWithoutProperties(_ref, ['title', 'icon', 'description']);

  var Icon = icon ? Icons[icon + 'Icon'] : null;

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      TitleStyle,
      null,
      title
    ),
    description && _react2.default.createElement(DescriptionStyle, {
      dangerouslySetInnerHTML: { __html: description }
    }),
    icon && _react2.default.createElement(
      IconStyle,
      null,
      _react2.default.createElement(Icon, { size: 44 })
    )
  );
};

Message.displayName = 'Message';

Message.propTypes = {
  description: _propTypes.string,
  icon: _propTypes.string,
  title: _propTypes.string
};

exports.default = Message;