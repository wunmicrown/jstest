// EVERY
// 1.  Write a JavaScript function that takes an array of numbers and uses the every() method to check if all elements in the array are greater than 5. Return true if they are, otherwise false.

const array1 = [6, 7, 8, 9];
const result1 = array1.every(num => num > 5);
const array2 = [2, 8, 10, 3];
const result2 = array2.every(num => num > 5);
console.log(result1);
console.log(result2);


// 2. Given an array of boolean values, write a function that uses the every() method to check if all values in the array are true. Return true if they are, otherwise false.
function allTrueArry(arry) {
  return arry.every(num => num === true);
}
const booleanArray1 = [true, true, true, true];
const reslt1 = allTrueArry(booleanArray1);
const booleanArray2 = [true, false, true, true];
const reslt2 = allTrueArry(booleanArray2)
console.log(reslt1);
console.log(reslt2);

// 3. Create an array of ages. Write a function that uses the every() method to check if all ages in the array are greater than or equal to 18. Return true if they are, otherwise false.
function allAges18(ages) {
  return ages.every(age => age >= 18);
}
const ages = [18, 19, 20, 21];
const agesRslt1 = allAges18(ages);
const ages2 = [17, 18, 19, 20];
const agesRslt2 = allAges18(ages2);
console.log(agesRslt1);
console.log(agesRslt2);

// 4. Write a function that takes an array of product objects and uses the every() method to check if all products have a price greater than $10. Return true if they do, otherwise false.
function allProducts10(products) {
  return products.every(product => product.price > 10);
}
const products = [
  { name: "bread", price: 10 },
  { name: "milk", price: 15 },
  { name: "eggs", price: 9 },
  { name: "cheese", price: 20 },
];
const productsRslt1 = allProducts10(products);
const products2 = [
  { name: "rice", price: 17 },
  { name: "beans", price: 14 },
  { name: "fish", price: 12 },
  { name: "drink", price: 18 },
];
const productsRslt2 = allProducts10(products2);
console.log(productsRslt1);
console.log(productsRslt2);

// 5. Create a function that simulates a voting system. Given an array of voter objects with voted properties (boolean), write a function that uses the every() method to check if all voters have voted. Return true if they have, otherwise false.
function allVotersVoted(voters) {
  return voters.every(voter => voter.voted);
}
const voters = [
  { name: "matha", voted: true },
  { name: "Jane", voted: false },
  { name: "Joe", voted: true },
  { name: "keleb", voted: true },
];
const votersRslt = allVotersVoted(voters);
console.log(votersRslt);

// 6. Write a function that takes an array of strings and uses the every() method to check if all strings have a length greater than 5 characters. Return true if they do, otherwise false.
function allStringsLengthGreaterThan5(strings) {
  return strings.every(string => string.length > 5);
}
const strings = ["shalewa", "elijah", "abikeh", "kemisola", "bidemi"];
const stringsRslt = allStringsLengthGreaterThan5(strings);
console.log(stringsRslt);

// 7. Create an array of tasks with completion statuses (boolean). Write a function that uses the every() method to check if all tasks have been completed (status is true). Return true if they have, otherwise false.
function allTasksCompleted(tasks) {
  return tasks.every(task => task.completed);
}
const tasks = [
  { descriptionName: "Glory tasks has been completed", completed: true },
  { descriptionName: "Shade tasks has not been completed", completed: false },
  { descriptionName: "Seyi tasks has been completed", completed: true },
  { descriptionName: "Jhon tasks has not been completed", completed: false },
];
const tasksRslt = allTasksCompleted(tasks);
console.log(tasksRslt);

// 8. Implement a function that simulates a survey response system. Given an array of response objects with a valid property (boolean), write a function that uses the every() method to check if all responses are valid. Return true if they are, otherwise false.
function allResponsesValid(responses) {
  return responses.every(response => response.valid);
}
const responses = [
  { valid: true },
  { valid: true },
  { valid: true },
  { valid: true },
];
const responsesRslt = allResponsesValid(responses);
console.log(responsesRslt);




// FILTER

// 1. Write a JavaScript function that takes an array of numbers and uses the filter() method to return a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

// 2. Given an array of strings, write a function that uses the filter() method to return a new array containing only the strings that have more than five characters.
function filterStringsWithMoreThanFiveChars(strings) {
  return strings.filter(string => string.length > 5);
}
const alphabeltStr = ["Milo", "banana", "orange", "Nova", "Oliver", "melon", "Stella"];
const stringsWithMoreThanFiveChars = filterStringsWithMoreThanFiveChars(alphabeltStr);
console.log(stringsWithMoreThanFiveChars);

// 3. Create an array of ages. Write a function that uses the filter() method to return a new array containing only the ages that are greater than or equal to 18.
function filterAgesGtEq18(arrOfAges) {
  return arrOfAges.filter(age => age >= 18);
}
const arrOfAges = [10, 15, 20, 30, 40, 50, 60, 70, 80, 90];
const agesGtEq18 = filterAgesGtEq18(arrOfAges);
console.log(agesGtEq18);

// 4. Write a function that takes an array of objects representing people"s names and ages. Use the filter() method to return a new array containing only the people who are under 30 years old.
function PeopleUnderAgeOf30(arrOfPeople) {
  return arrOfPeople.filter(person => person.age < 30);
}
const arrOfPeople = [
  { name: "Chris", age: 25 },
  { name: "Alice", age: 32 },
  { name: "Bob", age: 35 },
  { name: "Eva", age: 22 }
];
const peopleUnderAgeOf30 = PeopleUnderAgeOf30(arrOfPeople);
console.log(peopleUnderAgeOf30);

// 5. Create a function that simulates an e-commerce website. Given an array of product objects, use the filter() method to return a new array containing only the products that are currently in stock.
function productInStock(currentProduct) {
  return currentProduct.filter(product => product.stock > 0);
}
const currentProduct = [
  { name: "Groceries", stock: 10 },
  { name: "Mobile Accessories", stock: 0 },
  { name: "Caprisun Orange", stock: 5 },
  { name: "Hollandia Yoghurt", stock: 3 }
];
const currentProductInStock = productInStock(currentProduct);
console.log(currentProductInStock);

// 6. Write a function that takes an array of objects representing books and their ratings. Use the filter() method to return a new array containing only the books that have a rating of 4 stars or higher.
function booksWithFourStarRating(arrOfBooks) {
  return arrOfBooks.filter(book => book.rating >= 4);
}
const arrOfBooks = [
  { title: "The Great Gatsby", rating: 3 },
  { title: "The Catcher in the Rye", rating: 2 },
  { title: "The Old Man and the Sea", rating: 10 },
  { title: "The Grapes of Wrath", rating: 4 },
  { title: "The Trial", rating: 4 },
  { title: "The Odyssey", rating: 4 },
  { title: "The Iliad", rating: 4 },
  { title: "The Count of Monte Cristo", rating: 4 },
  { title: "The Sun Also Rises", rating: 4 },
  { title: "The Kite Runner", rating: 4 },
  { title: "The Giver", rating: 4 },
  { title: "The Wuthering Height", rating: 7 }

];
const arrOfBooksWithFourStarRating = booksWithFourStarRating(arrOfBooks);
console.log(arrOfBooksWithFourStarRating);

// 7. Create an array of words. Write a function that uses the filter() method to return a new array containing only the words that start with the letter "A."
function wordsStartingWithA(arrOfWords) {
  return arrOfWords.filter(word => word.startsWith("A"));
}
const arrOfWords = ["Animal", "agriculture", "Ant", "Aardvark", "abba", "abraham"];
const arrOfWordsStartingWithA = wordsStartingWithA(arrOfWords);
console.log(arrOfWordsStartingWithA);

// 8. Implement a function that simulates a task manager. Given an array of task objects, use the filter() method to return a new array containing only the tasks that are marked as completed.
function taskManager(arrOfTasks) {
  return arrOfTasks.filter(task => task.completed);
}
const arrOfTasks = [
  { title: "Clean the kitchen", completed: true },
  { title: "Clean the bathroom", completed: false },
  { title: "Clean the bedroom", completed: true },
  { title: "Clean the living room", completed: true },
  { title: "Clean the garage", completed: false },
];
const arrOfTasksCompleted = taskManager(arrOfTasks);
console.log(arrOfTasksCompleted);


// FIND

// 1.Write a JavaScript function that takes an array of numbers and a target number as arguments. Use the find() method to find and return the first element in the array that matches the target number.
function find(arrOfNumbers, targetNumber) {
  return arrOfNumbers.find(number => number === targetNumber);
}
const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetNumber = 6;
const result = find(arrOfNumbers, targetNumber);
console.log(result);

// 2.Given an array of objects representing books with titles and authors, write a function that uses the find() method to find and return the book object with a specific title.
function findBook(arrOfBooks, title) {
  return arrOfBooks.find(book => book.title === title);
}
const bookTitleAndAuthorsNames = [
  { title: "The Old Man and the Sea", author: "Ernest Hemingway" },
  { title: "Their Eyes Were Watching God", author: "Zane Grey" },
  { title: "The Grapes of Wrath", author: "John Steinbeck" },
  { title: "The Trial", author: "Franz Kafka" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
];
const bookTitle = "The Grapes of Wrath";
const bookTitleRslt = findBook(bookTitleAndAuthorsNames, bookTitle);
console.log(bookTitleRslt);

// 3.Create an array of usernames. Write a function that takes a username as an argument and uses the find() method to find and return the first user object with the matching username.
function findUser(arrOfUsers, username) {
  return arrOfUsers.find(user => user.username === username);
}
const arrOfUsers = [
  { username: "Praise", age: 20 },
  { username: "Shola", age: 22 },
  { username: "Abiola", age: 18 },
  { username: "joe", age: 25 },
];
const username = "Abiola";
const userRslt = findUser(arrOfUsers, username);
console.log(userRslt);

// 4.Write a function that takes an array of product objects and a product name as an argument. Use the find() method to find and return the first product object with the given name.
function findProduct(arrOfProducts, productName) {
  return arrOfProducts.find(product => product.name === productName);
}
const arrOfProducts = [
  { name: "T-shirt", price: 100 },
  { name: "Jacket", price: 200 },
  { name: "Shoes", price: 300 },
  { name: "Socks", price: 400 },
];
const productName = "Socks";
const productRslt = findProduct(arrOfProducts, productName);
console.log(productRslt);

// 5.Create a function that simulates a library catalog. Given an array of book objects with titles, authors, and categories, write a function that uses the find() method to find and return the book object with a specific category.
function findBook(arrOfBooksCategory, category) {
  return arrOfBooksCategory.find(book => book.category === category);
}
const arrOfBooksAndTheCategory = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction" },
  { title: "Second Class Citizens", author: "Buchi Emecheta", category: "fiction" },
  { title: "Wuthering Height", author: " Emily Brontë's", category: "fiction" },
  { title: "Let me Die Alone", author: " K. Kargbo ", category: "fiction" },
];
const category = "fiction";
const bookRslt = findBook(arrOfBooksAndTheCategory, category);
console.log(bookRslt);

// 6.Write a function that takes an array of email addresses and an email address as an argument. Use the find() method to find and return the first email address that matches the provided one.
function findEmail(arrOfEmails, email) {
  return arrOfEmails.find(emailAddress => emailAddress === email);
}
const arrOfEmails = ["grace@gmail.com", "erin@gmail.com", "jhon@yahoo.com", "olayiwolapamilerin@gmail.com"];
const email = "olayiwolapamilerin@gmail.com";
const emailRslt = findEmail(arrOfEmails, email);
console.log(emailRslt);

// 7.Create an array of tasks with descriptions and due dates. Write a function that takes a due date as an argument and uses the find() method to find and return the first task with that due date.
function findTask(arrOfTasks, dueDate) {
  return arrOfTasks.find(task => task.dueDate === dueDate);
}
const dueDateTasks = [
  { description: "Clean the house", dueDate: "2020-07-20" },
  { description: "Cook dinner", dueDate: "20223-11-20" },
  { description: "Take out the trash", dueDate: "2024-01-1" },
  { description: "Do laundry", dueDate: "2022-04-11" },
];
const dueDate = "2024-01-1";
const dueDateTaskRslt = findTask(dueDateTasks, dueDate);
console.log(dueDateTaskRslt);

// 8.Implement a function that simulates a user database. Given an array of user objects with names and roles, write a function that uses the find() method to find and return the first user object with a specific rol2.458
function findUser(arrOfUsers, role) {
  return arrOfUsers.find(user => user.role === role);
}
const users = [
  { name: "Seun", role: "Admin" },
  { name: "Gayus", role: "User" },
  { name: "Titi", role: "User" },
  { name: "Toyese", role: "Admin" },
];
const role = "Admin";
const roleUserRslt = findUser(users, role);
console.log(roleUserRslt);



// findIndex

// 1. Write a JavaScript function that takes an array of numbers and uses the findIndex() method to find the index of the first element in the array that is greater than 10. Return the index or -1 if not found.
function IndexGreaterThan10(numbers) {
  const index = numbers.findIndex(number => number > 10);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const numbersArray = [4, 8, 5, 3, 15, 7];
const numberArrayRslt = IndexGreaterThan10(numbersArray);
console.log(numberArrayRslt);

//   2. Given an array of boolean values, write a function that uses the findIndex() method to find the index of the first true value in the array. Return the index or -1 if not found.
function findIndexOfTrue(arrOfBool) {
  const index = arrOfBool.findIndex(bool => bool === true);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const arrOfBool = [false, false, true, false, true, false];
const arrOfBoolRslt = findIndexOfTrue(arrOfBool);
console.log(arrOfBoolRslt);


//   3. Create an array of ages. Write a function that uses the findIndex() method to find the index of the first age in the array that is greater than or equal to 18. Return the index or -1 if not found.
function findIndexOfAge(arrOfAge) {
  const index = arrOfAge.findIndex(age => age >= 18);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const arrOfAge = [12, 15, 16, 25, 30, 18];
const arrOfAgeRslt = findIndexOfAge(arrOfAge);
console.log(arrOfAgeRslt);

//   4. Write a function that takes an array of product objects and uses the findIndex() method to find the index of the first product with a price greater than $50. Return the index or -1 if not found.
function findIndexOfPrice(arrOfProduct) {

  const index = arrOfProduct.findIndex(product => product.price > 50);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const arrOfProduct = [
  { name: 'Banana', price: 4, quantity: 20 },
  { name: 'Apple', price: 3, quantity: 10 },
  { name: 'Orange', price: 5, quantity: 15 },
  { name: 'Pear', price: 2, quantity: 10 },
];
const arrOfProductRslt = findIndexOfPrice(arrOfProduct);
console.log(arrOfProductRslt);

//   5. Create a function that simulates a voting system. Given an array of voter objects with voted properties (boolean), write a function that uses the findIndex() method to find the index of the first voter who has not voted (voted is false). Return the index or -1 if not found
function findIndexOfVoted(arrOfVoter) {

  const index = arrOfVoter.findIndex(voter => !voter.voted);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const arrOfVoter = [
  { name: 'Tayo', voted: false },
  { name: 'Taye', voted: true },
  { name: 'Tola', voted: false },
  { name: 'Jade', voted: false },
];
const arrOfVoterRslt = findIndexOfVoted(arrOfVoter);
console.log(arrOfVoterRslt);

//   6. Write a function that takes an array of strings and uses the findIndex() method to find the index of the first string with a length greater than 10 charac3ers. Return the index or -1 if not found.4
function findIndexOfStr(arrOfStr) {
  const index = arrOfStr.findIndex(str => str.length > 10);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const arrOfStr = ['ab', 'abcde', 'abcdefghi', "abcdefghijklmnopqrstuvwxyz", 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'];
const arrOfStrRslt = findIndexOfStr(arrOfStr);
console.log(arrOfStrRslt);

//   7. Create an array of tasks with completion statuses (boolean). Write a function that uses the findIndex() method to 6ind the index of the first incomplete task4(status is false). Return the index or -1 if not found.5
function findIndexOfIncomplete(arrOfTasks) {
  const index = arrOfTasks.findIndex(task => task.status === false);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const incompleteArrOfTasks = [
  { name: 'Jade', status: true },
  { name: 'Jadesola', status: false },
  { name: 'Shalewa', status: true },
  { name: 'shina', status: false },
]
const incompleteArrOfTasksRslt = findIndexOfIncomplete(incompleteArrOfTasks);
console.log(incompleteArrOfTasksRslt);


// 8. Implement a function that simulates a survey response system. Given an array of response objects with a valid 7roperty (boolean), write a function that uses the findIndex() method to find the index of the first invalid response 6valid is false). Return the index or -1 if not foun28
function findIndexOfInvalid(arrOfResponses) {
  const index = arrOfResponses.findIndex(response => response.valid === false);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const invalidArrOfResponses = [
  { name: 'bidemi', valid: true },
  { name: 'ola', valid: true },
  { name: 'lewa', valid: true },
  { name: 'ayo', valid: false },
];
const invalidArrOfResponsesRslt = findIndexOfInvalid(invalidArrOfResponses);
console.log(invalidArrOfResponsesRslt);



// forEach

//   1. Write a JavaScript function that takes an array of numbers and uses the forEach() method to print each number to the console.
function forEach(arrOfNumbers) {
  arrOfNumbers.forEach(number => console.log(number));
}
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
forEach(arrOfNumbers);

//   2. Given an array of names, write a function that uses the forEach() method to greet each person by name, e.g., "Hello, John!".
function forEach(arrOfNames) {
  arrOfNames.forEach(name => console.log(`Hello, ${name}!`));
}
const arrOfNames = ['John', 'Jane', 'Joe', 'Jill', 'Jack'];
forEach(arrOfNames);

// 3. Create an array of colors. Write a function that uses the forEach() method to create HTML elements (divs or spans) for each color and appends them to a web page.
const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
function createColorElements(color) {
  const colorDiv = document.createElement("div");
  document.body.appendChild(colorDiv);
  colorDiv.style.backgroundColor = color;
  colorDiv.style.width = "50px";
  colorDiv.style.height = "50px";
  colorDiv.style.margin = "5px";
  colorDiv.style.display = "inline-block";
}
colors.forEach(createColorElements);

// 4. Write a function that takes an array of product objects and uses the forEach() method to display the name and price of each product on a web page.
const productsArray = [
  { name: "Banana", price: 1.59 },
  { name: "Apple", price: 2.99 },
  { name: "Orange", price: 0.99 },
  { name: "Pear", price: 1.29 },
  { name: "Grape", price: 3.99 },
  { name: "Lemon", price: 0.99 },
  { name: "Pineapple", price: 2.99 },
];
function createProductElements(product) {
  const productDiv = document.createElement("div");
  document.body.appendChild(productDiv);
  productDiv.style.backgroundColor = "blue";
  productDiv.style.color = "white";
  productDiv.style.width = "50%";
  productDiv.style.height = "50px";
  productDiv.style.margin = "9px";
  productDiv.style.display = "block";
  productDiv.textContent = `${product.name} - $${product.price}`;
}
products.forEach(createProductElements);

// 5. Create a function that simulates a to-do list. Given an array of tasks with descriptions, write a function that uses the forEach() method to display each task with a checkbox for completion.
const todoTasks = [
  { description: "Walk the dog", completed: false },
  { description: "Do the dishes", completed: true },
  { description: "Clean the room", completed: false },
  { description: "Do homework", completed: true },
  { description: "Go to the gym", completed: false },
];
const createTodoTaskElements = (task) => {
  const todoTaskDiv = document.createElement("div");
  document.body.appendChild(todoTaskDiv);
  todoTaskDiv.style.backgroundColor = "red";
  todoTaskDiv.style.color = "white";
  todoTaskDiv.style.width = "50%";
  todoTaskDiv.style.height = "50px";
  todoTaskDiv.style.margin = "9px";
  todoTaskDiv.style.display = "block";
  todoTaskDiv.textContent = `${task.description} - ${task.completed ? "Completed" : "Not Completed"}`;
}
todoTasks.forEach(createTodoTaskElements);

// 6. Write a function that takes an array of sentences and uses the forEach() method to count the number of words in each sentence and display the counts on a web page.

const sentences = [
  "This is a sentence.", "This is another sentence.", "This is a third sentence.",
  "This is a fourth sentence.", "This is a fifth sentence.",
];
console.log(sentences);
const createSentenceElements = (sentence) => {
  const sentenceDiv = document.createElement("div");
  document.body.appendChild(sentenceDiv);
  sentenceDiv.style.backgroundColor = "lime";
  sentenceDiv.style.color = "white";
  sentenceDiv.style.width = "50%";
  sentenceDiv.style.height = "50px";
  sentenceDiv.style.margin = "9px";
  sentenceDiv.style.display = "block";
  sentenceDiv.textContent = sentence;
}
sentences.forEach(createSentenceElements);
// 7. Create an array of tasks with due dates. Write a function that uses the forEach() method to display each task's description and due date in a formatted way.
const dueDateTask = [
  { description: "Task 1", dueDate: "2021-01-01" }, 
  { description: "Task 2", dueDate: "2021-01-02" }, 
  { description: "Task 3", dueDate: "2021-01-03" }, 
  { description: "Task 4", dueDate: "2021-01-04" }, 
  { description: "Task 5", dueDate: "2021-01-05" },         
];
const createTaskElements = (task) => {
  const taskDiv = document.createElement("div");
  document.body.appendChild(taskDiv);
  taskDiv.style.backgroundColor = "red";
  taskDiv.style.color = "white";
  taskDiv.style.width = "50%";
  taskDiv.style.height = "50px";
  taskDiv.style.margin = "9px";
  taskDiv.style.display = "block";
  taskDiv.textContent = `${task.description} : ${task.dueDate}`;
}
dueDateTask.forEach(createTaskElements);
console.log(dueDateTask);

// 8. Implement a function that simulates a user list. Given an array of user objects with names and roles, write a function that uses the forEach() method to display each user's name and role on a web page.
const userList = [
  { name: "John", role: "Manager" },  
  { name: "Jane", role: "Engineer" },  
  { name: "Joe", role: "Intern" },  
];
const createUserElements = (user) => {    
  const userDiv = document.createElement("div");
  document.body.appendChild(userDiv);
  userDiv.style.backgroundColor = "green";
  userDiv.style.color = "white";
  userDiv.style.width = "50%";
  userDiv.style.height = "50px";
  userDiv.style.margin = "9px";
  userDiv.style.display = "block";  
  userDiv.textContent=
  `Name: ${user.name}
  Role: ${user.role}
  `
}
userList.forEach(createUserElements);

//                                                    INCLUDES
                                                
// 1. Write a JavaScript function that takes an array of numbers and a target number as arguments. Use the includes() method to check if the target number is present in the array and return true or false accordingly.
const checkTargetNumber =(array, target)=> {
  return array.includes(target);
}

const targetNumbersToCheck = [1, 2, 3, 4, 5];
const targetNumbers = 3;

const isPresent = checkTargetNumber(targetNumbersToCheck, targetNumber);
console.log(isPresent);

// 2.Given an array of strings, write a function that uses the includes() method to check if a specific string exists in the array. Return true if it exists, otherwise false.
const checkString = (array, target)=> {
  return array.includes(target);
}

const stringToCheck = "Hello";
const stringsArray = ["Hello", "World", "Hello", "World"];  
const presentStr = checkString(stringsArray, stringToCheck);
console.log(presentStr);

// 3.Create an array of usernames. Write a function that takes a username as an argument and uses the includes() method to check if it exists in the array of usernames. Return true if found, otherwise false.
const checkUsername = (array, target)=> {
  return array.includes(target);
}

const usernameToCheck = "Turayo";
const usernamesArray = ["sade", "Mary", "Turayo", "Glory"]; 
const presentUsername = checkUsername(usernamesArray, usernameToCheck);
console.log(presentUsername);

// 4.Write a function that takes an array of objects representing products and a product name as an argument. Use the includes() method to check if a product with the given name exists in the array. Return true if found, otherwise false.
const checkProduct = (array, target)=> {  
  return array.includes(target);
}

const productToCheck = "iPhone";
const productsAry = [
  { name: "iPhone", price: 1000 },
  { name: "Samsung", price: 2000 },
  { name: "iPhone", price: 1000 },
  { name: "Samsung", price: 2000 }
];
const presentProduct = checkProduct(productsAry, productToCheck);
console.log(presentProduct);

// 5.Create a function that simulates a shopping cart. Given an array of product objects and a product ID, use the includes() method to check if the product with the given ID is already in the cart. Return true if it's in the cart, otherwise false.
const checkProductInCart = (array, target)=> {  
  return array.includes(target);
}
const productInCartToCheck = "shoe";
const productsInCartAry = [
  { name: "shoe", price: 1000 },
  { name: "shirt", price: 2000 },
  { name: "boxer", price: 1000 },
  { name: "cap", price: 500 },
]
const presentProductInCart = checkProductInCart(productsInCartAry, productInCartToCheck);
console.log(presentProductInCart);

// 6.Write a function that takes an array of email addresses and an email address as an argument. Use the includes() method to check if the provided email address is in the array. Return true if found, otherwise false.
const checkEmailInArray = (array, target)=> {  
  return array.includes(target);
}
const emailToCheck = "john@gmail.com";
const emailsAry = [
  "john@gmail.com",
  "erinoluwa@gmail.com",
  "Tj@gmail.com",
]
const presentEmail = checkEmailInArray(emailsAry, emailToCheck);
console.log(presentEmail);

// 7.Create an array of sentences. Write a function that takes a word as an argument and uses the includes() method to check if any sentence in the array contains that word. Return true if found in any sentence, otherwise false.

const checkWordInSentence = (array, target)=> {
  return array.some(sentence => sentence.includes(target));
}
const wordToCheck = "Kehinde";
const sentencesAry = [
  "Taye is a good boy",
  "The fan is rolling",
  "Kehinde is rolling the ball",
]
const presentWord = checkWordInSentence(sentencesAry, wordToCheck);
console.log(presentWord);

// 8.Implement a function that simulates a membership system. Given an array of member IDs and a member ID as an argument, use the includes() method to check if the provided member ID is part of the membership. Return true if it's a member, otherwise false.
const checkMemberInArray = (array, target)=> {
  return array.includes(target);
}
const memberToCheck = "john";
const membersAry = [
  "Tosin",
  "erinoluwa",
  "Tj",
]
const presentMember = checkMemberInArray(membersAry, memberToCheck);
console.log(presentMember);


//                                                           indexOf
// 1.Write a JavaScript function that takes an array of numbers and uses the indexOf() method to find the index of a specific number in the array. Return the index or -1 if not found.

const findIndexInArray=(arr, targetNumber)=> {
  return arr.indexOf(targetNumber);
}
const indexAry = [1, 2, 3, 4, 5];
const targetIndexAryNumber = 3;
const index = findIndexInArray(numbersArray, targetNumber);
console.log(`Index of ${targetNumber}: ${index}`);


// 2.Given an array of colors, write a function that uses the indexOf() method to find the index of the color "blue" in the array. Return the index or -1 if not found.
const findIndexOfColor=(colorsArray, targetColor)=> {
  return colorsArray.indexOf(targetColor);
}
const colorsArray = ["red", "green", "blue", "yellow"];
const targetColor = "blue";
const indexColor = findIndexOfColor(colorsArray, targetColor);
console.log(`Index of ${targetColor}: ${indexColor}`);

// 3.Create an array of names. Write a function that uses the indexOf() method to find the index of the name "Alice" in the array. Return the index or -1 if not found.
const findIndexOfName=(namesArray, targetName)=> {
  return namesArray.indexOf(targetName);
}

const namesArray = ["John", "Alice", "Bob", "Eve"];
const targetName = "Alice";
const indexName = findIndexOfName(namesArray, targetName);
console.log(`Index of ${targetName}: ${indexName}`);

// 4.Write a function that takes an array of product objects and uses the indexOf() method to find the index of a specific product by its name in the array. Return the index or -1 if not found.
const findIndexOfProduct=(productsArray, targetProductName)=> {
  const index = productsArray.findIndex(product => product.name === targetProductName);
  return index !== -1 ? index : -1;
}
const productsArry = [{ name: "Product1" }, { name: "Product2" }, { name: "Product3" }];
const targetProductName = "Product2";
const indexProduct = findIndexOfProduct(productsArray, targetProductName);
console.log(`Index of ${targetProductName}: ${indexProduct}`);

// 5.Create a function that simulates a library catalog. Given an array of book objects with titles, write a function that uses the indexOf() method to find the index of a book with a specific title. Return the index or -1 if not found.
const findIndexOfBook=(libraryArray, targetBookTitle)=> {
  const index = libraryArray.findIndex(book => book.title === targetBookTitle);
  return index !== -1 ? index : -1;
}
const libraryArray = [ 
   { title: "The Old Man and the Sea", },
{ title: "Their Eyes Were Watching God",},
{ title: "The Grapes of Wrath",},
{ title: "The Trial",},
{ title: "The Catcher in the Rye",},];
const targetBookTitle = "The Catcher in the Rye";
const indexBook = findIndexOfBook(libraryArray, targetBookTitle);
console.log(`Index of ${targetBookTitle}: ${indexBook}`);

// 6.Write a function that takes an array of email addresses and uses the indexOf() method to find the index of a specific email address in the array. Return the index or -1 if not found.
const findIndexOfEmail=(emailArray, targetEmail)=> {
  return emailArray.indexOf(targetEmail);
}

const emailArray = ["ade@example.com", "wunmi2@example.com", "erin3@example.com"];
const targetEmail = "wunmi2@example.com";
const indexEmail = findIndexOfEmail(emailArray, targetEmail);
console.log(`Index of ${targetEmail}: ${indexEmail}`);

// 7.Create an array of tasks with descriptions. Write a function that uses the indexOf() method to find the index of a specific task by its description in the array. Return the index or -1 if not found. 
const findIndexOfTask=(taskArray, targetTask)=> {
  return taskArray.indexOf(targetTask);
}
const taskArray = ["Wash dishes", "Clean room", "Do laundry", "Go to gym"];
const targetTask = "Clean room";
const indexTask = findIndexOfTask(taskArray, targetTask);
console.log(`Index of ${targetTask}: ${indexTask}`);

// 8.Implement a function that simulates a user database. Given an array of user objects with names, write a function that uses the indexOf() method to find the index of a specific user by their name in the array. Return the index or -1 if not found.
const findIndexOfUser=(usersArray, targetUserName)=> {
  const index = usersArray.findIndex(user => user.name === targetUserName);
  return index !== -1 ? index : -1;
}
const usersArray = [{ name: "sade" }, { name: "taye" }, { name: "bidemi" }];
const targetUserName = "bidemi";
const indexUser = findIndexOfUser(usersArray, targetUserName);
console.log(`Index of ${targetUserName}: ${indexUser}`);
