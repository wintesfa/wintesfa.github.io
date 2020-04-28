/*jshint esversion: 6 */


    window.onload = function(){
    "use strict";
        //hello world ALERT BUTTON
    let bigger_decorations_btn = document.getElementById("bigger_decorations");
   // bigger_decorations_btn.onclick = alertHelloWorld;   //ALERT HELLO WORLD
        bigger_decorations_btn.onclick = changeTestSize;

    function alertHelloWorld(){
        alert("hello world");
    }

    function changeTestSize() {
        let textarea = document.getElementById("myText");
        textarea.style.fontSize = "24pt";
    }


    };


