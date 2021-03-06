'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var MainStyle = _styledComponents2.default.div(_templateObject, _style.main);

var SimplePageHeader = function SimplePageHeader(_ref) {
  var title = _ref.title,
      others = _objectWithoutProperties(_ref, ['title']);

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      MainStyle,
      null,
      _react2.default.createElement(TitleStyle, { dangerouslySetInnerHTML: { __html: title } })
    )
  );
};

SimplePageHeader.displayName = 'SimplePageHeader';

SimplePageHeader.propTypes = {
  title: _propTypes.string
};

exports.default = SimplePageHeader;