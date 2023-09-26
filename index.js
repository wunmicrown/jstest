console.log(true);
console.log(false);
console.log(true);
console.log(false);
console.log(false);
console.log(false);
console.log(false);
console.log(true);
console.log(false);
console.log(true);

function use(name) {
    alert('This is ' + name)
  }

function cards(name) {
    alert('This is ' + name)
  }
  let recovery= 'white'
  let favority= 'sky'
  function security() {
    if (system.value ==recovery && petname.value== favority) { 
        alert('password has changed')
      }else {
        alert('Incorrect details')
      }
  }

function privilege() {
  if (program.checked && admin.checked) { 
      alert('Logged in')
    }else {
      alert('Incorrect details ')
    }
}

 function reg() {
    if(age.value >=18  && country.value == "Nigeria") {
        alert("your vote is valid")
    }else(
        alert("your vote is not valid")
    )
 }


 // PUSH ANSWER  
let nameofperson = ['bola', 'Titi', 'Toyin'];
let newadd = 'John';

console.log(nameofperson);

function adding(nameofperson, Jhon) {
  nameofperson.push(Jhon);
  return nameofperson
}
let add= adding(nameofperson, newadd);
console.log(nameofperson);


function addColor(color, newColor) {
  color.push(newColor);
  return colors;
}
let colors = ['red', 'green', 'black'];
let newColor = 'white';
let updatedColors = addColor(colors, newColor);
console.log(updatedColors);


function addnum(numbers,newnumbers) {
  numbers.push(newnumbers);
  return numbers;
}
let numbers=[1,2,3,4,5,6];
let newnumbers=7;
let updatednumber=addnum(numbers,newnumbers)
console.log(numbers);


function merge(number, numberjoin) {
  for (let i = 0; i < numberjoin.length; i++) {
    number.push(numberjoin[i]);
  }
  return number;
}
let number = [1, 2, 3];
let numberjoin = [4, 5, 6];
let merged = merge(number, numberjoin);
console.log(numberjoin); 

//POP ANSWER
function removeLastMonth(monthname) {
  if (monthname) {
    monthname.pop();
  }
}
let month = ["January", "February", "March", "April", "May"];
removeLastMonth(month);
console.log(month);


function LastName(names) {
  
  if (names.length > 0) {
    names.pop();
  }
  return names;
}
const listofname = ["John", "Doe", "beyond", "Alice"];
const updatedname = LastName(listofname);
console.log(updatedname);

//1.
const nameString = "Pamilerin";
const index =8;
const result =CharAtIndex(nameString, index);
function CharAtIndex(nameString, index) {
  if(nameString) {
      const char = nameString.charAt(index);
     console.log(char);
    }
//   else{
// alert(" error handling if the index is out of bounds")
//   }
}

//2.
const programStr = "pprogrammingg";
const rslt = fndFirstNonRepeatedChar(programStr);
console.log(`The first non-repeated character is: ${rslt}`);

function fndFirstNonRepeatedChar(programStr) {
  const charCount = {};
  for (let p = 0; p < programStr.length; p++) {
    const char =programStr.charAt(p);
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let p = 0; p < programStr.length; p++) {
    const char =programStr.charAt(p);
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

//5.
const string1 = "Olushola ";
const string2 = "bidemi";
const concatenate = concatenateString(string1, string2);
console.log(concatenate);
function concatenateString() {
  return string1.concat(string2);
}
//6.
const myName = ["Olayiwola", " ", "Blessing", " ", "Pamilerin"];
const joiningString =joiningStr(myName);
console.log(joiningString);
function joiningStr(myName) {
  return myName.concat().join('');
}
//7.
const world = ["world", " ", "Best"];
const concatString =concatStr(world);
console.log(concatString);
function concatStr(world){
  return world.concat() .join("");
}
//8.
const lgString = "This is a larger belt";
const subs = "larger";
function Subs(subs, lgString) {
  return lgString.includes(subs);
}
if (Subs(subs, lgString)) {
  console.log("it is a larger belt");
} else {
  console.log(" is not a larger belt");
}

//12.
const originalString = "Stay Focused";
const startIndex = 5;
const endIndex = 12;

const extractedSubstring = extractSubstring(originalString, startIndex, endIndex);
console.log(extractedSubstring);
function extractSubstring(str, startIndex, endIndex) {
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > startIndex.length) {
    endIndex = startIndex.length;
  }
  return str.slice(startIndex, endIndex);
}
//13.
const need="Erin";
const stIndex=3;
const ndIndex="4";
const extractStrings=stringsExtract(need, stIndex, ndIndex);
console.log(extractStrings);
function stringsExtract(ans, stIndex, ndIndex){
  if (stIndex <  0) {
    stIndex=0;
  }
  if (ndIndex > stIndex.length) {
    ndIndex = stIndex.length;
  }
  return ans.slice(stIndex, ndIndex)
}
//15.
const text ="Individual person ";
const textrslt1 =text.substring(10,17);
const textans= textAns(text, textrslt1);
function textAns(text, textrslt1){
  console.log(textrslt1);
}
//16.
const lgReverse= "Larger strings reverse";
const reverse = "Larger";
console.log(reverse);
//17
function reverseString(inputString, startIndex, endIndex) {
  if (startIndex < 0 || endIndex >= inputString.length || startIndex >= endIndex) {
    return "Indices are out of bounds or invalid.";
  }
  const substringToReverse = inputString.substring(startIndex, endIndex + 1);
  const reversedSubstring = substringToReverse.split('').reverse().join('');
  const resultString = inputString.substring(0, startIndex) + reversedSubstring + inputString.substring(endIndex + 1);

  return resultString;
}
const inputStr = "Pamilerin, olayiwola";
const startIdx = 10;
const endIdx = 19;
const Reverse = reverseString(inputStr, startIdx, endIdx);
console.log(Reverse)
