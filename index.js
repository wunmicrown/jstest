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
