'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _sections = require('../Icon/icons/sections');

var icons = _interopRequireWildcard(_sections);

var _propTypes = require('prop-types');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var InfoStyle = _styledComponents2.default.div(_templateObject, _style.info);
var NameStyle = _styledComponents2.default.h3(_templateObject, _style.name);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var DetailsStyle = _styledComponents2.default.div(_templateObject, _style.details);
var DetailStyle = _styledComponents2.default.span(_templateObject, _style.detail);

var SectionPreview = function (_React$Component) {
  _inherits(SectionPreview, _React$Component);

  function SectionPreview() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SectionPreview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SectionPreview.__proto__ || Object.getPrototypeOf(SectionPreview)).call.apply(_ref, [this].concat(args))), _this), _this.navigate = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.props.navigateTo();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SectionPreview, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.name !== nextProps.name;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          description = _props.description,
          icon = _props.icon,
          name = _props.name,
          path = _props.path,
          navigateTo = _props.navigateTo,
          resourcesCount = _props.resourcesCount,
          topicsCount = _props.topicsCount,
          disabled = _props.disabled,
          others = _objectWithoutProperties(_props, ['color', 'description', 'icon', 'name', 'path', 'navigateTo', 'resourcesCount', 'topicsCount', 'disabled']);

      var Icon = icon && icons[icon];
      var CoverStyle = _styledComponents2.default[!disabled && navigateTo ? 'a' : 'div'](_templateObject, _style.cover);

      return _react2.default.createElement(
        BaseStyle,
        _extends({}, others, {
          disabled: disabled
        }),
        _react2.default.createElement(
          CoverStyle,
          {
            disabled: disabled,
            onClick: !disabled ? this.navigate : undefined
          },
          _react2.default.createElement(
            IconStyle,
            null,
            _react2.default.createElement(Icon, {
              color: color,
              size: 88
            })
          ),
          _react2.default.createElement(
            NameStyle,
            null,
            name
          )
        ),
        _react2.default.createElement(
          InfoStyle,
          null,
          _react2.default.createElement(
            DescriptionStyle,
            null,
            description
          ),
          _react2.default.createElement(
            DetailsStyle,
            null,
            resourcesCount !== 'undefined' && _react2.default.createElement(
              DetailStyle,
              null,
              _react2.default.createElement(
                'strong',
                null,
                resourcesCount
              ),
              ' pill',
              resourcesCount === 1 ? '' : 's'
            ),
            topicsCount !== 'undefined' && _react2.default.createElement(
              DetailStyle,
              null,
              _react2.default.createElement(
                'strong',
                null,
                topicsCount
              ),
              ' topic',
              topicsCount === 1 ? '' : 's'
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { lineHeight: 0 } },
            _react2.default.createElement(_Button2.default, {
              disabled: disabled,
              ellipsis: true,
              expanded: true,
              href: !disabled ? path : undefined,
              label: disabled ? 'Coming soon' : 'Learn',
              onClick: navigateTo,
              skin: 'outlineTertiary'
            })
          )
        )
      );
    }
  }]);

  return SectionPreview;
}(_react2.default.Component);

SectionPreview.propTypes = {
  color: _propTypes.string,
  description: _propTypes.string,
  disabled: _propTypes.bool,
  icon: _propTypes.string.isRequired,
  name: _propTypes.string.isRequired,
  navigateTo: _propTypes.func,
  path: _propTypes.string.isRequired,
  resourcesCount: _propTypes.number,
  topicsCount: _propTypes.number
};
exports.default = SectionPreview;