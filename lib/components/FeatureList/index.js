'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactContainerQuery = require('react-container-query');

var _FeatureItem = require('../FeatureItem');

var _FeatureItem2 = _interopRequireDefault(_FeatureItem);

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

var FeatureList = function FeatureList(_ref) {
  var features = _ref.features;


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
          features.map(function (feature, i) {
            return _react2.default.createElement(
              ItemStyle,
              {
                className: (0, _classnames2.default)(params),
                key: 'feature-' + i
              },
              _react2.default.createElement(_FeatureItem2.default, feature)
            );
          })
        )
      );
    }
  );
};

FeatureList.propTypes = {
  features: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    title: _propTypes.string.isRequired,
    description: _propTypes.string,
    icon: _propTypes.string.isRequired
  })).isRequired
};

FeatureList.defaultProps = {};

exports.default = FeatureList;