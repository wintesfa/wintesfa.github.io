/*jshint  esversion:6, globalstrict:true */
'use strict';
$(function(){
    let timerId=null;

    $('#start').click(showCircle);

    function showCircle(){
        let width=$('#width').val();
        let num=$('#number').val();
        $('.circle').show().css({"height":width,"width":width,"top":"200px","left":"50%"});

        let count=parseInt($('#number').val());

        for(let i=0;i<count;i++){
            var $newCircle = $('<div />').appendTo('body');
            $newCircle.addClass("circle");
            let col="rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255) +")";
            $newCircle.css("background-color",col);
            $newCircle.click(hide);
            $newCircle.mouseenter(changeOpacity);
            $newCircle.mouseleave(resetOpacity);
        }
        timerId=setInterval(grow,$('#rate').val());
    }
    function grow(evt){
        let growAmt=parseInt($('#growAmt').val());
        let circle=$('.circle');
        let newDiameter=parseInt(circle.height())+growAmt+"px";
        let newLeft=parseInt(circle.css("left"))-growAmt/2+"px";
        let newTop=parseInt(circle.css("top"))-growAmt/2+"px";
        $(circle).css("width",newDiameter);
        $(circle).css("height",newDiameter);
    }

    $('.circle').click(hide);


    function hide(evt){
        $(this).css("visibility","hidden");
    }

    let timerForOpacity;
    function changeOpacity(evt) {
        timerForOpacity=setInterval((evt)=>{
                let currentOpacity=parseFloat($(this).css("opacity"));
                let next=currentOpacity-0.1;
                $(this).css("opacity",next);
                },200);
    }

    function resetOpacity(evt){
        let t1=timerForOpacity;

        clearInterval(t1);
        $(this).css("opacity","1");

    }
});



// Make a circle somewhere in the central area of the window that is 50px wide.It does not
// have to be a perfect circle.You can use a div with a radius setting to make it round.Give it an interesting background color.
//     Make the circle grow by 10px every 250ms.
//     Remove the circle when you click on it.
//     Put 3 text inputs on the screen with labels:width,
//     growth amount, grow rate.Also add a button labeled ‘Start’.When the button is clicked the circle should appear, this time with the specified width, growth size and interval for growing.
//                                                                                                                                                                                                                                             Add another text input labeled ‘Number circles’When the button is clicked put this number of circles spread around the screen and make all of them behave according to the above specifications.  An example is shown below with 12 circles that are growing to take over the screen unless the user clicks on them to erase them.  Your solution does not need to look exactly like this.
//     Submit the html, js, and css files to your website, and the usual
// comment to the Sakai site including link to your home page
// Use jQuery best practices such as creating elements using an object literal with attributes and values,
//     event delegation, building a collection and adding the entire collection to the DOM rather than every element in the collection.
//     Remember to install Tomcat in IntelliJ so you are ready for the Servlets class tomorrow.  Follow the tutorial guide in Resources > L
// ecture Examples May 2020.  You just need to do the install Tomcat tutorial, not the servlet tutorial.  We'll do the servlet tutorial in class tomorrow.
// EXTRA CREDIT:  Make the circles become gradually less opaque as your mouse moves across them.  Make them return to full opacity when the mouse leaves them.




// $(function(){
//
//
//     $(".circle").on('click', grow());
//
//
//     // function grow() {
//     //     var $badge = $('.cicle'); // cache
//     //     setInterval(function () {
//     //         var value = parseInt($badge.html());
//     //         value++;
//     //         $badge.html(value);
//     //     }, 1000);
//     // }
//     function grow(evt){
//         let growAmt=parseInt($('#growAmt').val());
//         let circle=$('.circle');
//         let newDiameter=parseInt(circle.height())+growAmt+"px";
//         let newLeft=parseInt(circle.css("left"))-growAmt/2+"px";
//         let newTop=parseInt(circle.css("top"))-growAmt/2+"px";
//
//
//         $(circle).css("width",newDiameter);
//         $(circle).css("height",newDiameter);
//         //$(circle).css("top",newTop);
//         //$(circle).css("left",newLeft);
//
//
//
//     }
//
//
//
//
//     });