'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResourcePreview = require('../ResourcePreview');

var _ResourcePreview2 = _interopRequireDefault(_ResourcePreview);

var _ResourceDetail = require('../ResourceDetail');

var _ResourceDetail2 = _interopRequireDefault(_ResourceDetail);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

var _QueryHandler = require('../QueryHandler');

var _QueryHandler2 = _interopRequireDefault(_QueryHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);
var ActionsStyle = _styledComponents2.default.div(_templateObject, _style.actions);

var ResourcesListWithDetail = function (_React$Component) {
  _inherits(ResourcesListWithDetail, _React$Component);

  function ResourcesListWithDetail(props) {
    _classCallCheck(this, ResourcesListWithDetail);

    var _this = _possibleConstructorReturn(this, (ResourcesListWithDetail.__proto__ || Object.getPrototypeOf(ResourcesListWithDetail)).call(this, props));

    _this.onHandleDetailView = function (_ref) {
      var reference = _ref.reference;
      var _this$props = _this.props,
          resources = _this$props.resources,
          handleDetailView = _this$props.handleDetailView;

      var currentResource = resources.find(function (e) {
        return e.reference === reference;
      });
      if (handleDetailView) {
        handleDetailView({ resource: currentResource });
      }
      _this.setState({ showDetailModal: true, currentResource: currentResource });
    };

    _this.handleNavigateTo = function (link) {
      return function () {
        return window.open(link, '_blank');
      };
    };

    _this.closeDetailModal = function () {
      return _this.setState({ showDetailModal: false, currentResource: null });
    };

    _this.getCurrentBreakPoint = function (statusBreakpoints) {
      var current = null;

      _breakpoints.queryList.forEach(function (b) {
        if (statusBreakpoints[b]) {
          current = b;
        }
      });

      return current;
    };

    _this.getShowedResources = function (_ref2) {
      var currentBreakpoint = _ref2.currentBreakpoint;
      var _this$props2 = _this.props,
          breaks = _this$props2.breaks,
          resources = _this$props2.resources;
      var showEntireList = _this.state.showEntireList;


      if (breaks && !showEntireList) {
        if (currentBreakpoint && breaks[currentBreakpoint]) {
          return resources.slice(0, breaks[currentBreakpoint]);
        }
      }

      return resources;
    };

    _this.state = {
      showDetailModal: false,
      currentResource: null,
      showEntireList: false
    };
    return _this;
  }

  // @TODO: make it as utility


  _createClass(ResourcesListWithDetail, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          breakpointsStatus = _props.breakpointsStatus,
          resources = _props.resources,
          dateType = _props.dateType,
          navigateToSection = _props.navigateToSection,
          navigateToTopic = _props.navigateToTopic,
          showAllAction = _props.showAllAction,
          navigateToDetail = _props.navigateToDetail,
          generateDetailUrl = _props.generateDetailUrl,
          showSimpleItems = _props.showSimpleItems,
          others = _objectWithoutProperties(_props, ['breakpointsStatus', 'resources', 'dateType', 'navigateToSection', 'navigateToTopic', 'showAllAction', 'navigateToDetail', 'generateDetailUrl', 'showSimpleItems']);

      var _state = this.state,
          showDetailModal = _state.showDetailModal,
          currentResource = _state.currentResource;


      var count = resources.length;

      var currentBreakpoint = this.getCurrentBreakPoint(breakpointsStatus);
      var showedResources = this.getShowedResources({ currentBreakpoint: currentBreakpoint });
      var loading = Object.keys(breakpointsStatus).length === 0;

      return _react2.default.createElement(
        BaseStyle,
        others,
        loading && _react2.default.createElement(_Spinner2.default, { position: 'absolute' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            ItemsStyle,
            {
              breakpointsStatus: breakpointsStatus
            },
            showedResources.map(function (resource) {
              return _react2.default.createElement(
                ItemStyle,
                {
                  breakpointsStatus: breakpointsStatus,
                  count: count,
                  key: resource.slug
                },
                _react2.default.createElement(_ResourcePreview2.default, _extends({}, resource, {
                  dateType: dateType,
                  generateDetailUrl: generateDetailUrl,
                  handleDetailView: _this2.onHandleDetailView,
                  hideFooter: showSimpleItems,
                  navigateToDetail: navigateToDetail
                }))
              );
            })
          ),
          resources.length > showedResources.length && _react2.default.createElement(
            ActionsStyle,
            null,
            _react2.default.createElement(_Button2.default, {
              expanded: currentBreakpoint === 'XS',
              label: 'Show more',
              onClick: function onClick() {
                return _this2.setState({ showEntireList: true });
              },
              skin: 'outline'
            })
          ),
          showAllAction && resources.length === showedResources.length && _react2.default.createElement(
            ActionsStyle,
            null,
            _react2.default.createElement(_Button2.default, {
              expanded: currentBreakpoint === 'XS',
              href: showAllAction.href,
              label: 'Show All',
              onClick: showAllAction.onClick,
              skin: 'outline'
            })
          ),
          _react2.default.createElement(
            _Modal2.default,
            {
              handleClose: this.closeDetailModal,
              open: showDetailModal
            },
            currentResource ? _react2.default.createElement(_ResourceDetail2.default, _extends({}, currentResource, {
              navigateTo: this.handleNavigateTo(currentResource.link),
              navigateToSection: navigateToSection,
              navigateToTopic: navigateToTopic
            })) : _react2.default.createElement('div', null)
          )
        )
      );
    }
  }]);

  return ResourcesListWithDetail;
}(_react2.default.Component);

ResourcesListWithDetail.propTypes = {
  breakpointsStatus: _propTypes.object,
  breaks: _propTypes.object,
  dateType: _propTypes.string,
  generateDetailUrl: _propTypes.func,
  handleDetailView: _propTypes.func,
  navigateToDetail: _propTypes.func,
  navigateToSection: _propTypes.func,
  navigateToTopic: _propTypes.func,
  resources: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_ResourcePreview2.default.propTypes)).isRequired,
  showAllAction: (0, _propTypes.shape)({
    onClick: _propTypes.func.isRequired
  }),
  showSimpleItems: _propTypes.bool
};
ResourcesListWithDetail.defaultProps = {
  breakpointsStatus: {}
};
exports.default = (0, _QueryHandler2.default)(ResourcesListWithDetail);