//scope is the area in which a variable can be accessed.
//There are multiple types of scope of variables

// --1 global scope
let value1 = 12; //this is not declared inside a block or function so it has the highest accessability. So this variable can be accessed inside a function of a different code block.

if(true) {
    console.log(value1);
};

function functionOne() {
    console.log(`From inside method: ${value1}`);
};

functionOne();


// --2 local scope
if(true) {
    let value2 = 244; //value declared inside a function
    console.log(value2);
};

// console.log(value2); //cant access the value outside the function because it has local scope limitation.


//The reason why using 'var' keyword is not recomended now is because 'var' doesnt follow the js scope convention. We can access the value out of a code block by using 'var' keyword.
if(1) {
    let one = 1;
    const two = 2;
    var three = 3; //do not use
    four = 4; //do not use
};
//we shouldnt be able to access the values directly out side of the function but...
// console.log(one);
// console.log(two);
console.log(three);
console.log(four);
//This is dangerious in large code bases finding what causes this can be painful process so devs tend to avoid it.
//Not using any keyword like (var, let, const) or making variables directly causes this phenomenon too. So avoid this too.