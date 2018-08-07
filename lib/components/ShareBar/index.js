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

var _SocialShare = require('../SocialShare');

var _SocialShare2 = _interopRequireDefault(_SocialShare);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

var ShareBar = function ShareBar(_ref) {
  var link = _ref.link,
      text = _ref.text,
      title = _ref.title,
      color = _ref.color,
      types = _ref.types,
      others = _objectWithoutProperties(_ref, ['link', 'text', 'title', 'color', 'types']);

  return _react2.default.createElement(
    BaseStyle,
    others,
    types.map(function (type) {
      return _react2.default.createElement(
        ItemStyle,
        {
          key: type
        },
        _react2.default.createElement(_SocialShare2.default, {
          color: color,
          link: link,
          text: text,
          title: title,
          type: type
        })
      );
    })
  );
};

ShareBar.displayName = 'ShareBar';

ShareBar.propTypes = {
  color: _propTypes.string,
  link: _propTypes.string.isRequired,
  text: _propTypes.string,
  title: _propTypes.string,
  types: (0, _propTypes.arrayOf)((0, _propTypes.oneOf)(['email', 'facebook', 'twitter', 'linkedin', 'google'])).isRequired
};

ShareBar.defaultProps = {
  text: '',
  title: ''
};

exports.default = ShareBar;