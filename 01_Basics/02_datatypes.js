"use strict"  
/*
his forces the compiler to treat the below codes as a newer version of js for the entire file.
however it's not necessary now because the compiler can decide it by it's own.
*/

//alert("Hello")  only works in browsers, It will show a pop-up displayng the text/value. But we are using Node js so that's why it is not working.



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//There are two types of datatypes in js. 

/* 1. Premitive (Stack):
 * - these datatypes works by (call by value) functionality.
 * - when we copy the variable directly js internally copies the value and assigns it
 * - that way when we change the value later, the copy values changes not the real value
 */

let age = 23  //integer datatype 
let name = "Chandan"  //string type. it's always kept inside "".
let isLoggedIn = false //Boolean type (0/1 or false/true).
let n = null //null is a value (not zero). it says the variable is just blank. 
let number; //it's undefined means it has no assigned value. 
let bigNumber = 4249208429802942489n;

console.table([typeof(age), typeof(name), typeof(isLoggedIn), typeof(n), typeof(number), typeof (bigNumber)]);

//Example:
let userOneName = "Chandan";
let userTwoName = userOneName;
userOneName = "Hitesh";

console.log(userOneName, userTwoName);
//we changed the 1st variable to "Hitesh" but because the other variable holding a copy of the value, It didn't change.



/* 2. Non-Premitive (Heap):
 * - these datatypes works by (call by reference) functionality.
 * - upon coping, the new variable gets the same reference as the original variable
 * - doesn't matter if we change the 1st reference or 2nd, the original value changes
 */


//Example:
let array = [1,2,3,4,5]; //array type, holds multiple values consecutively of same type 
let userOne = { //Object type, holds different kinds of attributes
    ID: 23341,
    email: "example@google.com",
}

let userTwo = userOne;
console.log(userTwo.email);

userOne.email = "someone@test.com"
console.log(userTwo.email);
//When we changed userOne's email, because both of them sharing the same reference userTwo's email is also changed. Because they both fetching values from the same location.
