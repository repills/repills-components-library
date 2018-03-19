'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

function TypesList(_ref) {
  var activeKey = _ref.activeKey,
      types = _ref.types,
      navigateTo = _ref.navigateTo,
      others = _objectWithoutProperties(_ref, ['activeKey', 'types', 'navigateTo']);

  var count = Object.entries(types).length;
  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          ItemsStyle,
          {
            breakpointsStatus: params
          },
          Object.entries(types).sort(function (a, b) {
            return a[1].resources.length < b[1].resources.length;
          }).map(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                key = _ref3[0],
                type = _ref3[1];

            return _react2.default.createElement(
              ItemStyle,
              {
                breakpointsStatus: params,
                count: count,
                key: key
              },
              _react2.default.createElement(_TypePreview2.default, _extends({}, type, {
                active: key === activeKey,
                count: type.resources.length,
                icon: key.charAt(0).toUpperCase() + key.slice(1),
                navigateTo: navigateTo
              }))
            );
          })
        )
      );
    }
  );
}

TypesList.propTypes = {
  activeKey: _propTypes.string,
  navigateTo: _propTypes.func,
  types: _propTypes.object
};

exports.default = TypesList;