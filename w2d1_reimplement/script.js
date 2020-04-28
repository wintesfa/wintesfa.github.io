

//1.  Re-implement the following exercises from Lab 5 to use map/filter/reduce Array methods instead of for loops. 
// Follow the instructions for submitting your code from Lab 5.
/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
 */
//function sum




/*jshint esversion: 6 */
function sum(array) {
    "use strict";
    return array.reduce((a,b)=> a+b);
}


//function multiply
function multiply(array) {
    "use strict";
    return array.reduce((a,b)=> a*b);
}
/* 5 Define a function reverse() that computes the reversal of a string.
 */
//function reverse using reduce
function reverse(string) {
    "use strict";
    return string.split('').reduce((r, c)=> c + r);
}



/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
 */
//function filter using filter
function filterLongWords(words, i) {
    "use strict";
    return words.filter(w => w.length > i);
}




//TEST FUNCTIONS
function myFunctionTest(expected, found) {
    "use strict";
    if (Array.isArray(expected)) { //if array is passed then use JSON.stringify to check if values in an array match
        if (JSON.stringify(expected) === JSON.stringify(found)) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }

    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTest2(expected, found) {
    "use strict";
    if (Array.isArray(expected)) { //if array is passed then use JSON.stringify to check if values in an array match
        if (JSON.stringify(expected) === JSON.stringify(found)) {
            return true;
        } else {
            return false;
        }
    }

    if (expected === found) {
        return true;
    } else {
        return false;
    }
}


//TESTS
//sum
console.log("Expected output of sum([1,2,3,7]) is 13 " + myFunctionTest(13, sum([1, 2, 3, 7])));
//multiply
console.log("Expected output of multiply([2,3]) is 6 " + myFunctionTest(6, multiply([2, 3])));
//reverse string
console.log("Expected output of reverse('hey how are you') is 'uoy era woh yeh' " + myFunctionTest('uoy era woh yeh', reverse("hey how are you")));
//filtering long words
let input = new Array('hello', 'hi', 'hey', 'goodMorning');
let expected = new Array('hello', 'goodMorning');
console.log("Expected output of filterLongWords(['hello', 'hey', 'goodMorning']) is ['hello', 'hi', 'hey', 'goodMorning'] " + myFunctionTest(expected, filterLongWords(input, 3)));



//TEST with ASSERT
//sum
console.assert(myFunctionTest2(13, sum([1, 2, 3, 7])), 'Expected output of sum([1, 2, 3, 7]) is 13');
//multiply
console.assert(myFunctionTest2(6, multiply([2, 3])), 'Expected output of multiply([2, 3]) is 6');
//filtering long words
input = new Array('hello', 'hi', 'hey', 'goodMorning');
expected = new Array('hello', 'goodMorning');
console.assert(myFunctionTest2(expected, filterLongWords(input, 4)), " expected output " + expected);



