const user0 = new Object();
user0.ID = 4556;
user0.name = "Yuri";
user0.age = 11;


const user1 = { //Obj L2
    isOnline: true,
    "user name": "yaoi443",
    credential: { //Obj L1
        "full name": { //Obj L0
            "first name": "Yaoi",
            "last name": "miamizu"
        },
        age: 21,
        "email id": "yoairocks@wb.com"
    }
}; //nesting of objects is completely possible in js, we just have to add multiple "." operators to access each level.

// console.log(`Hello ${user1["credential"]["full name"]["first name"]} ${user1["credential"]["full name"]["last name"]}, how are you`);

//obj concat
const testObj1 = {1: "a", 2: "b"};
const testObj2 = {3: "c", 4: "d"};
const testObj3 = {5: "e", 6: "f"};

const combinedObj1 = Object.assign({}, testObj1, testObj2, testObj3); //assign(target, source) the target is where all the sources combines and gets stored then the method returns that obj back. The empty obj{} is there just to make sure the copied objects gets stored in as an object in that empty obj, It is not necessary but it ensures all posibilities and makes it a bit easy to read.
// console.log(combinedObj1);

const combinedObj2 = {...testObj2, ...testObj1, ...testObj3}; //here we get values in ascending order despite not being in an order because the spread operator (...) tends to sort the obj keys in integer ascending order thats why despite testObj1 being in the 2nd position the values in console seems to be sorted in ascending order.
// console.log(combinedObj2);

//Usually when we fetch obj from a database it comes in the form of an array of obj so we can access each index's key by this way:
const users = [
    {
    id: 10,
    email: "10@gmail.com"
}, 
    {
    id: 11,
    email: "11@gmail.com"
}, 
    {
    id: 12,
    email: "12@gmail.com"
}, 
    {
    id: 13,
    email: "13@gmail.com"
}];

// console.log(users[1]["id"]);

// console.log(Object.keys(user0)); //returns the keys as an array.
// console.log(Object.values(user0)); //returns the values as an array.
// console.log(Object.entries(user0)); //returns every single key with its value as an array inside of an larger array.
// console.log(user0.hasOwnProperty('namwe')); //retuns a boolean value if the key is present in the obj or not. Its useful to do when we dont know what properties the obj has. This is done to prevent unknown crashes.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Object destructuring
const car = {
    make: "Toyota",
    variant: "Innova",
    price: 10_00_000,
    color: "White",
    type: "Personal"
};

//We do not have to include the obj's name everytime we want to access its properties. We can do this instead: 
const {make} = car; // here now "variant" can be used just like any other variable.
const {variant: model} = car; //we can rename the variable so that we can access it with a different name. Template: {<original name>: <Duplicate name>}.
console.log(`I have a ${make} ${model} car.`); 