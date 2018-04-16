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

var _reactContainerQuery = require('react-container-query');

var _FeatureItem = require('../FeatureItem');

var _FeatureItem2 = _interopRequireDefault(_FeatureItem);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

var FeatureList = function FeatureList(_ref) {
  var features = _ref.features,
      skin = _ref.skin,
      others = _objectWithoutProperties(_ref, ['features', 'skin']);

  var count = features.length;

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      var loading = Object.keys(params).length === 0;

      return _react2.default.createElement(
        BaseStyle,
        others,
        loading && _react2.default.createElement(_Spinner2.default, null),
        !loading && _react2.default.createElement(
          ItemsStyle,
          { breakpointsStatus: params },
          features.map(function (feature, i) {
            return _react2.default.createElement(
              ItemStyle,
              {
                breakpointsStatus: params,
                count: count,
                key: 'feature-' + i,
                skin: skin
              },
              _react2.default.createElement(_FeatureItem2.default, _extends({}, feature, {
                skin: skin
              }))
            );
          })
        )
      );
    }
  );
};

FeatureList.propTypes = {
  features: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_FeatureItem2.default.propTypes)).isRequired,
  skin: _FeatureItem2.default.propTypes.skin
};

FeatureList.defaultProps = {};

exports.default = FeatureList;