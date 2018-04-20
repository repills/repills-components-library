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

var _basic = require('../Icon/icons/basic');

var _repillsConfig = require('repills-config');

var _QueryHandler = require('../QueryHandler');

var _QueryHandler2 = _interopRequireDefault(_QueryHandler);

var _Logo = require('../Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;


var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var SubTitleStyle = _styledComponents2.default.div(_templateObject, _style.subTitle);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);
var TypeListStyle = _styledComponents2.default.div(_templateObject, _style.typeList);
var TypeBlockStyle = _styledComponents2.default.div(_templateObject, _style.typeBlock);
var LogoStyle = _styledComponents2.default.div(_templateObject, _style.logo);

var showedTypes = [_repillsConfig.types.article, _repillsConfig.types.tutorial, _repillsConfig.types.course, _repillsConfig.types.tool];

var HomePageHeader = function HomePageHeader(_ref) {
  var breakpointsStatus = _ref.breakpointsStatus,
      description = _ref.description,
      subTitle = _ref.subTitle,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ['breakpointsStatus', 'description', 'subTitle', 'title']);

  var typesList = breakpointsStatus[_breakpoints.MD] ? showedTypes : showedTypes.slice(0, 3);
  var iconSize = breakpointsStatus[_breakpoints.MD] ? 44 : 36;

  return _react2.default.createElement(
    BaseStyle,
    _extends({
      breakpointsStatus: breakpointsStatus
    }, others),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        LogoStyle,
        { breakpointsStatus: breakpointsStatus },
        _react2.default.createElement(_Logo2.default, {
          color: basic.primaryHighest,
          secondaryColor: neutral.medium
        })
      ),
      _react2.default.createElement(TitleStyle, {
        breakpointsStatus: breakpointsStatus,
        dangerouslySetInnerHTML: { __html: title }
      }),
      subTitle && _react2.default.createElement(
        SubTitleStyle,
        null,
        subTitle
      ),
      description && _react2.default.createElement(
        DescriptionStyle,
        null,
        description
      ),
      _react2.default.createElement(
        TypeListStyle,
        { breakpointsStatus: breakpointsStatus },
        typesList.map(function (type) {
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
      )
    )
  );
};

HomePageHeader.propTypes = {
  breakpointsStatus: _propTypes.object,
  description: _propTypes.string,
  subTitle: _propTypes.string,
  title: _propTypes.string
};

HomePageHeader.defaultProps = {
  breakpointsStatus: {}
};

exports.default = (0, _QueryHandler2.default)(HomePageHeader);