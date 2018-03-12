'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../utils');

var _basic = require('../Icon/icons/basic');

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var MainInfoStyle = _styledComponents2.default.div(_templateObject, _style.mainInfo);
var SecondaryInfoStyle = _styledComponents2.default.div(_templateObject, _style.secondaryInfo);
var SourceStyle = _styledComponents2.default.a(_templateObject, _style.source);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var AuthorStyle = _styledComponents2.default.div(_templateObject, _style.author);
var TypeStyle = _styledComponents2.default.div(_templateObject, _style.type);
var DateStyle = _styledComponents2.default.div(_templateObject, _style.date);
var DetailStyle = _styledComponents2.default.div(_templateObject, _style.detail);

var ResourcePreview = function (_React$Component) {
  _inherits(ResourcePreview, _React$Component);

  function ResourcePreview() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResourcePreview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResourcePreview.__proto__ || Object.getPrototypeOf(ResourcePreview)).call.apply(_ref, [this].concat(args))), _this), _this.handleDetailView = function () {
      var _this$props = _this.props,
          handleDetailView = _this$props.handleDetailView,
          reference = _this$props.reference;

      handleDetailView({ reference: reference });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResourcePreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          title = _props.title,
          author = _props.author,
          link = _props.link,
          createdAt = _props.createdAt,
          publishedAt = _props.publishedAt,
          dateType = _props.dateType,
          typeLabel = _props.typeLabel;


      return _react2.default.createElement(
        BaseStyle,
        null,
        _react2.default.createElement(
          MainInfoStyle,
          null,
          _react2.default.createElement(
            SourceStyle,
            {
              href: link
            },
            _react2.default.createElement(_basic.LinkIcon, { size: 18 }),
            _react2.default.createElement(
              'span',
              null,
              (0, _utils.getBaseUrl)(link)
            )
          ),
          _react2.default.createElement(
            TitleStyle,
            {
              onClick: this.handleDetailView
            },
            title
          ),
          _react2.default.createElement(
            DetailStyle,
            null,
            _react2.default.createElement(
              TypeStyle,
              null,
              _react2.default.createElement(_basic.SquareFilledPillIcon, {
                color: color,
                size: 16
              }),
              _react2.default.createElement(
                'span',
                null,
                typeLabel
              )
            ),
            '\u2014',
            author && _react2.default.createElement(
              AuthorStyle,
              null,
              'by ',
              _react2.default.createElement(
                'span',
                null,
                author
              )
            )
          )
        ),
        _react2.default.createElement(
          SecondaryInfoStyle,
          null,
          dateType === 'createdAt' && _react2.default.createElement(
            DateStyle,
            null,
            (0, _moment2.default)(createdAt).fromNow()
          ),
          dateType === 'publishedAt' && _react2.default.createElement(
            DateStyle,
            null,
            (0, _moment2.default)(publishedAt).fromNow()
          )
        )
      );
    }
  }]);

  return ResourcePreview;
}(_react2.default.Component);

ResourcePreview.propTypes = {
  author: _propTypes.string,
  color: _propTypes.string.isRequired,
  createdAt: _propTypes.string,
  dateType: _propTypes.string,
  handleDetailView: _propTypes.func,
  link: _propTypes.string.isRequired,
  publishedAt: _propTypes.string,
  reference: _propTypes.string,
  title: _propTypes.string.isRequired,
  typeLabel: _propTypes.string.isRequired
};
ResourcePreview.defaultProps = {
  dateType: 'createdAt'
};
exports.default = ResourcePreview;