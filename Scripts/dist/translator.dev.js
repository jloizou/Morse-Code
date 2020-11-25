"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = _interopRequireDefault(require("../data/data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const inputVal = document.getElementById("ipt");
// const display = document.getElementById("disp");
var translate = function translate(inputVal) {
  var newDisplay = [];
  var splitInputVal = inputVal.split("");
  splitInputVal.forEach(function (letter) {
    var morseVal = _data["default"][letter];
    newDisplay += morseVal;
  });
  return newDisplay;
};

var _default = translate;
exports["default"] = _default;