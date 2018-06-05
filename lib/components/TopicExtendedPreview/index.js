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

var _sections = require('../Icon/icons/sections');

var icons = _interopRequireWildcard(_sections);

var _propTypes = require('prop-types');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var CoverStyle = _styledComponents2.default.div(_templateObject, _style.cover);
var BodyStyle = _styledComponents2.default.div(_templateObject, _style.body);
var TotalStyle = _styledComponents2.default.div(_templateObject, _style.total);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);
var FooterStyle = _styledComponents2.default.div(_templateObject, _style.footer);

function TopicExtendedPreview(_ref) {
  var navigateTo = _ref.navigateTo,
      path = _ref.path,
      resources = _ref.resources,
      title = _ref.title,
      sectionIcon = _ref.sectionIcon,
      description = _ref.description,
      others = _objectWithoutProperties(_ref, ['navigateTo', 'path', 'resources', 'title', 'sectionIcon', 'description']);

  var totalCount = resources.length;
  var SectionIcon = sectionIcon && icons[sectionIcon];
  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      disabled: totalCount === 0
    }),
    _react2.default.createElement(
      CoverStyle,
      {
        icon: sectionIcon,
        onClick: totalCount !== 0 ? navigateTo : undefined
      },
      _react2.default.createElement(
        TitleStyle,
        null,
        title
      ),
      sectionIcon && _react2.default.createElement(
        IconStyle,
        null,
        _react2.default.createElement(SectionIcon, {
          size: 36
        })
      )
    ),
    _react2.default.createElement(
      BodyStyle,
      null,
      _react2.default.createElement(
        DescriptionStyle,
        null,
        description
      ),
      _react2.default.createElement(
        FooterStyle,
        null,
        _react2.default.createElement(
          TotalStyle,
          null,
          _react2.default.createElement(
            'strong',
            null,
            totalCount
          ),
          ' pill',
          totalCount === 1 ? '' : 's'
        ),
        _react2.default.createElement(_Button2.default, {
          ellipsis: true,
          href: path ? path : undefined,
          label: 'See topic',
          onClick: totalCount !== 0 ? navigateTo : undefined,
          size: 'S',
          skin: 'outlineTertiary'
        })
      )
    )
  );
}

TopicExtendedPreview.propTypes = {
  description: _propTypes.string,
  navigateTo: _propTypes.func,
  path: _propTypes.string,
  resources: (0, _propTypes.arrayOf)(_propTypes.object).isRequired,
  sectionIcon: _propTypes.string,
  title: _propTypes.string.isRequired
};

exports.default = TopicExtendedPreview;