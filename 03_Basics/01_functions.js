//Methods or functions are just reusable code blocks in a program that we can execute a number of times.

//function defination 
function displayName() {
    // console.log(`Hii from Chandan`);
};

//now we just have to reference the function and execute it by adding a () at the end of the function name...
displayName();


// ---functions with parameters
function addNumbers(number1, number2) {
    // console.log(number1 + number2);
};

addNumbers(2, 4);
addNumbers("3", 23); //this shows that the function doesnt check for the type of the values we pass in as arguments.

// ---function with return type
function multiply(number1, number2) {
    // const result = number1 * number2;
    // return result; //we can do this or directly return the value.
    return number1 * number2;
};

//with a returning function we now have to hold the value in a variable or print it while calling.
// console.log(multiply(3, 5)); //print directly
const returnedResult = multiply(4, 9); //store to reuse later
// console.log(returnedResult); 

// ---function with default values
function greetUser(username = "guest user") {
    // console.log(`${username} just logged in. Hello ${username}`);
};

greetUser(); //If we do not pass any arguments to the function, it uses the default vlaue provided in the function defination.
greetUser("Chandan"); //If we do, the function overrides the default value with this one.

//we can pass arrays and even objects as an arguments to a function...


//Array
const values = [2, 3, 4, 5, 8];
function get3rdValue(numbers) {
    return numbers[2];
};
// console.log(get3rdValue(values));
console.log(get3rdValue([21, 3, 51, 222])); //or we can pass on values directly.


//Objects
const user = {
    username: "chandan561",
    password: "password123"
};

function welcomeNewUser(newUser) {
    return (`Hello ${newUser.username}, Your password is: "${newUser.password}", Enjoy your stay here`);
};
// console.log(welcomeNewUser(user));
console.log(welcomeNewUser({
    username: "hank",
    password: "fucking password"
})); //or just pass obj directly.

//The "..." operator aka spread operator helps us to take in as much values as we want in the form of an array. This is helpful when we dont know the number of values we need to paas to the function. Like eg:
function functionValues(value1, value2, ...lastValues) {
   console.log(value1, value2, ...lastValues);
}; 
//here the method only accepts 2 parameters but we dont know many values there are going to be in future. So to counter that we need use the "..." operator at the last parameter like shown above in the function def. So now the value (from the below values) 4 is copied to "value1" and 5 to "value2" in the function def. Now rest of the values are going to be copied into "lastValues" in the form of an array. If we just print the variable "lastValues" the values will contain an array (with the boundries). To make it appear normally we spread the values of the array by the "..." operator while printing.

functionValues(4, 5, 9, 0, 7, 5, 4, 47, "hoi", '23s');