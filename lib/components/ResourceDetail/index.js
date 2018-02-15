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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var MainInfoStyle = _styledComponents2.default.div(_templateObject, _style.mainInfo);
var MainInfoTopStyle = _styledComponents2.default.div(_templateObject, _style.mainInfoTop);
var MainInfoBottomStyle = _styledComponents2.default.div(_templateObject, _style.mainInfoBottom);
var SecondaryInfoStyle = _styledComponents2.default.div(_templateObject, _style.secondaryInfo);
var SourceStyle = _styledComponents2.default.article(_templateObject, _style.source);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var AuthorStyle = _styledComponents2.default.span(_templateObject, _style.author);
var TypeStyle = _styledComponents2.default.div(_templateObject, _style.type);
var ActionsStyle = _styledComponents2.default.div(_templateObject, _style.actions);
var DateStyle = _styledComponents2.default.div(_templateObject, _style.date);
var DetailStyle = _styledComponents2.default.div(_templateObject, _style.detail);

function ResourceDetail(_ref) {
  var color = _ref.color,
      title = _ref.title,
      author = _ref.author,
      link = _ref.link,
      date = _ref.date,
      sections = _ref.sections,
      topics = _ref.topics,
      typeLabel = _ref.typeLabel,
      navigateTo = _ref.navigateTo,
      suggestedBy = _ref.suggestedBy,
      navigateToSection = _ref.navigateToSection,
      navigateToTopic = _ref.navigateToTopic;


  return _react2.default.createElement(
    BaseStyle,
    {
      color: color
    },
    _react2.default.createElement(
      MainInfoStyle,
      null,
      _react2.default.createElement(
        MainInfoTopStyle,
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
        _react2.default.createElement(
          SourceStyle,
          null,
          _react2.default.createElement(_basic.LinkIcon, { size: 14 }),
          _react2.default.createElement(
            'span',
            null,
            (0, _utils.getBaseUrl)(link)
          )
        )
      ),
      _react2.default.createElement(
        TitleStyle,
        { onClick: navigateTo },
        title
      ),
      _react2.default.createElement(
        MainInfoBottomStyle,
        null,
        author && _react2.default.createElement(
          AuthorStyle,
          null,
          'by ',
          _react2.default.createElement(
            'span',
            null,
            author
          ),
          ' \u2014'
        ),
        _react2.default.createElement(
          DateStyle,
          null,
          (0, _moment2.default)(date).fromNow()
        )
      )
    ),
    _react2.default.createElement(
      SecondaryInfoStyle,
      null,
      suggestedBy && suggestedBy !== '' && _react2.default.createElement(
        DetailStyle,
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Suggested by'
        ),
        _react2.default.createElement(
          'a',
          {
            href: 'https://github.com/' + suggestedBy,
            target: 'blank'
          },
          suggestedBy
        )
      ),
      _react2.default.createElement(
        DetailStyle,
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Section',
          topics.length > 1 ? 's' : ''
        ),
        sections.map(function (s) {
          return _react2.default.createElement(
            'span',
            {
              key: s,
              onClick: function onClick() {
                return navigateToSection(s);
              }
            },
            s
          );
        })
      ),
      _react2.default.createElement(
        DetailStyle,
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Topic',
          topics.length > 1 ? 's' : ''
        ),
        topics.map(function (t) {
          return _react2.default.createElement(
            'span',
            {
              key: t,
              onClick: function onClick() {
                return navigateToTopic(t);
              }
            },
            t
          );
        })
      )
    ),
    _react2.default.createElement(
      ActionsStyle,
      null,
      _react2.default.createElement(_Button2.default, {
        label: 'Go to ' + typeLabel,
        onClick: navigateTo,
        size: 'M'
      })
    )
  );
}

ResourceDetail.propTypes = {
  author: _propTypes.string,
  color: _propTypes.string,
  date: _propTypes.string,
  link: _propTypes.string.isRequired,
  navigateTo: _propTypes.func,
  path: _propTypes.string.isRequired,
  sections: (0, _propTypes.arrayOf)(_propTypes.string),
  suggestedBy: _propTypes.string,
  title: _propTypes.string.isRequired,
  topics: (0, _propTypes.arrayOf)(_propTypes.string),
  type: _propTypes.string.isRequired,
  typeLabel: _propTypes.string
};

exports.default = ResourceDetail;