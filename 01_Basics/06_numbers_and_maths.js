const score = 3000;
console.log(score);

const amount = new Number (455); //this is dynamically intitalizes variables in heap memory rather than stack like the default.
console.log(amount);

const price = new Number (144);
console.log(price.toFixed(2)); //used in mostely E-commerce sites to show values related to price and all. The number in the toFixed() decides the pricision.

const randomValue = new Number (453.8964);
console.log(randomValue.toPrecision(5)); //toPricision() helps us to round off up-to the desired digit of our value, where the passed number in the function is the length till which the rouding off effect works.
