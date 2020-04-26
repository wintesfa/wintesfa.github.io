//functions

//max funtion to check the largest of two numbers
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}




//maximum of three inputs (using custom max method)
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}



//function is vowel
function isVowel(x) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === x.ignoreCase) {
            return true;
        }
        return false;
    }
}



//function sum 
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


//function multiply 
function multiply(array) {
    let total = 1;
    for (let i = 0; i < array.length; i++) {
        total *= array[i];
    }
    return total;
}


//function reverse
function reverse(string) {
    let reversed = "";
    for (let i = string.length; i >= 0; i--) {
        reversed = reversed + string.charAt(i);
    }
    return reversed;
}


//function find longest word
function findLongestWord(words) {
    let longest = words[0].length;

    for (let i = 0; i < words.length; i++) {
        if ((words[i].length) > longest) {
            longest = words[i].length
        }
    }
    return longest;
}



//fileter words by lefght (arrayOfWords, length)
function filterLongWords(words, i) {
    return words.filter(w => w.length > i);
}




//Modify the jsfiddle on the map/filter/reduce slide as follows:**************************************

const a = [1, 3, 5, 3, 3];
console.log("elements of array: " + a);




//a) multiply each element by 10; 
const b = a.map(function (num) {
    return num * 10;
});
console.log("multiply elements by 10: " + b);


//b) return array with all elements equal to 3; 
const c = a.filter(function (num) {
    return num === 3;
});
console.log("filter elements that === 3: " + c);


//c) return the product of all elements;
const d = a.reduce(function (init, num) {
    return init * num;
});
console.log("product of all elements: " + d);









//*********************************************************************************************
//myFuntion tests 
function myFunctionTest(expected, found) {

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



        
//test with myFunctionTest
//max

console.log("Expected output of max(100,10) is 100  " + myFunctionTest(100, max(100, 10)));




//max of three
console.log("Expected output of maxOfThree(5,10,100) is 44  " + myFunctionTest(100, maxOfThree(5, 10, 100)));



//is voule
console.log("Expected output of isVowel(z) is false " + myFunctionTest(false, isVowel("b")));


//sum
console.log("Expected output of sum([1,2,3,7]) is 13 " + myFunctionTest(13, sum([1, 2, 3, 7])));

//multiply 
console.log("Expected output of multiply([2,3]) is 6 " + myFunctionTest(6, multiply([2, 3])));

//reverse string
console.log("Expected output of reverse('jim is a boy') is 'yob a si mij' " + myFunctionTest('yob a si mij', reverse("jim is a boy")));

//check longest word
console.log("Expected output of findLongestWord(['go', 'come', 'stay', 'going']) is 5 " + myFunctionTest(5, findLongestWord(['go', 'come', 'stay', 'going'])));

//filtering long words
let input = new Array('hello', 'hi', 'hey', 'goodMorning');
let expected = new Array('hello', 'goodMorning');
console.log("Expected output of filterLongWords(['hello', 'hey', 'goodMorning']) is ['hello', 'hi', 'hey', 'goodMorning'] " + myFunctionTest(expected, filterLongWords(input, 3)));




//*********************************************************************************************
//myFuntionTest2 test assert
function myFunctionTest2(expected, found) {

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


//max
console.assert(myFunctionTest2(20, max(20, 10)), 'Expected output of max(20,10) is 20');

//max of three
console.assert(myFunctionTest2(44, maxOfThree(5, 4, 44)), 'Expected output of maxOfThree(5, 4, 44) is 44');

//is vowel
console.assert(myFunctionTest2(false, isVowel("b")), "Expected output of isVowel(\"b\") is false");

//sum 
console.assert(myFunctionTest2(13, sum([1, 2, 3, 7])), 'Expected output of sum([1, 2, 3, 7]) is 13');

//multiply
console.assert(myFunctionTest2(6, multiply([2, 3])), 'Expected output of multiply([2, 3]) is 6');

//reverse string
console.assert(myFunctionTest2('yob a si mij', reverse('jim is a boy')), "Expected output of reverse('jim is a boy') is 'yob a si mij'");

//check longest word
console.assert(myFunctionTest2(5, findLongestWord(['hi', 'hey', 'bye', 'going'])), "Expected output of findLongestWord(['hi', 'hey', 'bye', 'going']) is 5");


//filtering long words
input = new Array('hello', 'hi', 'hey', 'goodMorning');
expected = new Array('hello', 'goodMorning');
console.assert(myFunctionTest2(expected, filterLongWords(input, 4)), " expected output " + expected);




















