'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResourcePreview = require('../ResourcePreview');

var _ResourcePreview2 = _interopRequireDefault(_ResourcePreview);

var _ResourceMiniPreview = require('../ResourceMiniPreview');

var _ResourceMiniPreview2 = _interopRequireDefault(_ResourceMiniPreview);

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

function ResourcesList(_ref) {
  var resources = _ref.resources,
      variant = _ref.variant;


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
          resources.map(function (resource) {
            return _react2.default.createElement(
              ItemStyle,
              {
                className: (0, _classnames2.default)(params),
                key: resource.link
              },
              variant === 'mini' ? _react2.default.createElement(_ResourceMiniPreview2.default, resource) : _react2.default.createElement(_ResourcePreview2.default, resource)
            );
          })
        )
      );
    }
  );
}

ResourcesList.propTypes = {
  resources: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_ResourcePreview2.default.propTypes)).isRequired,
  variant: (0, _propTypes.oneOf)(['default', 'mini'])
};

exports.default = ResourcesList;