//take a number n as input from user. Create am array of numbers from 1 to n.  Use the reduce method to calclate sum of all number in the array.  Use the reduce method to calculate product of all number in the array.
let n = prompt("enter a numbwr : ");

let arr = [];

for(let i=1; i<=n; i++ ){
    arr[i - 1] = i; //1(0), 2, 3, 4 
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(sum);

console.log("sum = ",sum);


let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial = ", factorial);

