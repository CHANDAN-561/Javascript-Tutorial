"use strict"  
/*
his forces the compiler to treat the below codes as a newer version of js.
however it's not necessary now because the compiler can decide it by it's own.
*/

//alert("Hello")  only works in browsers but we are using Node js.


let age = 23  //integer datatype 
let name = "Chandan"  //string type. it's always kept inside "".
let isLoggedIn = false //Boolean type (0/1 or false/true).
let n = null //null is a value (not zero). it says the variable is just blank. 
let number; //it's undefined means it has no assigned value. 

console.table([typeof(age), typeof(name), typeof(isLoggedIn), typeof(n), typeof(number)]);



