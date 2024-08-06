//Function -> 2 number, sum

function sum(x, y){
    // local variables -> scope
    s = x + y;
    console.log("before return");
    return s;
    console.log("after return");
}

let val = sum(3, 4);
console.log(val);