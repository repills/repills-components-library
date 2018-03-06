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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);

var ContributorsList = function ContributorsList(_ref) {
  var title = _ref.title,
      contributors = _ref.contributors;


  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      'h3',
      null,
      title ? title : 'Contributors'
    ),
    contributors.length > 1 && _react2.default.createElement(
      'div',
      null,
      contributors.map(function (c) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'https://github.com/' + c.nickname,
              target: '_blank'
            },
            c.nickname,
            ' -',
            c.publishedCount && _react2.default.createElement(
              'span',
              null,
              c.publishedCount,
              ' pills'
            )
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