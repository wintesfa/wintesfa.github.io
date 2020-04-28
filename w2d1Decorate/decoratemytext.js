/*jshint esversion: 6 */


window.onload = function () {
    "use strict";
    //hello world ALERT BUTTON
    let bigger_decorations_btn = document.getElementById("bigger_decorations");
    // bigger_decorations_btn.onclick = alertHelloWorld;   //ALERT HELLO WORLD
    bigger_decorations_btn.onclick = changeTestSize;

    function alertHelloWorld() {
        alert("hello world");
    }

    function changeTestSize() {
        let textarea = document.getElementById("myText");
        textarea.style.fontSize = "24pt";
    }

    let chkbx = document.getElementById("blingcbox");
    chkbx.onchange = function () {
        if(chkbx.checked) {
            changeStyleFun();
        }
        else {
            changeBack();
        }
    };


};

function changeStyleFun() {
    //alert("styled up");
    "use strict";
    let textarea = document.getElementById("myText");
    textarea.style.fontWeight = "bold";
    textarea.style.color = "green";
    textarea.style.textDecoration = "underline";

}
function changeBack() {
    //alert("styled up");
    "use strict";
    let textarea = document.getElementById("myText");
    textarea.style.fontWeight = "";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";

}