'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../utils');

var _basic = require('../Icon/icons/basic');

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var MainInfoStyle = _styledComponents2.default.a(_templateObject, _style.mainInfo);
var SecondaryInfoStyle = _styledComponents2.default.div(_templateObject, _style.secondaryInfo);
var SourceStyle = _styledComponents2.default.article(_templateObject, _style.source);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var AuthorStyle = _styledComponents2.default.div(_templateObject, _style.author);
var TypeStyle = _styledComponents2.default.div(_templateObject, _style.type);
var DateStyle = _styledComponents2.default.div(_templateObject, _style.date);
var DetailStyle = _styledComponents2.default.div(_templateObject, _style.detail);

function ResourcePreview(_ref) {
  var color = _ref.color,
      title = _ref.title,
      author = _ref.author,
      link = _ref.link,
      date = _ref.date,
      typeLabel = _ref.typeLabel,
      handleDetailView = _ref.handleDetailView;

  return _react2.default.createElement(
    BaseStyle,
    {
      color: color
    },
    _react2.default.createElement(
      MainInfoStyle,
      { href: link },
      _react2.default.createElement(
        SourceStyle,
        null,
        _react2.default.createElement(_basic.LinkIcon, { size: 14 }),
        _react2.default.createElement(
          'span',
          null,
          (0, _utils.getBaseUrl)(link)
        )
      ),
      _react2.default.createElement(
        TitleStyle,
        null,
        title
      ),
      _react2.default.createElement(
        DetailStyle,
        null,
        _react2.default.createElement(
          TypeStyle,
          null,
          _react2.default.createElement(_basic.PillIcon, {
            color: color,
            size: 16
          }),
          _react2.default.createElement(
            'span',
            null,
            typeLabel
          )
        ),
        '\u2014',
        author && _react2.default.createElement(
          AuthorStyle,
          null,
          'by ',
          _react2.default.createElement(
            'span',
            null,
            author
          )
        )
      )
    ),
    _react2.default.createElement(
      SecondaryInfoStyle,
      null,
      _react2.default.createElement(
        DateStyle,
        null,
        'Published ',
        (0, _moment2.default)(date).fromNow()
      )
    )
  );
}

ResourcePreview.propTypes = {
  author: _propTypes.string,
  color: _propTypes.string.isRequired,
  date: _propTypes.string,
  link: _propTypes.string.isRequired,
  title: _propTypes.string.isRequired,
  typeLabel: _propTypes.string.isRequired
};

exports.default = ResourcePreview;