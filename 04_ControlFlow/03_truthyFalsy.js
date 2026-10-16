// Truthy and Falsy values are values That we just assume to be true nad false without actually checking if it is.

// const userEmail = "myEmail@me.org"
// if (userEmail) {
//     console.log(`Fetched user Email.`);
// };

//Here we are fetching user email and displaying if we have successfully got it or not Which works in this case.

const userEmail = []
if (userEmail) {
    // console.log(`Fetched user Email.`);
} else {
    console.log(`Email not captured`);
};
// But here the user email contains only an empty array which is misinterpreted as the user email. Which is an error that is disguised as a truth value.

//Thruthy values:
//"false", " ", 1, [], {}(empty obj), function(){}

//Falsy values: 
// 0, -0, false, 0n(BigInt), "", null, undefined, NaN

//how to check for empty arrays: 
if (userEmail.length === 0) {
    // console.log(`Empty array`);
};

//for empty objects
const obj = {};
if (Object.keys(obj).length === 0) {
    // console.log("Empty Object");
};
//.length() works on obj here because, Object.keys() returns an object containing its keys, as an array so while obj doesnt have a length() but arrays do.

//Nullish Coalescing Operator "??"
let value = {} ?? 43

// The knowledge qualifying operator Is useful when we don't know whether the value we storing inside a variable is null or undefined or an actual Value. This is helpful to Rule out the possibility of Bug in a code or crash. What this does is, when the left hand side of the ?? is Either null or undefined then the That exists on the right side will be assigned to the variable. Not just actual valus we can even have a Function or an expression or any execute if the left hand side of the ?? Is null or undefined. This expression only works for null or undefined being on the left side of the ?? Not anything other than that for example 0, fals, empty arrays or empty objects.

value2 = undefined ?? 43
console.log(value);
console.log(value2);