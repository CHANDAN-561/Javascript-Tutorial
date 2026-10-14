const obj1 = {
    username: "chandan",
    score: 332,

    displayMessage: function() {
        // console.log(this.username);
        // console.log(this.score);
        // console.log(this); //'this' keyword, inside an object returns the context of the obj we are currently interacting with.
    }
};

obj1.displayMessage();
// console.log(this); //returns an empty obj when its in the global scope or not a part of any obj or function.
//when we run the same command into a browser's console we get a window obj which is very different from an empty object ({}) because in stand alone js RTE like node and dino ect, the global object is just an empty object ({})... but in browser's integrated console it is the window object which comes with its own properties.

function something() {
    console.log(this); //Its different when we run it inside a function instead in a node enviroment.
};
// something();


// --Arrow functions
const addValues = (num1, num2) => {
    // console.log(this); //here 'this' returns just a blank obj ({}).
    return num1 + num2; //here we have to specify the return keyword
};
console.log(addValues(3, 5));

const add = (num1, num2) => ({name: "Chandan"}); //when the return value is capped in a parenthesis [()] we do not need to specify the return keyword. But in case of braces [{}] we have to specify the return keyword.
console.log(add(4, 9));
