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

var _FeatureItem = require('../FeatureItem');

var _FeatureItem2 = _interopRequireDefault(_FeatureItem);

var _style = require('./style');

var _consumeContainerQuery = require('../../hoc/consume-container-query');

var _consumeContainerQuery2 = _interopRequireDefault(_consumeContainerQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

var FeatureList = function FeatureList(_ref) {
  var breakpointsStatus = _ref.breakpointsStatus,
      features = _ref.features,
      skin = _ref.skin,
      others = _objectWithoutProperties(_ref, ['breakpointsStatus', 'features', 'skin']);

  var count = features.length;

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      ItemsStyle,
      { breakpointsStatus: breakpointsStatus },
      features.map(function (feature, i) {
        return _react2.default.createElement(
          ItemStyle,
          {
            breakpointsStatus: breakpointsStatus,
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
};

FeatureList.displayName = 'FeatureList';

FeatureList.propTypes = {
  breakpointsStatus: _propTypes.object,
  features: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_FeatureItem2.default.propTypes)).isRequired,
  skin: _FeatureItem2.default.propTypes.skin
};

FeatureList.defaultProps = {
  breakpointsStatus: {}
};

exports.default = (0, _consumeContainerQuery2.default)(FeatureList);