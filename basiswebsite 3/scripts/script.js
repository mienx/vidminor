// JavaScript Document
// console.log("Howdy!");

// define all variables
var waterButton = document.querySelector("section img:nth-of-type(1)");
var Dialog1 = document.querySelector("dialog:nth-of-type(1)");
var aarderijk = document.querySelector("img:nth-of-type(2)");
var Dialog2 = document.querySelector("dialog:nth-of-type(2)");
var luchtrijk = document.querySelector("img:nth-of-type(3)");
var Dialog3 = document.querySelector("dialog:nth-of-type(3)");
var Vuurnatie = document.querySelector("img:nth-of-type(4)");
var Dialog4 = document.querySelector("dialog:nth-of-type(4)");

// achtergrond liedje
var musicButton = document.querySelector(".muteButton");
var achtergrondmMuziek = new Audio('./images/avatarliedje.mp3');

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



function muteMusicPlayer() {
    if (achtergrondmMuziek.paused) {
        achtergrondmMuziek.play();
        musicButton.src = "./images/music-note-on-2.png"
    } else {
        achtergrondmMuziek.pause();
        musicButton.src = "./images/music-note-2.png"

    }
}
musicButton.addEventListener("click", muteMusicPlayer);
