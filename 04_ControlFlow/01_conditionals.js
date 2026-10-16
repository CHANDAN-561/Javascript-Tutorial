//Condtional Conditional statements help us to execute a block of code upon meeting certain condition.
// In conditionals we check if a value is true or not. If The condition we are checking is true then the control floor goes inside the conditional block and executes the codes inside. In conditional statements we usually check for boolean values like true or false.


// --1. Simple If
const isLoggedIn = false;
if (isLoggedIn == true) {
    // console.log(`User is logged in.`);
};

//alt way of checking for the boolean value
// if (isLoggedIn) {
//     console.log(`User is logged in.`);
// };


// In simple if We could only check for conditions that true what is the condition is not true and we want to execute a different code of block instead in case of that. If we just ride the code block outside the block then alternate code will execute anyways regardless the condition is false or not so that's why the if else conditional statement comes in handy which lets us execute the first block if the condition is true and otherwise the else block will be executed automatically. So it's either if or else not both.

// --2. If-Else 
if (isLoggedIn) {
    // console.log(`User is logged in.`);
} else {
    // console.log(`User is not logged in.`);
}


// Right now the else code block will be executed regardless of any conditions. Suppose the if block condition is false but we want to check further if the other condition is true or not then only with if an else statement we cannot do that. In that scenario we have to use else if ladder. Which is just checking for the condition in every step.

//Else-If ladder
const loggedInWithEmail = false;
const loggedInWithNumber = false;
const loggedInWithDiscord = false;

if (loggedInWithEmail) {
    console.log(`Logged in using email.`);
} else if (loggedInWithNumber) {
    console.log(`Logged in using phone number.`);
} else if (loggedInWithDiscord) {
    console.log(`Logged in using discord.`);
} else {
    // console.log(`User not logged In.`);
};

//The last else block is not required always. It will only execute if none of the conditions were true.

//alt ways of writing if statements
// If conditional code is of only one line, Then avoid using the curly braces.

// if (true) console.log("true");

// We can stack multiple statements like this in a single line without using the curly braces, but this is not recommended as this is not a professional way of writing codes.

// if (true) console.log(`Hello`), console.log("Hii");
// In case of writing like this The ";" at the end of the statement is necessary as it terminates the code since it has no scope definition by default.

// If we want to check multiple conditions and then upon The validation we want to execute a code block we can do that using Logical operators like AND(&), NOT(!), OR(|). We have to use two operators at once in case of checking condtions except the NOT(!) operator.

// The AND(&) operator Is used when we want to check all of conditions Are true Then control flow goes inside the conditional block.

// --1. AND(&&)
const username = true;
const password = false;
const passkey = true;
if (username && password && passkey) {
    console.log(`Log in successful`);    
} else {
    console.log(`Invalid credentials`);
};
//AND(&&) Operation is just multiplying the values together in simple manner. So its like if all the values are true then 1 * 1 * 1 = 1, which (in boolean) is true. So if one of the conditions is false the whole consition becomes false Operation like 1 * 0 * 1 = 0 (false in boolean), then the conditional block will not execute.

// --2. OR(||)
const hasUsername = true;
const hasEmail = false;
if (hasEmail || hasUsername) {
    console.log(`Successfully logged in`);
} else {
    console.log("Couldn't logg in");
};
//OR(||) operation In simple terms, is just adding values together to produce a result (true or false). So even if one of the conditions is true then the whole condition becomes true, like 0 + 1 + 1 = 1(true). It will only be false if all values are falsee.

// --3. NOT(!)
// The NOT operator Just inverts the value. So !true = false or vice-versa.
const isBanned = false;
if (!isBanned) { //here the false becomes true
    console.log(`User is banned`);
}

// We can stack multiple types of conditions Into a single conditional check.

const hasPassword = false;
if ((hasEmail || hasUsername) && hasPassword) {
    console.log(`Logged In`);
} else {
    console.log(`Error logging in`);
}
// In this case if have either email or username it is possible to login but you must have your password.

//Ternary Operator:
//This is a different way of executing an if statement...
//Syntax: (condition) ? <if true> : <if false>;

const inStock = true;
console.log((inStock)? `Item in stock` : `Item not in stock` );

//There are these comparison operations
//<, >, <=, >=, ==, !=, ===, !==

console.log((2 > 3)? "true" : "false");
console.log((2 < 3)? "true" : "false");
console.log((4 >= 3)? "true" : "false");
console.log((3 <= 3)? "true" : "false");
console.log((3 == 3)? "true" : "false");
console.log((2 != 3)? "true" : "false");
console.log((2 != "2")? "true" : "false");
console.log((2 === "3")? "true" : "false");
console.log((false !== 0)? "true" : "false");