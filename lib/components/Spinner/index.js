'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);

var Spinner = function Spinner(_ref) {
  var position = _ref.position;

  return _react2.default.createElement(
    BaseStyle,
    { position: position },
    _react2.default.createElement(
      'svg',
      {
        enableBackground: 'new 0 0 40 40',
        height: '40px',
        viewBox: '0 0 40 40',
        width: '40px'
      },
      _react2.default.createElement('path', {
        d: 'M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z',
        fill: '#000',
        opacity: '0.2'
      }),
      _react2.default.createElement(
        'path',
        {
          d: 'M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z',
          fill: '#000'
        },
        _react2.default.createElement('animateTransform', {
          attributeName: 'transform',
          attributeType: 'xml',
          dur: '0.5s',
          from: '0 20 20',
          repeatCount: 'indefinite',
          to: '360 20 20',
          type: 'rotate'
        })
      )
    )
  );
};

Spinner.propTypes = {
  position: (0, _propTypes.oneOf)(['relative', 'absolute', 'fixed'])
};

Spinner.defaultProps = {
  position: 'relative'
};

exports.default = Spinner;