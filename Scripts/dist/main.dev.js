"use strict";

var _translator = _interopRequireDefault(require("../Scripts/translator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var button = document.getElementById("btn");
var inputVal = document.getElementById("ipt");
button.addEventListener("click", function () {
  document.getElementById("disp").innerHTML += (0, _translator["default"])(inputVal.value);
});