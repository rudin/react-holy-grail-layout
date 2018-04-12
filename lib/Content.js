'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  @media (min-width: ', ') {\n    flex: 1;\n  }\n'], ['\n  @media (min-width: ', ') {\n    flex: 1;\n  }\n']);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _View2.default.extend(_templateObject, function (props) {
  return props.theme.breakpoints ? props.theme.breakpoints[props.breakpoint || 1] : '46em';
});