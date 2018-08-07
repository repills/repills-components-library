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

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var TotalStyle = _styledComponents2.default.div(_templateObject, _style.total);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);

function TopicPreview(_ref) {
  var navigateTo = _ref.navigateTo,
      resources = _ref.resources,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ['navigateTo', 'resources', 'title']);

  var totalCount = resources.length;
  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      disabled: totalCount === 0,
      onClick: totalCount !== 0 ? navigateTo : null
    }),
    _react2.default.createElement(
      TitleStyle,
      { title: title },
      title
    ),
    _react2.default.createElement(
      TotalStyle,
      null,
      totalCount
    )
  );
}

TopicPreview.displayName = 'TopicPreview';

TopicPreview.propTypes = {
  navigateTo: _propTypes.func,
  resources: (0, _propTypes.arrayOf)(_propTypes.object).isRequired,
  title: _propTypes.string.isRequired
};

exports.default = TopicPreview;