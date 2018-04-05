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

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _basic = require('../Icon/icons/basic');

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _types = require('../Icon/icons/types');

var icons = _interopRequireWildcard(_types);

var _repillsConfig = require('repills-config');

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var PillsAnimationStyle = _styledComponents2.default.div(_templateObject, _style.pillsAnimation);
var PillStyle = _styledComponents2.default.div(_templateObject, _style.pill);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var SubTitleStyle = _styledComponents2.default.div(_templateObject, _style.subTitle);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);
var TypeListStyle = _styledComponents2.default.div(_templateObject, _style.typeList);
var TypeBlockStyle = _styledComponents2.default.div(_templateObject, _style.typeBlock);

var showedTypes = [_repillsConfig.types.article, _repillsConfig.types.tutorial, _repillsConfig.types.course, _repillsConfig.types.tool];

var HomePageHeader = function HomePageHeader(_ref) {
  var description = _ref.description,
      subTitle = _ref.subTitle,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ['description', 'subTitle', 'title']);

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      var loading = Object.keys(params).length === 0;
      var typesList = params[_breakpoints.MD] ? showedTypes : showedTypes.slice(0, 3);
      var iconSize = params[_breakpoints.MD] ? 48 : 40;

      return _react2.default.createElement(
        BaseStyle,
        _extends({
          breakpointsStatus: params
        }, others),
        loading && _react2.default.createElement(_Spinner2.default, { position: 'absolute' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            PillsAnimationStyle,
            { breakpointsStatus: params },
            [1, 2, 3].map(function (i) {
              return _react2.default.createElement(
                PillStyle,
                {
                  index: i,
                  key: 'pill-' + i
                },
                _react2.default.createElement(_basic.SquareFilledPillIcon, { size: i === 2 ? 90 : 50 })
              );
            })
          ),
          _react2.default.createElement(TitleStyle, {
            breakpointsStatus: params,
            dangerouslySetInnerHTML: { __html: title }
          }),
          subTitle && _react2.default.createElement(
            SubTitleStyle,
            null,
            subTitle
          ),
          _react2.default.createElement(
            TypeListStyle,
            { breakpointsStatus: params },
            typesList.map(function (type) {
              var Icon = icons[type.label.singular + 'Icon'];
              return _react2.default.createElement(
                TypeBlockStyle,
                null,
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
          description && _react2.default.createElement(
            DescriptionStyle,
            null,
            description
          )
        )
      );
    }
  );
};

HomePageHeader.propTypes = {
  description: _propTypes.string,
  subTitle: _propTypes.string,
  title: _propTypes.string
};

exports.default = HomePageHeader;