//When we compare any two values we get a boolean result (true/false)
//But in js we should never directly compare two values when they are of two different types because js internally typecasts the values and then shows us the result.

//simple comparasion
console.log("\nSimple Comparison");
console.log("2 == 3: " + (2 == 3));
console.log("4 > 5: " + (4 > 5));
console.log("6 <= 24: " + (6 <= 24));
console.log("4 != 3: " + (4 != 3));


//type casted comparasion
console.log("\nTypecasted Comparison");
console.log("'4' < 8: " + ("4" < 8));
console.log("4 == '4': " + (4 == "4"));
console.log("9 >= '14': " + (9 >= "14"));

//strict comparison(===) however checks both the value and the datatype of each operand then produces a result

//strict comparison
console.log("\nStrict Comparison");
console.log("4 === 4: " + (4 === 4));
console.log("4 === 8: " + (4 === 8));
console.log("'24' === 24: " + ("24" === 24));
console.log("'6' === 9: " + ("6" === 9));

//other cases
console.log("\nnull == 0: " + (null == 0));
console.log("null > 0: " + (null > 0));
console.log("null < 0: " + (null < 0));
console.log("null >= 0: " + (null >= 0));

//(null >= 0) gives true as output because of how both of the cases work...
//because the (==) operator and the (</>) operator works differently...
//the (</>) operator converts the null value to 0 so but the (==) doesnn't...
//which causes the different output