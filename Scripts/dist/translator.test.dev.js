"use strict";

var _translator = _interopRequireDefault(require("../Scripts/translator.js"));

var _data = _interopRequireDefault(require("../data/data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//valid inputs 
it("Should translate a to '.-'", function () {
  var translation = translateToMorse('a');
  expect(translation).toBe('.-');
}); //invalid inputs 
//null inputs

it('should return please input valid text when input it null', function () {});