const xbox_titles = ["Minecraft", "Call of duty", "Modern warfare"];
const ps_titles = ["God of war", "Forza", "Skyrim", "Elden rings"];

// xbox_titles.push(ps_titles); //push() doesnt combine all the elements in both arrays. Since array takes any element to group them together when we push, the 2nd array becomes an element instead of it being a group of elements. It alters the main array.
// console.log(xbox_titles);

const all_titles = xbox_titles.concat(ps_titles); //concatinates 2 arrays and returns a new array, without altering both of the arrays.
console.log(all_titles);

const new_all_titles = [...xbox_titles, ...ps_titles]; //spread operation kind of breaks the entire array into all individual elements so when we use split we can split multiple arrays at a time so when this operation returns the combination of all splitted elements it looks like they all concatinated. People prefer this over concat() because here we can combine more than 2 array at a time.
console.log(new_all_titles); 

const nested_array = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];
const flatted_array = nested_array.flat(Infinity); //flat() returns the combination of all nested arrays as a single array. The parameter spicifies the depth of the method, Infinity (argument) is what handles all depths automatically. Using larger no of arguments than there are depth doesnt effect the operation.
console.log(flatted_array);
