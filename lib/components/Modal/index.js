'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _basic = require('../Icon/icons/basic');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styled block
var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var OverlayStyle = _styledComponents2.default.div(_templateObject, _style.overlay);
var WrapperStyle = _styledComponents2.default.div(_templateObject, _style.wrapper);
var ModalStyle = _styledComponents2.default.div(_templateObject, _style.modal);
var ContentStyle = _styledComponents2.default.div(_templateObject, _style.content);
var CloseStyle = _styledComponents2.default.div(_templateObject, _style.close);
var ModalHeaderStyle = _styledComponents2.default.div(_templateObject, _style.header);
var ModalBodyStyle = _styledComponents2.default.div(_templateObject, _style.body);

function Modal(_ref) {
  var handleClose = _ref.handleClose,
      children = _ref.children,
      open = _ref.open;

  return open ? _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(OverlayStyle, {
      closeOnClick: handleClose,
      onClick: handleClose ? handleClose : null
    }),
    _react2.default.createElement(
      WrapperStyle,
      null,
      _react2.default.createElement(
        ModalStyle,
        null,
        _react2.default.createElement(
          ContentStyle,
          null,
          _react2.default.createElement(
            ModalHeaderStyle,
            null,
            handleClose && _react2.default.createElement(
              CloseStyle,
              {
                onClick: handleClose
              },
              _react2.default.createElement(_basic.CloseIcon, { size: 22 })
            )
          ),
          _react2.default.createElement(
            ModalBodyStyle,
            null,
            children
          )
        )
      )
    )
  ) : null;
}

Modal.propTypes = {
  children: _propTypes.element.isRequired,
  handleClose: _propTypes.func,
  open: _propTypes.bool
};

exports.default = Modal;