/*jshint  esversion:6, globalstrict:true */
'use strict';

$(document).ready(function(){

    let lostGame = false;
    $('div.boundary').on('mouseenter',function(){
        $('div.boundary').addClass('youlose');
        $('h2#status').html('You lose');
        lostGame = true;
    });

    $('div#end').on('mouseenter',function(){
        if(lostGame === false){
            $('h2#status').html('You win! :]');
        }
        else{
            $('h2#status').html('You lose');
        }
    });

    $('div#start').on('mouseenter',function(){
        $('div.boundary').removeClass('youlose');
        $('h2#status').html('Click the "S" to begin');
        lostGame = false;
    });


});