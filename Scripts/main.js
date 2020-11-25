import translate from "../Scripts/translator.js"

const button = document.getElementById("btn");
const inputVal = document.getElementById("ipt");

button.addEventListener("click", () => {
    document.getElementById("disp").innerHTML += translate(inputVal.value)

});