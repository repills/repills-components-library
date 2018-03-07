'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _social = require('../Icon/icons/social');

var icons = _interopRequireWildcard(_social);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.a(_templateObject, _style.base);

var SocialShare = function SocialShare(_ref) {
  var color = _ref.color,
      link = _ref.link,
      text = _ref.text,
      title = _ref.title,
      type = _ref.type,
      others = _objectWithoutProperties(_ref, ['color', 'link', 'text', 'title', 'type']);

  var iconName = void 0;
  var href = void 0;
  var target = null;
  var encodedLink = encodeURIComponent(link);
  var encodedTitle = encodeURIComponent(title);
  var encodedText = encodeURIComponent(text);

  switch (type) {
    case 'facebook':
      iconName = 'FacebookIcon';
      href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedLink;
      break;
    case 'twitter':
      iconName = 'TwitterIcon';
      href = 'https://twitter.com/intent/tweet?url=' + encodedLink + '&text=' + encodedText;
      break;
    case 'linkedin':
      iconName = 'LinkedinIcon';
      href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedLink + '&title=' + encodedTitle + '&summary=' + encodedText;
      break;
    case 'googlePlus':
      iconName = 'GooglePlusIcon';
      href = 'https://plus.google.com/share?url=' + encodedLink;
      break;
    case 'google':
      iconName = 'GooglePlusIcon';
      href = 'https://plus.google.com/share?url=' + encodedLink;
      break;
    case 'email':
      iconName = 'EmailIcon';
      href = 'mailto:?subject=' + encodedTitle + '&body=' + encodedText + '%0D%0A' + encodedLink;
      target = '_self';
      break;
    default:
      break;
  }

  var Icon = icons[iconName];

  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      href: href,
      target: target ? target : '_blank'
    }),
    _react2.default.createElement(Icon, {
      color: color,
      size: 44
    })
  );
};

SocialShare.propTypes = {
  color: _propTypes.string,
  link: _propTypes.string.isRequired,
  text: _propTypes.string,
  title: _propTypes.string,
  type: (0, _propTypes.oneOf)(['email', 'facebook', 'twitter', 'linkedin', 'google']).isRequired
};

SocialShare.defaultProps = {
  text: '',
  title: ''
};

exports.default = SocialShare;