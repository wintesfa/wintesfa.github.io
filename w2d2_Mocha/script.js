/*jshint esversion: 6 */

(function() {
    "use strict";
    function loadPage(){

    }


    function sum(array) {
        return array.reduce((a,b)=> a+b);
    }


//function multiply
    function multiply(array) {
        return array.reduce((a,b)=> a*b);
    }


//function reverse using reduce
    function reverse(string) {
        return string.split('').reduce((r, c)=> c + r);
    }


//function filter using filter
    function filterLongWords(words, i) {
        return words.filter(w => w.length > i);
    }


//********** Mocha test **********

    describe("Mocha Tests", function() {

        //test for sum
        context("when array of [1,2,3,4] entered", function() {
            it("the sum is 10", function() {
                let res = sum([1,2,3,4]);
                assert.equal(res, 10);
            });
        });

        //test for multiply
        context("when array of [1,2,3,4] entered", function() {
            it("the multiplied result is 24", function() {
                let res = multiply([1,2,3,4]);
                assert.equal(res, 24);
            });
        });

        //test for reverse
        context("when string of \"hello how are you\" entered", function() {
            it("the result is \"uoy era woh olleh\"", function() {
                let res = reverse("hello how are you");
                assert.equal(res, "uoy era woh olleh");
            });
        });

        //test for filterLongWords
        context("when array of words [\'hey'\,\'hello'\,\'perfect'\,\'excellent'\,\'great'\,\'hi'\] entered", function() {
            it("words with less than 3 alphabets are filtered [\"hello\", \"perfect\", \"excellent\", \"great\"] ", function() {
                let res = filterLongWords(["hey","hello","perfect","excellent","great","hi"],3);
                assert.equal(JSON.stringify(res), JSON.stringify(["hello", "perfect", "excellent", "great"]));
            });
        });


    });

window.onload = loadPage();
}());






