'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _simplePagination = require('simple-pagination');

var _simplePagination2 = _interopRequireDefault(_simplePagination);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _basic = require('../Icon/icons/basic');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
// @TODO: convert to Class

function Pagination(_ref) {
  var currentPage = _ref.currentPage,
      handleNavigateToPage = _ref.handleNavigateToPage,
      itemsPerPage = _ref.itemsPerPage,
      itemsTotalCount = _ref.itemsTotalCount,
      rangePageDisplayed = _ref.rangePageDisplayed,
      buildPagePath = _ref.buildPagePath,
      others = _objectWithoutProperties(_ref, ['currentPage', 'handleNavigateToPage', 'itemsPerPage', 'itemsTotalCount', 'rangePageDisplayed', 'buildPagePath']);

  var ButtonStyle = _styledComponents2.default[buildPagePath ? 'a' : 'button'](_templateObject, _style.button);

  var pagination = (0, _simplePagination2.default)(itemsTotalCount, itemsPerPage, currentPage);

  var pages = [];
  var pageCount = pagination.pageCount;

  var getPage = function getPage(index) {
    return {
      index: index,
      active: index === currentPage
    };
  };

  var navigateTo = function navigateTo(index) {
    return function (e) {
      e.preventDefault();
      e.stopPropagation();
      handleNavigateToPage(index);
    };
  };

  var showLeftBreak = false;
  var showRightBreak = false;

  if (pageCount <= rangePageDisplayed) {

    for (var index = 0; index < pagination.pageCount; index++) {
      pages[index] = getPage(index + 1);
    }
  } else {

    var leftSide = rangePageDisplayed / 2;
    var rightSide = rangePageDisplayed - leftSide;

    showLeftBreak = currentPage - leftSide > 0;
    showRightBreak = currentPage + leftSide < pageCount;

    if (currentPage > pageCount - rangePageDisplayed / 2) {
      rightSide = pageCount - currentPage;
      leftSide = rangePageDisplayed - rightSide;
    } else if (currentPage < rangePageDisplayed / 2) {
      leftSide = currentPage;
      rightSide = rangePageDisplayed - leftSide;
    }

    for (var i = 0; i < pageCount; i++) {

      var pageIndex = i + 1;

      if (pageIndex >= currentPage - leftSide && pageIndex <= currentPage + rightSide) {
        pages[i] = getPage(pageIndex);
      }
    }
  }

  return pageCount > 1 && _react2.default.createElement(
    BaseStyle,
    others,
    pageCount > rangePageDisplayed && _react2.default.createElement(
      ButtonStyle,
      {
        disabled: !pagination.previousPage,
        href: buildPagePath && buildPagePath(1),
        onClick: navigateTo(1)
      },
      _react2.default.createElement(_basic.ArrowIcon, {
        orientation: 'left',
        size: 16
      })
    ),
    showLeftBreak && _react2.default.createElement(
      ButtonStyle,
      null,
      '...'
    ),
    pages.map(function (page) {
      return _react2.default.createElement(
        ButtonStyle,
        {
          active: page.active,
          href: buildPagePath && buildPagePath(page.index),
          key: 'page-' + page.index,
          onClick: navigateTo(page.index)
        },
        page.index
      );
    }),
    showRightBreak && _react2.default.createElement(
      ButtonStyle,
      null,
      '...'
    ),
    pageCount > rangePageDisplayed && _react2.default.createElement(
      ButtonStyle,
      {
        disabled: !pagination.nextPage,
        href: buildPagePath && buildPagePath(pageCount),
        onClick: function onClick() {
          return navigateTo(pageCount);
        }
      },
      _react2.default.createElement(_basic.ArrowIcon, {
        orientation: 'right',
        size: 16
      })
    )
  );
}

Pagination.propTypes = {
  buildPagePath: _propTypes.func,
  currentPage: _propTypes.number.isRequired,
  handleNavigateToPage: _propTypes.func.isRequired,
  itemsPerPage: _propTypes.number.isRequired,
  itemsTotalCount: _propTypes.number.isRequired,
  rangePageDisplayed: _propTypes.number
};

Pagination.defaultProps = {
  rangePageDisplayed: 7
};

exports.default = Pagination;