'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _basic = require('../Icon/icons/basic');

var Icons = _interopRequireWildcard(_basic);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ListStyle = _styledComponents2.default.div(_templateObject, _style.list);
var TagStyle = _styledComponents2.default.div(_templateObject, _style.tag);

var KeywordsCloud = function KeywordsCloud(_ref) {
  var keywords = _ref.keywords,
      showed = _ref.showed,
      others = _objectWithoutProperties(_ref, ['keywords', 'showed']);

  var showedKeywords = showed ? keywords.slice(0, Math.max(showed, keywords.length)) : keywords;

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      ListStyle,
      null,
      showedKeywords.map(function (e) {
        return _react2.default.createElement(
          TagStyle,
          null,
          e
        );
      })
    )
  );
};

KeywordsCloud.propTypes = {
  keywords: (0, _propTypes.arrayOf)(_propTypes.string),
  showed: _propTypes.number
};

exports.default = KeywordsCloud;