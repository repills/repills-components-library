'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionPreview = require('../SectionPreview');

var _SectionPreview2 = _interopRequireDefault(_SectionPreview);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

function SectionsList(_ref) {
  var sections = _ref.sections,
      _navigateTo = _ref.navigateTo;

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        null,
        _react2.default.createElement(
          ItemsStyle,
          { className: (0, _classnames2.default)(params) },
          sections.map(function (section) {
            return _react2.default.createElement(
              ItemStyle,
              {
                className: (0, _classnames2.default)(params),
                key: section.id
              },
              _react2.default.createElement(_SectionPreview2.default, _extends({
                navigateTo: function navigateTo() {
                  return _navigateTo(section.path);
                }
              }, section))
            );
          })
        )
      );
    }
  );
}

SectionsList.propTypes = {
  navigateTo: _propTypes.func,
  sections: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_SectionPreview2.default.propTypes)).isRequired
};

exports.default = SectionsList;