// JavaScript Document
// console.log("Howdy!");

// define all variables
var waterButton = document.querySelector("img:nth-of-type(1)");
var Dialog1 = document.querySelector("dialog:nth-of-type(1)");
var aarderijk = document.querySelector("img:nth-of-type(2)");
var Dialog2 = document.querySelector("dialog:nth-of-type(2)");
var luchtrijk = document.querySelector("img:nth-of-type(3)");
var Dialog3 = document.querySelector("dialog:nth-of-type(3)");
var Vuurnatie = document.querySelector("img:nth-of-type(4)");
var Dialog4 = document.querySelector("dialog:nth-of-type(4)");

// console.log(waterButton);

// actions
waterButton.onclick = showAapInfo1;
aarderijk.onclick = showAapInfo2;
luchtrijk.onclick = showAapInfo3;
Vuurnatie.onclick = showAapInfo4;

// functions
function showAapInfo1() {
	Dialog1.showModal();
}

function showAapInfo2() {
	Dialog2.showModal();
}

function showAapInfo3() {
	Dialog3.showModal();
}

function showAapInfo4() {
	Dialog4.showModal();
}