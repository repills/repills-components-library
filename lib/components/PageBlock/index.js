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
var TitleStyle = _styledComponents2.default.h2(_templateObject, _style.title);
var DescriptionStyle = _styledComponents2.default.div(_templateObject, _style.description);
var BodyStyle = _styledComponents2.default.div(_templateObject, _style.body);
var ContentsCountStyle = _styledComponents2.default.div(_templateObject, _style.count);

var PageBlock = function PageBlock(_ref) {
  var title = _ref.title,
      children = _ref.children,
      contentsCount = _ref.contentsCount,
      align = _ref.align,
      simple = _ref.simple,
      description = _ref.description,
      others = _objectWithoutProperties(_ref, ['title', 'children', 'contentsCount', 'align', 'simple', 'description']);

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      TitleStyle,
      {
        align: align,
        count: contentsCount
      },
      _react2.default.createElement(
        'span',
        null,
        title
      ),
      contentsCount && _react2.default.createElement(
        ContentsCountStyle,
        null,
        contentsCount
      )
    ),
    description && _react2.default.createElement(
      DescriptionStyle,
      {
        align: align
      },
      _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: description } })
    ),
    _react2.default.createElement(
      BodyStyle,
      {
        simple: simple
      },
      children
    )
  );
};

PageBlock.propTypes = {
  align: (0, _propTypes.oneOf)(['LEFT', 'CENTER']),
  children: _propTypes.any,
  contentsCount: _propTypes.number,
  description: _propTypes.string,
  simple: _propTypes.bool,
  title: _propTypes.string
};

PageBlock.defaultProps = {
  align: 'LEFT'
};

exports.default = PageBlock;