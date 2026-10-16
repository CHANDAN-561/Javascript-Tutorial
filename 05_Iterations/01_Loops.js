// Lobes help us to execute a block of code repetitively as many times as we want so that we do not have rewrite the same code block multiple times to execute it multiple times. These too Execute with conditions. The lobe will keep executing the code block until the condition is false.



// --1. for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
};

// for (Initialization ; Condition ; Update) {
//     //codes to be executed
// }

//The loop initializes the index at the first then the loop will run until the condition is false (i <= 10). Every time the loop executes the code block, the control flow moves to the update section and the index increments by 1. Once the condition is false it will move the control flow to the global execution env.

//We can have loops inside a loop
for (let i = 1; i <= 3; i++) {
    console.log(`outer: ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(`Inner: ${j} and outer ${i}`);
    };
};
//here the inner loop runs 3 times for everytime the outer loop runs.
//for loop is generally used when we know how many time the loop is going to execute.



// --2. while loop
let index = 1;
while(index < 11) {
    console.log(index);
    index+2;
}