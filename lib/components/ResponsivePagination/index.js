'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Pagination = require('../Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ResponsivePagination(_ref) {
  var itemsTotalCount = _ref.itemsTotalCount,
      currentPage = _ref.currentPage,
      handleNavigateToPage = _ref.handleNavigateToPage,
      itemsPerPage = _ref.itemsPerPage,
      buildPagePath = _ref.buildPagePath,
      others = _objectWithoutProperties(_ref, ['itemsTotalCount', 'currentPage', 'handleNavigateToPage', 'itemsPerPage', 'buildPagePath']);

  var getRangePageDisplayed = function getRangePageDisplayed(params) {

    var temp = 5;

    if (params.includes(_breakpoints.SM)) {
      temp = 13;
    }

    return temp;
  };

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(_Pagination2.default, _extends({
        buildPagePath: buildPagePath,
        currentPage: currentPage,
        handleNavigateToPage: handleNavigateToPage,
        itemsPerPage: itemsPerPage,
        itemsTotalCount: itemsTotalCount,
        rangePageDisplayed: getRangePageDisplayed((0, _classnames2.default)(params))
      }, others));
    }
  );
}

ResponsivePagination.propTypes = {
  buildPagePath: _propTypes.func,
  currentPage: _propTypes.number.isRequired,
  handleNavigateToPage: _propTypes.func.isRequired,
  itemsPerPage: _propTypes.number.isRequired,
  itemsTotalCount: _propTypes.number.isRequired
};

exports.default = ResponsivePagination;