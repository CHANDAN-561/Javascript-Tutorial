// Lobes help us to execute a block of code repetitively as many times as we want so that we do not have rewrite the same code block multiple times to execute it multiple times. These too Execute with conditions. The lobe will keep executing the code block until the condition is false.



// --1. for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
};

// for (Initialization ; Condition ; Update) {
//     //codes to be executed
// }

//The loop initializes the index at the first then the loop will run until the condition is false (i <= 10). Every time the loop executes the code block, the control flow moves to the update section and the index increments by 1. Once the condition is false it will move the control flow to the global execution env.

//We can have loops inside a loop
for (let i = 1; i <= 3; i++) {
    // console.log(`outer: ${i}`);
    for (let j = 1; j <= 3; j++) {
        // console.log(`Inner: ${j} and outer ${i}`);
    };
};
//here the inner loop runs 3 times for everytime the outer loop runs.
//for loop is generally used when we know how many time the loop is going to execute.

//break and continue
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i == 3) break;
// }; 
//break stops the control flow upon hitting and breaks the loop so no further execution.


// for (let j = 0; j < 5; j++) {
//     if (j == 2) continue;
//     console.log(j);
// };
//continue, upon hitting skips all the code that sits bineath the continue keyword inside a block space and therefore skips the further execution for that interation only. It forces the control flow to jumps to the next iteration.


// --2. while loop
// let index = 1;
// while(index < 11) {
//     console.log(index);
//     index+2;
// };
//while loop is useful when we do not know how many iterations are there going to be so here the loop only checks for the condition. The initial index or stating position has to be specified before and the index should be updated inside the loop to avoid infinite loops.



// --3. do-while loop
index = 5;
do {
    // console.log(index);
    index--;
} while (index > 0);
//here the loop executes atleat once Regardless the condition. After executing the code block once, then the condition is checked and after that it performs just a while loop.


// Variations of for loops (Generally used in arrays).

// --1. for-of loop
//sytax: 
// for (<iterator variable> of <object>) {
// codes
//}

const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
    // console.log(num);
};


//Maps
//map is an object that holds key value pair and remembers the order of insertion of the values. Repeatation of the keys are ignored here.
//syntax for insertion is: myMap.set(key, vallue);

const myMap = new Map();
myMap.set('Country', "India");
myMap.set('State', "Orissa");
myMap.set('City', "Bam");
myMap.set('State', "Odisha"); //repeated keys are ignored, Only the latest value for the same key retains.

for (const key of myMap) { //this prints both key and values
    // console.log(key);
};

//If only key or only value is needed then we have to try a different syntax of the for-of loop
for (const [key, value] of myMap) {
    // console.log(`Value of '${key}' is: ''${value}`);
};
//this only works with maps not with simple objects. Because unlike simple objects, maps are iterable with for-of loop.


// --2. for-in loop
const nums = ["one", "two", "three", "four", "five", "six"];
const myObj = {
    js: "javascript",
    swift: "swift",
    kt: "kotlin",
    class: "Bytecode in Java"
};

for (const key in myObj) {
    // console.log(`${key} stands for ${myObj[key]}`);
};

for (const key in nums) {
    // console.log(`${key}: ${nums[key]}`);
};

//this loop doesnt work with maps because map object is not iterable with for-in loop.


// --3. for-each loop

//for-each loop is an inbuilt function in the Array class. We can use it with any array.
//in for-each loop we have to pass in a function that has no name (call back function) and inside that function's parameter we have to pass the iterator (eg: "i" in for loops) and then that iterator will reference to each and every values at the indexes sequencially.
//not just call back funtions, we can pass in arrow functions and functions that are defined else where.

const values = ["Hola", "Hello", "Namaste", "Ni hao", "Konnichiwa"];

//using call back function
values.forEach( function (index) {
    // console.log(index);
} );

//using array function
values.forEach( (index) => {
    // console.log(index);
} );

//using functions that are not defined here 
function printValues(key) {
    // console.log(key);
};
values.forEach(printValues);
//in such cases we just have to reference the function, not execute it by adding a () beside the function name. It is the same as the 1st case, just instead of the call back function we reference an actual function as the parameter for the loop.