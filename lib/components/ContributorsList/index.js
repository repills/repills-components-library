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

var _basic = require('../Icon/icons/basic');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var TitleStyle = _styledComponents2.default.h3(_templateObject, _style.title);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.a(_templateObject, _style.item);

var ContributorsList = function ContributorsList(_ref) {
  var title = _ref.title,
      contributors = _ref.contributors,
      others = _objectWithoutProperties(_ref, ['title', 'contributors']);

  return contributors.length > 1 && _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      TitleStyle,
      null,
      title ? title : 'Contributions'
    ),
    _react2.default.createElement(
      ItemsStyle,
      null,
      contributors.sort(function (a, b) {
        return a.publishedCount < b.publishedCount;
      }).map(function (c) {
        return _react2.default.createElement(
          ItemStyle,
          {
            href: 'https://github.com/' + c.nickname,
            key: c.nickname,
            target: '_blank'
          },
          _react2.default.createElement(_basic.UserIcon, {
            size: 20
          }),
          _react2.default.createElement(
            'span',
            null,
            c.nickname
          ),
          c.publishedCount && _react2.default.createElement(
            'div',
            null,
            '(',
            _react2.default.createElement(
              'strong',
              null,
              c.publishedCount
            ),
            ')'
          )
        );
      })
    )
  );
};

ContributorsList.propTypes = {
  contributors: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    nickname: _propTypes.string.isRequired,
    publishedCount: _propTypes.number
  })),
  title: _propTypes.string
};

ContributorsList.defaultProps = {};

exports.default = ContributorsList;