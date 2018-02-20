'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function ResponsivePagination(_ref) {
  var itemsTotalCount = _ref.itemsTotalCount,
      currentPage = _ref.currentPage,
      handleNavigateToPage = _ref.handleNavigateToPage,
      itemsPerPage = _ref.itemsPerPage;


  var getRangePageDisplayed = function getRangePageDisplayed(params) {

    var temp = 7;

    if (params.includes(_breakpoints.SM)) {
      temp = 13;
    }

    return temp;
  };

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(_Pagination2.default, {
        currentPage: currentPage,
        handleNavigateToPage: handleNavigateToPage,
        itemsPerPage: itemsPerPage,
        itemsTotalCount: itemsTotalCount,
        rangePageDisplayed: getRangePageDisplayed((0, _classnames2.default)(params))
      });
    }
  );
}

ResponsivePagination.propTypes = {
  currentPage: _propTypes.number.isRequired,
  handleNavigateToPage: _propTypes.func.isRequired,
  itemsPerPage: _propTypes.number.isRequired,
  itemsTotalCount: _propTypes.number.isRequired
};

exports.default = ResponsivePagination;