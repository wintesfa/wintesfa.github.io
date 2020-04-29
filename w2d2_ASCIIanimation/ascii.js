/*jshint esversion: 6 */

window.onload = function () {
    "use strict";
    document.getElementById("fontsize").onchange = function changeSize() {
        console.log(document.getElementById("fontsize").value);
        document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
    };

    document.getElementById("animation").onchange = function () {
        document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
    };

    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("turbo").onclick = turboMode;
};


var timer = null;
var framesCout = 0;
var animationArrFrames;

function start() {
    "use strict";
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    document.getElementById("stop").disabled = false;
    animationArrFrames = document.getElementById("text-area").value.split("=====\n");
    if (timer === null) {
        if (document.getElementById("turbo").checked) {
            timer = setInterval(draw, 50);
        } else {
            timer = setInterval(draw, 250);
        }
    }
}

function stop() {
    "use strict";
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(timer);
    timer = null;
    document.getElementById("text-area").value = animationArrFrames.join("=====\n");
    framesCout = 0;
}


function turboMode() {
    "use strict";
    var status = document.getElementById("turbo");
    if (timer !== null) {
        if (status.checked) {
            clearInterval(timer);
            timer = setInterval(draw, 50);
        } else {
            clearInterval(timer);
            timer = setInterval(draw, 250);
        }
    }
}

function draw() {
    "use strict";
    var txtArea = document.getElementById("text-area");

    if (framesCout < animationArrFrames.length) {
        txtArea.value = animationArrFrames[framesCout];
        framesCout++;
    } else {
        txtArea.value = animationArrFrames[0];
        framesCout = 1;
    }
}