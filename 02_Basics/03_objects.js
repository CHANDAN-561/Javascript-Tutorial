//two ways of creating an obj are, 
//1. using constructor : Object.create
//2. using object literals : aka trational method

//Object literal method

const mySymbol = Symbol("Key-1"); //this is a symbol
let user = {
    name: "chandan",
    "full name": "chandan kumar sahu",
    [mySymbol]: "myKey1",
    age: 21,
    email: "chandan@yahoo.com",
    city: "Brahmapur",
    holidays: ["Saturday", "Sunday"],
    isOnline: true
};

console.log(user.email);  //to access any property of an obj we use "." treditionally. It works the same in js but the recomended way is as follows:
console.log(user["email"]); //we can use a square bracket pair to access any attributes of an object. This way of acccessing the value is called "Accessing value by its key", the key is the attribute that refers to the actual value. eg- name: "chandan", here the key is (name) and the value is "chandan". Because js stores the keys as a string by default, we have to write the key inside double quotes.
console.log(user["holidays"][0]); //the index is given this way to access any specific value in an array.

//Why is using [] prefered when accessing obj properties:
//In this case the property "full name" is declared an array which holds an array. So we cant access it by the usual "." operator. Thats why its prefered.
// console.log(user["full name"]);

user.isOnline = false;
// Object.freeze(user); //freezes the object which doesnt allow further modification of its properties.
user.isOnline = true;
// console.log(user);

console.log([mySymbol]); //doesnt required "" when addressing symbols.

user.greetings = function(){
    console.log(`Hello ${this.name}`);    
} //this helps us to access the obj we are currently interacting with.

console.log(user.greetings());
