'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _breakpoints;

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionPreview = require('../SectionPreview');

var _SectionPreview2 = _interopRequireDefault(_SectionPreview);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDynamicSwiper = require('react-dynamic-swiper');

require('react-dynamic-swiper/lib/styles.css');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _breakpoints2 = require('../../config/breakpoints');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ActionsStyle = _styledComponents2.default.div(_templateObject, _style.actions);

// @TODO create a default settings and allow to pass options as props
var settings = {
  slidesPerView: 5.25,
  spaceBetween: 24,
  mousewheel: true,
  breakpoints: (_breakpoints = {}, _defineProperty(_breakpoints, _breakpoints2.query[_breakpoints2.SM].minWidth, {
    slidesPerView: 1.25,
    spaceBetween: 12
  }), _defineProperty(_breakpoints, _breakpoints2.query[_breakpoints2.MD].minWidth, {
    slidesPerView: 2.25
  }), _defineProperty(_breakpoints, _breakpoints2.query[_breakpoints2.XL].minWidth, {
    slidesPerView: 3.25
  }), _breakpoints)
};

var SectionsCarousel = function (_React$Component) {
  _inherits(SectionsCarousel, _React$Component);

  function SectionsCarousel() {
    _classCallCheck(this, SectionsCarousel);

    return _possibleConstructorReturn(this, (SectionsCarousel.__proto__ || Object.getPrototypeOf(SectionsCarousel)).apply(this, arguments));
  }

  _createClass(SectionsCarousel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          sections = _props.sections,
          _navigateTo = _props.navigateTo,
          others = _objectWithoutProperties(_props, ['sections', 'navigateTo']);

      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          _reactDynamicSwiper.Swiper,
          {
            navigation: false,
            pagination: false,
            ref: function ref(e) {
              return _this2.slider = e.swiper();
            },
            swiperOptions: settings
          },
          sections.map(function (section) {
            return _react2.default.createElement(
              _reactDynamicSwiper.Slide,
              { key: section.id },
              _react2.default.createElement(_SectionPreview2.default, _extends({
                navigateTo: function navigateTo() {
                  return _navigateTo(section.path);
                }
              }, section))
            );
          })
        )
      );
    }
  }]);

  return SectionsCarousel;
}(_react2.default.Component);

SectionsCarousel.propTypes = {
  navigateTo: _propTypes.func,
  sections: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_SectionPreview2.default.propTypes)).isRequired
};
exports.default = SectionsCarousel;