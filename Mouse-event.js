let imgObj = null;
imgObj = document.getElementById("myImages");

// function init() {
//     imgObj = document.getElementById("myImages");
imgObj.style.position = "relative";
imgObj.style.left = "0px";

// }

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}

// window.onload = init;
