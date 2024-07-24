//qs1 print all even numbers from 0 to 100.
for(let num=0; num<=100; num++) {
      if(num%2 === 0){
    //even nunber
    console.log("num=", num);
   }
}

//qs2 print all odd numbers from 0 to 100.
for(let num=0; num<=100; num++) {
    if(num%2 !== 0){
  //odd nunber
  console.log("num=", num);
 }
}

// qs3 gamenumber guess
let gameNum = 25;
prompt = 0
let userNum = prompt("Guess the game number : ");
while(userNum !== gameNum) { //game

}
console.log("congratualtions, you entered the right number");