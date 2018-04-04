"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var gridItem = exports.gridItem = function gridItem(count, columns, gutter, buttonSpace) {
  return "\n    padding-left: " + gutter + ";\n    padding-right: " + gutter + ";\n    flex-basis: " + 100 / columns + "%;\n    max-width: " + 100 / columns + "%;\n    margin-bottom: " + buttonSpace + ";\n    \n    " + (columns === 1 ? "\n        &:last-child {\n          margin-bottom: 0;\n        }\n      " : "\n        &:nth-last-child(-n+" + (count % columns === 0 ? columns : count % columns) + ") {\n          margin-bottom: 0;\n        }\n      ") + "\n";
};