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

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

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
      var resources = _this.props.resources;

      var currentResource = resources.find(function (e) {
        return e.reference === reference;
      });
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
      var _this$props = _this.props,
          breaks = _this$props.breaks,
          resources = _this$props.resources;
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

  _createClass(ResourcesListWithDetail, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          resources = _props.resources,
          dateType = _props.dateType,
          navigateToSection = _props.navigateToSection,
          navigateToTopic = _props.navigateToTopic,
          showAllAction = _props.showAllAction,
          others = _objectWithoutProperties(_props, ['resources', 'dateType', 'navigateToSection', 'navigateToTopic', 'showAllAction']);

      var _state = this.state,
          showDetailModal = _state.showDetailModal,
          currentResource = _state.currentResource;


      var count = resources.length;

      return _react2.default.createElement(
        _reactContainerQuery.ContainerQuery,
        { query: _breakpoints.query },
        function (params) {
          var currentBreakpoint = _this2.getCurrentBreakPoint(params);
          var showedResources = _this2.getShowedResources({ currentBreakpoint: currentBreakpoint });

          return _react2.default.createElement(
            BaseStyle,
            others,
            Object.keys(params).length > 0 && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                ItemsStyle,
                {
                  breakpointsStatus: params
                },
                showedResources.map(function (resource) {
                  return _react2.default.createElement(
                    ItemStyle,
                    {
                      breakpointsStatus: params,
                      count: count,
                      key: resource.link
                    },
                    _react2.default.createElement(_ResourcePreview2.default, _extends({}, resource, {
                      dateType: dateType,
                      handleDetailView: _this2.onHandleDetailView
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
                  }
                })
              ),
              showAllAction && resources.length === showedResources.length && _react2.default.createElement(
                ActionsStyle,
                null,
                _react2.default.createElement(_Button2.default, {
                  expanded: currentBreakpoint === 'XS',
                  label: 'Show All',
                  onClick: showAllAction.onClick
                })
              ),
              _react2.default.createElement(
                _Modal2.default,
                {
                  handleClose: _this2.closeDetailModal,
                  open: showDetailModal
                },
                currentResource ? _react2.default.createElement(_ResourceDetail2.default, _extends({}, currentResource, {
                  navigateTo: _this2.handleNavigateTo(currentResource.link),
                  navigateToSection: navigateToSection,
                  navigateToTopic: navigateToTopic
                })) : _react2.default.createElement('div', null)
              )
            )
          );
        }
      );
    }
  }]);

  return ResourcesListWithDetail;
}(_react2.default.Component);

ResourcesListWithDetail.propTypes = {
  breaks: _propTypes.object,
  dateType: _propTypes.string,
  handleDetailView: _propTypes.func,
  navigateToSection: _propTypes.func,
  navigateToTopic: _propTypes.func,
  resources: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_ResourcePreview2.default.propTypes)).isRequired,
  showAllAction: (0, _propTypes.shape)({
    onClick: _propTypes.func.isRequired
  })
};
exports.default = ResourcesListWithDetail;