/*jshint  esversion:6, globalstrict:true */
'use strict';

$(document).ready(function(){

    let looser = false;

    $('div.boundary').on('mouseenter',function(){
        $('div.boundary').addClass('youlose');
        $('h2#status').html('You lose');
        looser = true;
    });

    $('div#end').on('mouseenter',function(){
        if(looser === false){
            $('h2#status').html('You win! :]');
        }
        else{
            $('h2#status').html('You lose');
        }
    });

    $('div#start').on('mouseenter',function(){
        $('div.boundary').removeClass('youlose');
        $('h2#status').html('Click the "S" to begin');
        looser = false;
    });


});