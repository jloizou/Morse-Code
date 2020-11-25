import MorseObj from "../data/data.js";

// const inputVal = document.getElementById("ipt");
// const display = document.getElementById("disp");

const translate = (inputVal) => {
  let newDisplay = [];
  let splitInputVal = inputVal.split("");
  splitInputVal.forEach((letter) => {
    let morseVal = MorseObj[letter];
    newDisplay += morseVal;
  });
  return newDisplay;
};

export default translate;
