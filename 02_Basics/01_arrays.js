//Unlike traditional languages, in js we can store similar or multiple types of value in a single array even obects.

const arr = [1, "hello", 'f', {name: "Chandan", ID: 4231,}];

//another way of declaring an array. And here it doesnt require us to put values inside a square bracket, we can just pass on the values as args.
const newArr = new Array(1, "hello", 'f', {
    name: "Chandan",
    ID: 4231,
});

//methods of Array class
const values = [1, 2, 3, 4, 5];
// console.log(values.length);
// console.log(values[2]);

values.push("hoii"); //adds the passed value at the end of the array.
// console.log(values);

values.pop(); //removes the recent value or last value of the array.
// console.log(values);

values.unshift(3); //adds the passed value at the start of the array.
// console.log(values);

values.shift(); //removes whatever value that is at the start of the array.
// console.log(values);

// console.log(values.includes(33)); //returns an boolean result according to the availability of the passed value.

// console.log(values.indexOf(4)); //returns the index of the passed value in array. Returns -1 if the parameter isnt present in array.

const newValues = values.join(); //combines the new array with the old array and returns the combined form as a string.
// console.log(newValues);
// console.log(typeof (newValues)); //converts to string automatically.

//slice and splice methods
const newArrayOne = [3, 2, 1, 4, 5];
console.log(`Before ${newArrayOne}`);
console.log(newArrayOne.slice(1, 3)); //returns a copy of the elements from the array starting index included but not the ending index. The original array is not effected.
console.log(`After ${newArrayOne}`);

const newArrayTwo = [3, 4, 5, 2, 1]
console.log(`Before ${newArrayTwo}`);
console.log(newArrayTwo.splice(1, 3)); //this too returns the perticular section of an array, but here the ending index is also included and it actually remove this much of the element from the actual array. So the original array is altered in this case.
console.log(`After ${newArrayTwo}`);