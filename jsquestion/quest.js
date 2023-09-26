//1.
function numAdd(num1, num2, num3, num4) {
  var total = num1 + num2 + num3 + num4;
  return total;
}
const sum = numAdd(8000000, 2600, 400, 8);
console.log(sum);

//2.
function calProduct(num1, num2, num3) {
  var solution = num1 * num2 * num3;
  return solution;
}
var multi = calProduct(800, 100, 200);
console.log(multi);
function isString(variable) {
  if (typeof variable === "string") {
    return true;
  } else {
    return false;
  }
}
//3.
function isString(variable) {
  return typeof variable === "string";
}
let myVariable = "Hello, wunmi";
let resultt = isString(myVariable);

if (resultt) {
  console.log("The variable is a string.");
} else {
  console.log("The variable is not a string.");
}
//4.
//5.
function concatStrings(str1, str2) {
  return str1 + str2;
}

const nameConcat = concatStrings("Marvellous  ", "Ben");
console.log(nameConcat);
//6.
function incrementaNum(number) {
  return number + 60;
}

const originalNum = 290;
const numtoIncrement = incrementaNum(originalNum);
console.log(numtoIncrement);
//7.
function subtractNum(num1, num2) {
  return num1 - num2;
}
const numtoSubtract = subtractNum(200, 90);
console.log(numtoSubtract);

//8.
function calculateRemainder(dividend, divisor) {
  return dividend % divisor;
}
const dividend = 50;
const divisor = 3;

const remainder = calculateRemainder(dividend, divisor);
console.log(
  `The remainder of ${dividend} divided by ${divisor} is ${remainder}`
);
//9.
function newvalueReturn(newValue) {
    let variableReturn = newValue;
    return variableReturn;
  }
  const initialValue = 10;
  const newValue = 20;
  
  const valueAssign = newvalueReturn(newValue);
  console.log(valueAssign);

  //10.
  function greettheUser(name) {
    const greeting = `Welcome to your dashboard, ${name}`;
    return greeting;
  }
  const userName = "WunmiCrown";
  const userNameGreeting = greettheUser(userName);
  console.log(userNameGreeting);

 //11.
 function calculateSquare(number) {
    const squarerootOf = number * number;
    return squarerootOf;
  }
  const num = 10;
  const squareRslt = calculateSquare(num);
  console.log(squareRslt);
  //12.
  function multiProducts(prot1, prot2) {
    const product = prot1 * prot2;
    return product;
  }
  const productRslt = multiProducts(5, 7);
  console.log(productRslt);

  //13.
  function isGreaterThanTen(numbers) {
  return numbers > 10;
}
console.log(isGreaterThanTen(5));
console.log(isGreaterThanTen(15)); 
console.log(isGreaterThanTen(10));

//14.
function Stringsconcatenate(firstString, secondString) {
  const result = firstString + " " + secondString;
  return result;
}

const firstString = "Olayiwola";
const secondString = "Pamilerin";

const concatenated = Stringsconcatenate(firstString, secondString);
console.log(concatenated);

//15.
function calculateCircleArea(radius) {
  if (radius < 0) {
    return "Radius cannot be negative";
  }
  
  const pi = Math.PI;
  const area = pi * Math.pow(radius, 2);
  return area;
}
const radius = 10;
const circleArea = calculateCircleArea(radius);
console.log(`The area of a circle with radius ${radius} is ${circleArea}`);

//16.
function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return "Length and width cannot be negative";
  }
  
  const area = length * width;
  return area;
}
const length = 10;
const width = 3;
const rectangleArea = calculateRectangleArea(length, width);
console.log(`The area of a rectangle with length ${length} and width ${width} is ${rectangleArea}`);

//17.
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
const num1 = 83;
const num2 = 50;
console.log(`${num1} is ${checkEvenOrOdd(num1)}`);
console.log(`${num2} is ${checkEvenOrOdd(num2)}`);

//18
function fahrenheitToCelsius(fahrenheitValue) {
  const celsius = (fahrenheitValue - 32) * 5/9;
  return celsius;
}
const fahrenheitValue = 212;
const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
console.log(`${fahrenheitValue}°F is equal to ${celsiusValue}°C`);
