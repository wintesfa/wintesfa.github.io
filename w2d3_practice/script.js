/*jshint esversion: 6 */

(function () {
    "use strict";

    function loadPage() {
        mochaTests();
    }

    window.onload = loadPage();
}());


//***************************FUNCTIONS*********************************************************************************
function reverseArray(arr) {
    "use strict";
    let newArray = [];
    let t = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray[t] = arr[i];
        t++;
    }
    return newArray;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
    }
    return arr;
}


function arrayToList(arr) {
    "use strict";
    let list = { //creating node structure value
        rest: null   //pointer/next
    };

    for (let i = 0; i < arr.length; i++) {

        if (list.rest === null) { //if pointer points to null / if last element
            list.value = arr[i]; //add element
            //_______________________________create and append new node with pointer(rest) to null
            list.rest = {  //set pointer to null
                rest: null
            };}
        else { //if not the last element, traverse till the end
            let counter = list;
            while (counter.rest !== null) {
                counter = counter.rest;
            }//once final node reached
            //_______________________________________________insert value and point rest to null
            counter.value = arr[i]; //add the value from index array to the last node
            counter.rest = { //set pointer/ rest to null
                rest: null
            };
        }
    }
    return list;
}


function listToArray(list) {
    "use strict";
    let arr = [];
    while (list !== null) {
        if (list.value !== undefined)
            arr.push(list.value);
        list = list.rest;
    }

    return arr;

}

function prepend(val, res) {
    "use strict";
    let list = {};
    list.value = val;
    list.rest = res;
    return list;
}




function nth(list, index) {
    "use strict";
    let i = 0;
    while (list != null && list.value != null) {
        if (i == index) {
            return list.value;
        }
        list = list.rest;
        i++;
    }
    return null;
}


//**********TESTS*******************************************************************************************************
function mochaTests() {
    "use strict";
    describe("Java practice", function () {

        //test for reverse array (PASSED)
        context("when array of [1,2,3,4] entered", function () {
            it("reverses to [4,3,2,1]", function () {
                let res = reverseArray([1, 2, 3, 4]);
                assert.equal(JSON.stringify(res), JSON.stringify([4, 3, 2, 1]));
            });
        });

        //test for reverse array (PASSED)
        context("when array of [1,2,3,4] entered", function () {
            it("reverses to [4,3,2,1] in place", function () {
                let res = reverseArrayInPlace([1, 2, 3, 4]);
                assert.equal(JSON.stringify(res), JSON.stringify([4, 3, 2, 1]));
            });
        });


   //     test arrayToList Test (PASSED)
        context("When array [10,20] entered", function () {
            it("Changes to a list of =  {value: 10, rest: {value: 20, rest: null}}", function () {
                let res = arrayToList([10, 20]);
                assert.equal();
            });
        });


        //list to array Test (PASSED)
        context("When a list {value: 10, rest: {value: 20, rest: null}} entered", function () {
            it("Changes it to array of [10,20]", function () {
                let res = listToArray(arrayToList([10, 20]));
                assert.equal(JSON.stringify(res), JSON.stringify([10, 20]));
            });
        });



// prepend TEST
        context("prepend 10 and 20", function () {
            it("list should be equal to {value: 10, rest: {value: 20, rest: null}}", function () {
                let res = prepend(10, prepend(20, null));
             //   console.log(res.value);
                assert.equal(res.value, {value: 10, rest: {value: 20, rest: null}}.value); //checking first value 10
                assert.equal(res.rest.value, {value: 10, rest: {value: 20, rest: null}}.rest.value); //checking second value 20
                //console.log(res.value, {value: 10, rest: {value: 20, rest: null}}.value);
                //console.log(res.rest.value, {value: 10, rest: {value: 20, rest: null}}.rest.value);
            });
        });



// nth Test
        context("should return nth element", function () {
            it("when 1 entered in array of [10,20,30] it returns 20", function () {
                let res = nth(arrayToList([10, 20, 30]), 1);
                console.log(res);
                assert.equal(res, 20);
            });
        });

    });
}