'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionPreview = require('../SectionPreview');

var _SectionPreview2 = _interopRequireDefault(_SectionPreview);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

require('slick-carousel/slick/slick.css');

require('slick-carousel/slick/slick-theme.css');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

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

var defaultSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4.5,
  slidesToScroll: 1,
  mobileFirst: true,
  initialSlide: 0,
  respondTo: 'slider'
};

var SectionsCarousel = function (_React$Component) {
  _inherits(SectionsCarousel, _React$Component);

  function SectionsCarousel(props) {
    _classCallCheck(this, SectionsCarousel);

    var _this = _possibleConstructorReturn(this, (SectionsCarousel.__proto__ || Object.getPrototypeOf(SectionsCarousel)).call(this, props));

    _this.next = function () {
      _this.slider.slickNext();
    };

    _this.previous = function () {
      _this.slider.slickPrev();
    };

    _this.settings = _this.props.settings ? Object.assign({}, defaultSettings, _this.props.settings) : defaultSettings;
    return _this;
  }

  _createClass(SectionsCarousel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          sections = _props.sections,
          showNavigation = _props.showNavigation,
          _navigateTo = _props.navigateTo,
          others = _objectWithoutProperties(_props, ['sections', 'showNavigation', 'navigateTo']);

      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          ItemsStyle,
          null,
          _react2.default.createElement(
            _reactSlick2.default,
            _extends({
              ref: function ref(c) {
                return _this2.slider = c;
              }
            }, this.settings),
            sections.map(function (section) {
              return _react2.default.createElement(
                'div',
                { key: section.id },
                _react2.default.createElement(
                  ItemStyle,
                  null,
                  _react2.default.createElement(_SectionPreview2.default, _extends({
                    navigateTo: function navigateTo() {
                      return _navigateTo(section.path);
                    }
                  }, section))
                )
              );
            })
          )
        ),
        showNavigation && _react2.default.createElement(
          ActionsStyle,
          null,
          _react2.default.createElement(_Button2.default, {
            autoWidth: true,
            label: 'Prev',
            onClick: this.previous,
            skin: 'outline'
          }),
          _react2.default.createElement(_Button2.default, {
            autoWidth: true,
            label: 'Next',
            onClick: this.next,
            skin: 'outline'
          })
        )
      );
    }
  }]);

  return SectionsCarousel;
}(_react2.default.Component);

SectionsCarousel.displayName = 'SectionsCarousel';

SectionsCarousel.propTypes = {
  navigateTo: _propTypes.func,
  sections: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_SectionPreview2.default.propTypes)).isRequired,
  settings: _propTypes.object,
  showNavigation: _propTypes.bool
};

exports.default = SectionsCarousel;