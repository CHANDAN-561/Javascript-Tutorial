// Switch case help us execute a block of code if a condition is matched. Like for example If we are tracking a Variable that hold the month as a number Then we can display the whole month with respect to that number value. Like (1 = jan, 2 = feb etc). In such cases if we use else if ladder then the will be so lengthy. So switch cases comes in handy in such cases.

const month = 5;
switch (month) {
    case 1:
        console.log("January");
        break;
    
    case 2:
        console.log("February");
        break;
    
    case 2:
        console.log("March");
        break;
    
    case 4:
        console.log("April");
        break;
    
    case 5:
        console.log("May");
        break;

    default:
        console.log(`Invalid month`);
};
// Here the month variable is compared with each cases. If it matches with a case value then it will execute that code block. We use break statements because when a case becomes true then the switch case does not check for other cases after that it just starts executing all of the codes that sits under that truth case regardless the condition That's why we include a break statement which breaks the loop and Moves the control flow back to the global execution environment from inside a block scope.

// The default case is like the else block in if else statements. It will only execute if all of the above cases becomes false.

// We can check for any data type values in which cases Not just booleans on numbers we can even compare strings with it.