var body = document.getElementsByTagName("html")[0];
var hue = 230;

function changeBackground() {
    hue += 1;
    if (hue > 360) {
        hue = 0;
    }
    body.style.background = "hsl(" + hue + ", 50%, 66%)";
}

setInterval(changeBackground, 75);