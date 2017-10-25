'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectorReg = /^##/;

exports.default = function (rulesFile) {
  var lines = _fs2.default.readFileSync(rulesFile).toString().split('\n');
  return lines.map(function (el) {
    if (el.match(selectorReg)) {
      return el.replace(selectorReg, '').replace(/"/g, '\\"');
    }
  }).filter(function (el) {
    return typeof el == 'string' && el.length > 1 && !el.match(/:|\s_|Emc/);
  }).join(', ');
};