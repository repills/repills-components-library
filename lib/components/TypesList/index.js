'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TypePreview = require('../TypePreview');

var _TypePreview2 = _interopRequireDefault(_TypePreview);

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
var ItemsWrapperStyle = _styledComponents2.default.div(_templateObject, _style.itemsWrapper);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

function TypesList(_ref) {
  var types = _ref.types,
      navigateTo = _ref.navigateTo;

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        { className: (0, _classnames2.default)(params) },
        _react2.default.createElement(
          ItemsWrapperStyle,
          null,
          _react2.default.createElement(
            ItemsStyle,
            null,
            Object.keys(types).map(function (typeId) {
              var type = types[typeId];
              return _react2.default.createElement(
                ItemStyle,
                {
                  className: (0, _classnames2.default)(params),
                  key: typeId
                },
                _react2.default.createElement(_TypePreview2.default, {
                  color: type.color,
                  count: type.resources.length,
                  icon: typeId.charAt(0).toUpperCase() + typeId.slice(1),
                  id: type.id,
                  label: type.label,
                  navigateTo: navigateTo
                })
              );
            })
          )
        )
      );
    }
  );
}

TypesList.propTypes = {
  navigateTo: _propTypes.func,
  types: _propTypes.object
};

exports.default = TypesList;