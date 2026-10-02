const score = 3000;
// console.log(score);

const amount = new Number (455); //this is dynamically intitalizes variables in heap memory rather than stack like the default.
// console.log(amount);

const price = new Number (144);
// console.log(price.toFixed(2)); //used in mostely E-commerce sites to show values related to price and all. The number in the toFixed() decides the pricision.

const randomValue = new Number (453.8964);
// console.log(randomValue.toPrecision(5)); //toPricision() helps us to round off up-to the desired digit of our value, where the passed number in the function is the length till which the rouding off effect works.

const valueAsNumber = 34245;
// console.log(valueAsNumber.toString().length); //we can convert a number to string which allows us to use all of the string methods as well

const bigNumber = 10000000;
// console.log(bigNumber.toLocaleString('en-IN')); //this method makes it easier to read big numbers like this. By default it sets the American style (000,000,000) and provided correct values we can see different country presets.

//++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-54)); //it changes the value into a positive value. Positive arguments are not effected ofc.

console.log(Math.round(5.39)); //rounds the value. If dec < .5 then rounds to the base value if dec > .5 then to the higher value to the base.

console.log(Math.ceil(4.12)); //always rounds the value to the max
console.log(Math.floor(4.9));//always rounds the value to the min

console.log(Math.random()); //gives a random value between 0-1;

//But if we want a random whole number we have do so:
console.log(Math.random() * 10); //moves an digit to left
console.log(Math.floor(Math.random() * 10)); //makes it a whole number by rounding off to the minimum value.

//If we want a non-zero whole random number we just have to add '1' to the random value then it can never be zero.
console.log(Math.floor((Math.random() * 10) + 1));

//If you want we can make it so it will alawys give random values with in a range.
const max = 20
const min = 12

const randomWholeValue = (Math.random() * 10) + 1;
console.log(Math.floor(randomWholeValue));