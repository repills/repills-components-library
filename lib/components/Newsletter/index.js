'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _logo = require('./logo');

var _logo2 = _interopRequireDefault(_logo);

var _QueryHandler = require('../QueryHandler');

var _QueryHandler2 = _interopRequireDefault(_QueryHandler);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ActionStyle = _styledComponents2.default.div(_templateObject, _style.action);
var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ContentStyle = _styledComponents2.default.div(_templateObject, _style.content);
var FormStyle = _styledComponents2.default.form(_templateObject, _style.form);
var FormWrapperStyle = _styledComponents2.default.div(_templateObject, _style.commonWrapper);
var InfoWrapperStyle = _styledComponents2.default.div(_templateObject, _style.commonWrapper);
var IntroStyle = _styledComponents2.default.p(_templateObject, _style.intro);
var LogoStyle = _styledComponents2.default.div(_templateObject, _style.logo);
var NoteStyle = _styledComponents2.default.p(_templateObject, _style.note);
var FieldGroupStyle = _styledComponents2.default.div(_templateObject, _style.fieldGroup);
var IntroWrapperStyle = _styledComponents2.default.div(_templateObject, _style.introWrapper);

var Newsletter = function (_React$Component) {
  _inherits(Newsletter, _React$Component);

  function Newsletter() {
    _classCallCheck(this, Newsletter);

    return _possibleConstructorReturn(this, (Newsletter.__proto__ || Object.getPrototypeOf(Newsletter)).apply(this, arguments));
  }

  _createClass(Newsletter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          breakpointsStatus = _props.breakpointsStatus,
          intro = _props.intro,
          note = _props.note;


      return _react2.default.createElement(
        BaseStyle,
        null,
        _react2.default.createElement(
          ContentStyle,
          { breakpointsStatus: breakpointsStatus },
          _react2.default.createElement(
            InfoWrapperStyle,
            { breakpointsStatus: breakpointsStatus },
            _react2.default.createElement(
              IntroWrapperStyle,
              null,
              _react2.default.createElement(
                LogoStyle,
                null,
                _react2.default.createElement(_logo2.default, null)
              ),
              _react2.default.createElement(IntroStyle, { dangerouslySetInnerHTML: { __html: intro } })
            )
          ),
          _react2.default.createElement(
            FormWrapperStyle,
            { breakpointsStatus: breakpointsStatus },
            _react2.default.createElement(
              FormStyle,
              {
                action: '//fullstackbulletin.us15.list-manage.com/subscribe/post?u=b015626aa6028495fe77c75ea&id=55ace33899',
                method: 'POST',
                target: '_blank'
              },
              _react2.default.createElement(
                FieldGroupStyle,
                null,
                _react2.default.createElement(_TextField2.default, {
                  expanded: true,
                  id: 'mce-EMAIL',
                  name: 'EMAIL',
                  placeholder: 'you.are.awesome@email.com',
                  type: 'email'
                }),
                _react2.default.createElement(_Button2.default, {
                  autoWidth: true,
                  label: 'Join',
                  skin: 'primary',
                  type: 'submit'
                })
              ),
              note && _react2.default.createElement(NoteStyle, { dangerouslySetInnerHTML: { __html: note } })
            )
          )
        )
      );
    }
  }]);

  return Newsletter;
}(_react2.default.Component);

Newsletter.propTypes = {
  breakpointsStatus: _propTypes.object,
  intro: _propTypes.string.isRequired,
  note: _propTypes.string
};
Newsletter.defaultProps = {
  breakpointsStatus: {}
};
exports.default = (0, _QueryHandler2.default)(Newsletter);