
<<<<<<< HEAD

const arr = [];

function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

const newArr = forLoop(arr);
console.log(newArr);


const n = Math.floor(Math.random() * 100)

function whileLoop(n){
  
  while ( n > 0 ) {
    console.log(n--);
  }
  return "done";
}


let i = 0;
let num = 10;
function doWhileLoop(num){
do {
  console.log("I run once regardless.");
} while (incrementVariable() <= num);
}

function incrementVariable() {
  i = i + 1;
  return i;
}







/*TODO**: Define a function called `doWhileLoop` in `loops.js`. The function should take
an integer as an argument. Use the `incrementVariable()` function (you can copy it
from this README) in the condition, and console log
`"I run once regardless."` while `incrementVariable()` returns a number less
than the parameter received. (Your condition might look something like
`incrementVariable() < num`.) Remember that it should also console log when
receiving 0 as a parameter because the do-while runs before the condition is
checked.
*/


=======
/*const spies = require('chai-spies')

chai.use(spies)

const expect = chai.expect



const arr = [];
//  const t = 10


function forLoop(arr) {
    for (let i = 0; i < 25; i++) {
    if(i === 1){
      newArr.push(`I am 1 strange loop.`);
    }
    else{
      newArr.push(`I am ${i} strange loops.`);
    }
    
  }
  return console.log(newArr[i]);
}

forLoop(arr);



>>>>>>> c5ed9b737f9682e6d1e48c90407ba318fc5bfa33
