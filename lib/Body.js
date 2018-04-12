'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  @media (min-width: 700px) {\n    flex-direction: row;\n  }\n}\n'], ['\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  @media (min-width: 700px) {\n    flex-direction: row;\n  }\n}\n']);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _View2.default.extend(_templateObject);