/*jshint  esversion:6, globalstrict:true */
'use strict';

$(document).ready(function(){

    let lostGame = false;
    $('div.boundary').on('mouseenter',function(){
        $('div.boundary').addClass('youlose');
        $('h2#status').html('You lose &#128532;');
        lostGame = true;
    });

    $('div#end').on('mouseenter',function(){
        if(lostGame === false){
            $('h2#status').html('You win! &#128512;');
        }
        else{
            $('h2#status').html('You lose  &#128532;');
        }
    });

    $('div#start').on('mouseenter',function(){
        $('div.boundary').removeClass('youlose');
        $('h2#status').html('Click the "S" to begin');
        lostGame = false;
    });


});