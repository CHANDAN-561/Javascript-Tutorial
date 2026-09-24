const name = "Chandan";
const age = 21;
const pos = "Jr. dev";

//old syntax for string concat
console.log("Hello I am " + name + " age " + age + ", " + pos);

//new syntax for string concat
console.log(`Hello I am ${name} age ${age}, ${pos}`);

//There are so many methodes/functions available for strings
const dialouge = new String ("Hello"); //forcing the string to be initialize in heap rather than stack

console.log(dialouge.charAt(2));  //returns the character at that index
console.log(dialouge.indexOf('e')); //returns the index of the character, returns -1 if not present.
console.log(dialouge.toUpperCase()); //turns the string to uppercase ofc.
console.log(dialouge.toLowerCase()); //turns the string to lowercase.
console.log(dialouge.startsWith('H')); //checks if the string starts with the character we pass, returns boolean value

