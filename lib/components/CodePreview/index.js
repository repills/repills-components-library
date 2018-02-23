'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _prism = require('react-syntax-highlighter/styles/prism');

var _prismLight = require('react-syntax-highlighter/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _jsx = require('react-syntax-highlighter/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _prismLight.registerLanguage)('jsx', _jsx2.default);


var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ButtonCopyStyle = _styledComponents2.default.div(_templateObject, _style.buttonCopy);
var HeaderStyle = _styledComponents2.default.div(_templateObject, _style.header);
var TitleStyle = _styledComponents2.default.div(_templateObject, _style.title);

var overrideHighlighterStyle = {
  border: 0,
  boxShadow: 'none',
  backgroundColor: '#222',
  borderRadius: 0,
  fontSize: '12px',
  margin: 0
};

var PreviewBlock = function (_React$Component) {
  _inherits(PreviewBlock, _React$Component);

  function PreviewBlock(props) {
    _classCallCheck(this, PreviewBlock);

    var _this = _possibleConstructorReturn(this, (PreviewBlock.__proto__ || Object.getPrototypeOf(PreviewBlock)).call(this, props));

    _this.handleCopy = function () {
      return _this.setState({ copied: true });
    };

    _this.state = {
      copied: false
    };
    return _this;
  }

  _createClass(PreviewBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          language = _props.language,
          title = _props.title,
          others = _objectWithoutProperties(_props, ['children', 'language', 'title']);

      var copied = this.state.copied;


      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          HeaderStyle,
          null,
          _react2.default.createElement(
            TitleStyle,
            null,
            title
          ),
          _react2.default.createElement(
            _reactCopyToClipboard.CopyToClipboard,
            {
              onCopy: this.handleCopy,
              text: children
            },
            _react2.default.createElement(
              ButtonCopyStyle,
              null,
              copied ? 'Copied' : 'Copy'
            )
          )
        ),
        _react2.default.createElement(
          _prismLight2.default,
          {
            customStyle: overrideHighlighterStyle,
            language: language,
            style: _prism.dark
          },
          children
        )
      );
    }
  }]);

  return PreviewBlock;
}(_react2.default.Component);

PreviewBlock.propTypes = {
  children: _propTypes.string.isRequired,
  language: _propTypes.string,
  title: _propTypes.string.isRequired
};
PreviewBlock.defaultProps = {
  language: 'javascript'
};
exports.default = PreviewBlock;