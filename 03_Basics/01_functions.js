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