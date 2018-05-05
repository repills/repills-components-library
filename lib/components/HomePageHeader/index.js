'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _breakpoints = require('../../config/breakpoints');

var _types = require('../Icon/icons/types');

var icons = _interopRequireWildcard(_types);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _basic = require('../Icon/icons/basic');

var _repillsConfig = require('repills-config');

var _QueryHandler = require('../QueryHandler');

var _QueryHandler2 = _interopRequireDefault(_QueryHandler);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var BoxStyle = _styledComponents2.default.div(_templateObject, _style.box);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);
var TypeListStyle = _styledComponents2.default.div(_templateObject, _style.typeList);
var TypeBlockStyle = _styledComponents2.default.div(_templateObject, _style.typeBlock);
var ContentStyle = _styledComponents2.default.div(_templateObject, _style.content);

var showedTypes = [_repillsConfig.types.article, _repillsConfig.types.tutorial, _repillsConfig.types.course, _repillsConfig.types.tool, _repillsConfig.types.library, _repillsConfig.types.book, _repillsConfig.types.talk];

var HomePageHeader = function HomePageHeader(_ref) {
  var breakpointsStatus = _ref.breakpointsStatus,
      description = _ref.description,
      primaryAction = _ref.primaryAction,
      secondaryAction = _ref.secondaryAction,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ['breakpointsStatus', 'description', 'primaryAction', 'secondaryAction', 'title']);

  var iconSize = breakpointsStatus[_breakpoints.SM] ? 44 : 32;

  return _react2.default.createElement(
    BaseStyle,
    _extends({
      breakpointsStatus: breakpointsStatus
    }, others),
    _react2.default.createElement(
      ContentStyle,
      null,
      _react2.default.createElement(
        BoxStyle,
        { breakpointsStatus: breakpointsStatus },
        _react2.default.createElement(TitleStyle, {
          breakpointsStatus: breakpointsStatus,
          dangerouslySetInnerHTML: { __html: title }
        }),
        description && _react2.default.createElement(
          DescriptionStyle,
          null,
          description
        ),
        primaryAction && _react2.default.createElement(_Button2.default, _extends({
          label: 'Take a look our topics',
          skin: 'primary',
          style: { marginTop: '2rem' }
        }, primaryAction))
      ),
      _react2.default.createElement(
        BoxStyle,
        { breakpointsStatus: breakpointsStatus },
        _react2.default.createElement(
          TypeListStyle,
          { breakpointsStatus: breakpointsStatus },
          showedTypes.map(function (type) {
            var Icon = icons[type.label.singular + 'Icon'];
            return _react2.default.createElement(
              TypeBlockStyle,
              { key: type.label.singular },
              _react2.default.createElement(Icon, { size: iconSize }),
              _react2.default.createElement(
                'span',
                null,
                type.label.plural.toUpperCase()
              )
            );
          }),
          _react2.default.createElement(
            TypeBlockStyle,
            null,
            _react2.default.createElement(_basic.MoreIcon, { size: iconSize }),
            _react2.default.createElement(
              'span',
              null,
              'and more'
            )
          )
        ),
        secondaryAction && _react2.default.createElement(_Button2.default, _extends({
          size: 'S',
          skin: 'outlineLight',
          style: { marginTop: '2.5rem' }
        }, secondaryAction))
      )
    )
  );
};

HomePageHeader.propTypes = {
  breakpointsStatus: _propTypes.object,
  description: _propTypes.string,
  primaryAction: (0, _propTypes.shape)(_Button2.default.propTypes),
  secondaryAction: (0, _propTypes.shape)(_Button2.default.propTypes),
  title: _propTypes.string
};

HomePageHeader.defaultProps = {
  breakpointsStatus: {}
};

exports.default = (0, _QueryHandler2.default)(HomePageHeader);