"use strict"  
/*
his forces the compiler to treat the below codes as a newer version of js for the entire file.
however it's not necessary now because the compiler can decide it by it's own.
*/

//alert("Hello")  only works in browsers, It will show a pop-up displayng the text/value. But we are using Node js so that's why it is not working.


let age = 23  //integer datatype 
let name = "Chandan"  //string type. it's always kept inside "".
let isLoggedIn = false //Boolean type (0/1 or false/true).
let n = null //null is a value (not zero). it says the variable is just blank. 
let number; //it's undefined means it has no assigned value. 

console.table([typeof(age), typeof(name), typeof(isLoggedIn), typeof(n), typeof(number)]);



