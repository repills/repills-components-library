'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url) {
  var withProtocol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var result = /^.+?[^/:](?=[?/]|$)/.exec(url);

  return withProtocol ? result : result[0].replace(/^https?:\/\//i, '').replace('www.', '');
};

;