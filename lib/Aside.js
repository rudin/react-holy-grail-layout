'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  @media (min-width: ', ') {\n    flex: 0 0 ', ';\n  }\n  @media (max-width: ', ') {\n    ', ';\n    ', ';\n  }\n'], ['\n  ', ';\n  @media (min-width: ', ') {\n    flex: 0 0 ', ';\n  }\n  @media (max-width: ', ') {\n    ', ';\n    ', ';\n  }\n']);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var breakpoint = function breakpoint(props) {
  return props.theme.breakpoints ? props.theme.breakpoints[props.breakpoint || 1] : '46em';
};

exports.default = _View2.default.extend(_templateObject, function (props) {
  return props.right ? '' : 'order: -1;';
}, breakpoint, function (props) {
  return props.width ? props.width : '12em';
}, breakpoint, function (props) {
  return !props.primary && 'order: 0;';
}, function (props) {
  return props.primary && !props.left && 'order: -1;';
});