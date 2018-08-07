'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _basic = require('../Icon/icons/basic');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      open = _ref.open,
      size = _ref.size,
      others = _objectWithoutProperties(_ref, ['handleClose', 'children', 'open', 'size']);

  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      open: open
    }),
    _react2.default.createElement(OverlayStyle, {
      closeOnClick: handleClose,
      onClick: handleClose ? handleClose : null,
      open: open
    }),
    _react2.default.createElement(
      WrapperStyle,
      {
        size: size
      },
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
  );
}

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: _propTypes.element.isRequired,
  handleClose: _propTypes.func,
  open: _propTypes.bool,
  size: (0, _propTypes.oneOf)(['M', 'L'])
};

Modal.defaultProps = {
  size: 'M'
};

exports.default = Modal;