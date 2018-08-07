'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _types = require('../Icon/icons/types');

var sectionsIcons = _interopRequireWildcard(_types);

var _consumeContainerQuery = require('../../hoc/consume-container-query');

var _consumeContainerQuery2 = _interopRequireDefault(_consumeContainerQuery);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var MainStyle = _styledComponents2.default.div(_templateObject, _style.main);
var SectionNameStyle = _styledComponents2.default.strong(_templateObject, _style.sectionName);

var SectionName = function SectionName(_ref) {
  var topicAction = _ref.topicAction,
      topicName = _ref.topicName;
  return _react2.default.createElement(
    'span',
    null,
    'in ',
    _react2.default.createElement(
      SectionNameStyle,
      { onClick: topicAction },
      topicName
    )
  );
};

var TypePageHeader = function TypePageHeader(_ref2) {
  var breakpointsStatus = _ref2.breakpointsStatus,
      color = _ref2.color,
      count = _ref2.count,
      icon = _ref2.icon,
      topicAction = _ref2.topicAction,
      topicName = _ref2.topicName,
      typeName = _ref2.typeName,
      others = _objectWithoutProperties(_ref2, ['breakpointsStatus', 'color', 'count', 'icon', 'topicAction', 'topicName', 'typeName']);

  var Icon = sectionsIcons[icon + 'Icon'];

  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      breakpointsStatus: breakpointsStatus
    }),
    _react2.default.createElement(
      MainStyle,
      {
        breakpointsStatus: breakpointsStatus
      },
      Icon && _react2.default.createElement(
        IconStyle,
        {
          breakpointsStatus: breakpointsStatus,
          color: color
        },
        _react2.default.createElement(Icon, { size: 44 })
      ),
      _react2.default.createElement(
        TitleStyle,
        {
          breakpointsStatus: breakpointsStatus
        },
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'strong',
            null,
            count
          ),
          ' ',
          count === 1 ? typeName.singular : typeName.plural,
          ' ',
          topicName && _react2.default.createElement(SectionName, {
            topicAction: topicAction,
            topicName: topicName
          })
        )
      )
    )
  );
};

TypePageHeader.displayName = 'TypePageHeader';

TypePageHeader.propTypes = {
  breakpointsStatus: _propTypes.object,
  color: _propTypes.string.isRequired,
  count: _propTypes.number.isRequired,
  icon: _propTypes.string.isRequired,
  topicAction: _propTypes.func,
  topicName: _propTypes.string,
  typeName: (0, _propTypes.shape)({
    plural: _propTypes.string.isRequired,
    singular: _propTypes.string.isRequired
  }).isRequired
};

TypePageHeader.defaultProps = {
  breakpointsStatus: {}
};

exports.default = (0, _consumeContainerQuery2.default)(TypePageHeader);