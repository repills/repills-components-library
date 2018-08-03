'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Pagination = require('../Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _breakpoints = require('../../config/breakpoints');

var _consumeContainerQuery = require('../../hoc/consume-container-query');

var _consumeContainerQuery2 = _interopRequireDefault(_consumeContainerQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsivePagination = function (_React$Component) {
  _inherits(ResponsivePagination, _React$Component);

  function ResponsivePagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResponsivePagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResponsivePagination.__proto__ || Object.getPrototypeOf(ResponsivePagination)).call.apply(_ref, [this].concat(args))), _this), _this.getRangePageDisplayed = function () {
      var temp = 5;
      if (_this.props.breakpointsStatus[_breakpoints.SM]) {
        temp = 13;
      }
      return temp;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResponsivePagination, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          itemsTotalCount = _props.itemsTotalCount,
          currentPage = _props.currentPage,
          handleNavigateToPage = _props.handleNavigateToPage,
          itemsPerPage = _props.itemsPerPage,
          buildPagePath = _props.buildPagePath,
          others = _objectWithoutProperties(_props, ['itemsTotalCount', 'currentPage', 'handleNavigateToPage', 'itemsPerPage', 'buildPagePath']);

      return _react2.default.createElement(_Pagination2.default, _extends({
        buildPagePath: buildPagePath,
        currentPage: currentPage,
        handleNavigateToPage: handleNavigateToPage,
        itemsPerPage: itemsPerPage,
        itemsTotalCount: itemsTotalCount,
        rangePageDisplayed: this.getRangePageDisplayed()
      }, others));
    }
  }]);

  return ResponsivePagination;
}(_react2.default.Component);

ResponsivePagination.propTypes = {
  breakpointsStatus: _propTypes.object,
  buildPagePath: _propTypes.func,
  currentPage: _propTypes.number.isRequired,
  handleNavigateToPage: _propTypes.func.isRequired,
  itemsPerPage: _propTypes.number.isRequired,
  itemsTotalCount: _propTypes.number.isRequired
};
ResponsivePagination.defaultProps = {
  breakpointsStatus: {}
};
exports.default = (0, _consumeContainerQuery2.default)(ResponsivePagination);