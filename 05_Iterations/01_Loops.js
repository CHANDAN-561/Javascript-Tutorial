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

// --1. for of loop
//sytax: 
// for (<iterator variable> of <object>) {
// codes
//}

const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
    console.log(num);
};

const myMap = new Map();