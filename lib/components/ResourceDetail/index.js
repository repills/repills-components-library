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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../utils');

var _basic = require('../Icon/icons/basic');

var _repillsConfig = require('repills-config');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);

function ResourceDetail(_ref) {
  var color = _ref.color,
      abstract = _ref.abstract,
      title = _ref.title,
      author = _ref.author,
      link = _ref.link,
      createdAt = _ref.createdAt,
      publishedAt = _ref.publishedAt,
      sections = _ref.sections,
      topics = _ref.topics,
      typeLabel = _ref.typeLabel,
      navigateTo = _ref.navigateTo,
      suggestedBy = _ref.suggestedBy,
      navigateToSection = _ref.navigateToSection,
      navigateToTopic = _ref.navigateToTopic,
      generateTopicUrl = _ref.generateTopicUrl,
      generateSectionUrl = _ref.generateSectionUrl,
      others = _objectWithoutProperties(_ref, ['color', 'abstract', 'title', 'author', 'link', 'createdAt', 'publishedAt', 'sections', 'topics', 'typeLabel', 'navigateTo', 'suggestedBy', 'navigateToSection', 'navigateToTopic', 'generateTopicUrl', 'generateSectionUrl']);

  var sectionsMerged = sections.reduce(function (acc, sectionId) {
    var section = _repillsConfig.sections.find(function (s) {
      return s.id === sectionId;
    });
    return _extends({}, acc, section.topics);
  }, {});

  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      color: color
    }),
    (0, _utils.isYoutubeVideo)(link) && _react2.default.createElement(
      'div',
      {
        style: {
          position: 'relative',
          paddingBottom: '56.25%',
          paddingTop: '25px',
          height: 0
        }
      },
      _react2.default.createElement('iframe', {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        },
        allow: 'autoplay; encrypted-media',
        allowFullScreen: true,
        frameBorder: '0',
        src: 'https://www.youtube.com/embed/' + (0, _utils.getYoutubeVideoID)(link),
        width: '100%'
      })
    ),
    _react2.default.createElement(
      MainInfoStyle,
      null,
      _react2.default.createElement(
        MainInfoTopStyle,
        null,
        _react2.default.createElement(
          TypeStyle,
          {
            color: color
          },
          _react2.default.createElement(_basic.SquareFilledPillIcon, {
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
          _react2.default.createElement(_basic.LinkIcon, { size: 18 }),
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
          )
        ),
        publishedAt && _react2.default.createElement(
          DateStyle,
          null,
          '\u2013',
          _react2.default.createElement(
            'span',
            null,
            'Published ',
            _react2.default.createElement(
              'strong',
              null,
              (0, _moment2.default)(publishedAt).fromNow()
            )
          )
        )
      ),
      abstract && _react2.default.createElement(
        DescriptionStyle,
        null,
        abstract
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
            rel: 'nofollow',
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
          sections.length !== 1 ? 's' : ''
        ),
        sections.map(function (sectionId) {
          var section = _repillsConfig.sections.find(function (s) {
            return s.id === sectionId;
          });
          return _react2.default.createElement(
            'a',
            {
              href: generateSectionUrl && generateSectionUrl(section.slug),
              key: section.slug,
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
                navigateToSection(section.slug);
              }
            },
            section.name
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
          topics.length !== 1 ? 's' : ''
        ),
        topics.map(function (topicId) {
          var topic = sectionsMerged[topicId];
          return _react2.default.createElement(
            'a',
            {
              href: generateTopicUrl && generateTopicUrl(topic.slug),
              key: topic.slug,
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
                navigateToTopic(topic.slug);
              }
            },
            topic.title
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
        size: 'S',
        skin: 'primary'
      })
    )
  );
}

ResourceDetail.displayName = 'ResourceDetail';

ResourceDetail.propTypes = {
  abstract: _propTypes.string,
  author: _propTypes.string,
  color: _propTypes.string,
  createdAt: _propTypes.string,
  generateSectionUrl: _propTypes.func,
  generateTopicUrl: _propTypes.func,
  link: _propTypes.string.isRequired,
  navigateTo: _propTypes.func,
  navigateToSection: _propTypes.func,
  navigateToTopic: _propTypes.func,
  publishedAt: _propTypes.string,
  sections: (0, _propTypes.arrayOf)(_propTypes.string),
  suggestedBy: (0, _propTypes.arrayOf)(_propTypes.string),
  title: _propTypes.string.isRequired,
  topics: (0, _propTypes.arrayOf)(_propTypes.string),
  typeLabel: _propTypes.string
};

exports.default = ResourceDetail;