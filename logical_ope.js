let a = 6;
let b = 5;

let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 && cond2 = ", cond1 && cond2); //false

console.log("cond1 || cond2 = ", a < b || a === 6); //true

console.log("!(6<5) = ", (a === 6)); //true
