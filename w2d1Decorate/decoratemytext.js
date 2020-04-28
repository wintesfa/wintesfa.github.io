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

    document.getElementById("blingcbox").onchange = changeStyleFun;


};

function changeStyleFun(){
    //alert("styled up");
    "use strict";
    let textarea = document.getElementById("myText");
    textarea.style.fontWeight = "bold";
    textarea.style.color = "green";
    textarea.style.textDecoration = "underline";

}
