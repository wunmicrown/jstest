const aFor ="A javaScript's for loop is a type of control structure that helps you to repeatedly run a block of code for a certain number of times or until a specific condition is satisfied. ";
console.log(aFor);
const primPurpose=" Its primary use is to automatically repeat  code when a specific task must be performed repeatedly, such as iterating through an array, processing data, or performing a sequence of actions.";
console.log(primPurpose);
const initialize="we can initialize a counter variable in a `for` loop by our starting index, the condition, and steps. the steps should either decreasing or increasing";
for(var i=0; i<=5; i++){
    console.log(i);
  
}
 for (initialization; condition; increment/decrement) {
}
































































let increment = 1;
let i = 1 
for (; i <= 50;  ){

 console.log(i)  
 
 if(i >= 10 &&  i< 20){
   increment = 2;
  } else if( i >= 20 && i < 30) {
  	increment = 3;
  }else if( i >= 30 && i < 40) {
    increment = 4;
  }else if( i >= 40) {
  	increment = 5;
  }
 
  /*if(i >= 10){     
    const floorValue = Math.floor(i / 10)     
    increment = floorValue  + 1
    
  }*/
  i += increment 
}
   


/*
  
  Math.floor() // 2.0, 2.1, 2.2, 2.3, ..... 2.9 =  2
  Math.floor() // 8.0, 8.1, 8.2, 8.3, ..... 8.9 =  8
  Math.ceil() //  2.05, 2.1, 2.2, 2.3, ..... 2.9 = 3
  Math.ceil() // 8.05, 8.1, 8.2, 8.3, ..... 8.9 =  9  
  Math.round() //  2.0, 2.1, 2.2, ..... 2.4 = 2
  Math.round() //  2.5, 2.6, ..... 2.9 =  3
  
  
  Math.floor() // x.0, x.1, x.2, x.3, ..... x.9 = x 
  Math.ceil() //  x.0, x.1, x.2, x.3, ..... x.9 = x+1
  Math.round() //  x.0, x.1, x.2, ..... x.4 = x
  Math.round() //  x.50, x.55, x.6, ..... x.9 = x+1
  
*/


// for(initialization; condition; increment){
// } 
//i = i - 2 ==> i -=2 
//i = i + 2 ==> i +=2

 //initialiation
//  for( ; condition ;){
 //increment
//}

// Initialization is the intial value to be checked by condition and incremented, is one time declaration: Option in the for bracket()

// Condition is checked before any iteration, or before block execution, if true the code block is executed, if not, the loop stops: Required in the for bracket()

// Increment, it happens after every iteration or execution of code block and before next condition check. It usually changes or ,mutates the initialized iteration variable. Optional in the forr bracket.




