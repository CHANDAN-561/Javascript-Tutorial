let score = false

// console.log (typeof (score))
// console.log(typeof score);   //both are the same
let valueInNumber = Number (score)
// console.log(typeof (valueInNumber));

// console.log (valueInNumber)



/* 
"33" -> 33
"33abc" -> NaN
true -> 1 : false -> 0
*/

let isLoggedIn = "hello"

let isLoggedInInBoolean = Boolean (isLoggedIn)
// console.log(isLoggedInInBoolean);

/*
1 -> true : 0 -> false
"" -> false
"abc" -> true
*/


let number = 45
let numberInString = String (number)
// console.log(typeof (numberInString));
// console.log(numberInString);


// ***************** Operations *****************

let value = 3
let negativeOfValue = -value
// console.log(negativeOfValue);

let string1 = "hello "
let string2 = "chandan"
let string3 = string1 + string2
// console.log(string3)


// console.log("1" + 2) //12
// console.log(1 + "2") //12
// console.log("1" + 2 +2)  //122
// console.log(1 + 2 + "4") //34

//conversion looks for the type of the 1st value in it based on that type following values will be converted to the optimum type


let incrementNumber1 = 123
console.log(incrementNumber1++); //first the value is assigned to the same variable then increment
console.log(incrementNumber1);

let incrementNumber2 = 233
console.log(++incrementNumber2); //first increement then the value is assigned to the same variable
console.log(incrementNumber2);


