/* 
 * Immediately Invoked Function Expression (IIFE) is a
 * faster way of executing functions right away at   * the time of declaring it. We do this because when * we do not want the global declarations to interfere
 * or polute the functions we declare later on.
 * This makes the function execute on the spot whose 
 * scope is limited to that function body only.
 * In case of IIFE, we do not explicitely call that 
 * funtion instead we use () after declaration.
*/

//Named IIFE
 (function valueNow() {
    value = 24;
    console.log(value);
 }) ();
 
 (function valueLater() {
    value = 26;
    console.log(value);
 }) ();
 
//If we run this file node will push an error. Which appears because when the 1st function executes, it never stops the process thats why we need to end the executation process by adding a ";" at the end.

//Unnamed IIFE
((userName) => {
   console.log(`Hello ${userName} Welcome back.`);
}) ('Sumo');
//This is a different way of declaring IIFE functions where the () at the end represents function execution operator.

