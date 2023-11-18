//1.
const nameString = "Pamilerin";
const index = 6;
const result = specifiedInd(nameString, index);
function specifiedInd(nameString, index) {
  if (nameString) {
    const char = nameString.charAt(index);
    console.log(char);
  } else {
    alert(" error handling if the index is out of bounds");
  }
}

//2.
const programStr = "programming";
const rslt = fndFirstNonRepeatedChar(programStr);
console.log(`The first non-repeated character is: ${rslt}`);

function fndFirstNonRepeatedChar(programStr) {
  const charCount = {};
  for (let p = 0; p < programStr.length; p++) {
    const char = programStr.charAt(p);
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let p = 0; p < programStr.length; p++) {
    const char = programStr.charAt(p);
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}
//3.
let reslt = sumOfAsciiValues("Hello");
function sumOfAsciiValues(ascii) {
  let sum = 0;
  for (let i = 0; i < ascii.length; i++) {
    sum += ascii.charCodeAt(i);
    console.log( `Character: ${ascii.charAt(i)}, ASCII Value: ${ascii.charCodeAt(i)}, Sum: ${sum}`);
  }
  return sum;
}

//4.
function isUppercaseOnly(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) < 65 || string.charCodeAt(i) > 90) {
      return false;
    }
  }
  return true;
}
console.log(isUppercaseOnly("LEXUS"));
console.log(isUppercaseOnly("toyota"));
// 5.
const string1 = "Olushola ";
const string2 = "bidemi";
const concatenate = concatenateString(string1, string2);
console.log(concatenate);
function concatenateString() {
  return string1.concat(string2);
}
//6.
const myName = ["Olayiwola", " ", "Blessing", " ", "Pamilerin"];
const joiningString = joiningStr(myName);
console.log(joiningString);
function joiningStr(myName) {
  return myName.concat().join("");
}
//7.
const world = ["world", " ", "Best"];
const concatString = concatStr(world);
console.log(concatString);
function concatStr(world) {
  return world.concat().join("");
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
//9.
function findFirstOccurrence(str, char) {
  return str.indexOf(char);
}
let mainString = "Nation, Wide";
let charToFind = "i";

let firstOccurrenceIndex = findFirstOccurrence(mainString, charToFind);

console.log(`The first occurrence of '${charToFind}' in '${mainString}' is at index ${firstOccurrenceIndex}.`);

//10
// 11.
function extractPortion(inputString, startIndex, endIndex) {
  const extractedPortion = inputString.slice(startIndex, endIndex);
  return extractedPortion;
}
const inputStr = "Buy, Groceries";
const startIndex = 7;
const endIndex = 13;
// 12.
const extractPortionRslt = extractPortion(inputStr, startIndex, endIndex);
console.log(extractPortionRslt);
function removeLastNCharacters(inputString, n) {
  const modifiedString = inputString.slice(0, n);
  return modifiedString;
}

const character = "Nigerian";
const numberOfCharactersToRemove = 4;
const characterRslt = removeLastNCharacters(character, numberOfCharactersToRemove);
console.log(characterRslt);

// 13.
function splitAndRemovePunctuation(inputString) {
  const punctuationMarks = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  const cleanedString = inputString.split('').filter(char => !punctuationMarks.includes(char)).join('');
  const wordsArray = cleanedString.split(/\s+/);
  return wordsArray;
}
const inputText = "Puntuation marks has been removed.";
const inputTextRslt = splitAndRemovePunctuation(inputText);
console.log(inputTextRslt);

// 14.
function parseCSV(inputString) {
  // Using the split() method to split the string by commas
  const valuesArray = inputString.split(",");

  //i use map to Trim whitespaces from each value in the array
  valuesArry = valuesArray.map(function (value) {
    return value.trim();
  });

  return valuesArry;
}
const csvString = "apple, orange, banana, grape";
const resultArray = parseCSV(csvString);

console.log(resultArray);

//15.
const text = "Individual person";
const textrslt1 = text.substring(10, 16);
console.log(textrslt1);
const textans = textAns(textrslt1);
function textAns(textrslt1) {
  console.log(textrslt1);
}
//16.
const lgReverse = "Larger strings reverse";
const reverse = "Larger";
console.log(reverse);

//17.
function lowerCase(lowerCase) {
  return lowerCase.toLowerCase();
}
const lowerName = "OLUWAPAMILERINAYO";
const lowerResult = lowerCase(lowerName);
console.log(lowerResult);

//18.
function notEqualString(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
const upperItem = "Spoon";
const lowerItem = "Jug";
const toLowerNmResult = notEqualString(upperItem, lowerItem);
console.log(toLowerNmResult);

//19.
const sentence = "my name is omolayo erinfolami";
const sentenceRslt = wordToCapitalize(sentence);
console.log(sentenceRslt);

function wordToCapitalize(sentence) {
  const words = sentence.split(" ");
  console.log(words);
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return words;
    }
  });
  const capitalizedSentence = capitalizedWords.join(" ");
  return capitalizedSentence;
}
//20.
function isAllUppercase(InputString) {
  return InputString === InputString.toUpperCase();
}
const countryOne = "Swenden";
const country2NotInUpper = "UNITED KINGDOM";

console.log(isAllUppercase(countryOne));
console.log(isAllUppercase(country2NotInUpper));

//21.
const myString = "Hello, My, People!";
const mySubstring = "People!";

console.log(Substring(myString, mySubstring));
function Substring(myString, mySubstring) {
  return myString.endsWith(mySubstring);
}
//22.
function ValidFileExtension(filename) {

  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.txt', '.pdf', '.doc', '.docx'];
  const lastDotIndex = filename.lastIndexOf('.');

  if (lastDotIndex !== -1) {
    const fileExtension = filename.slice(lastDotIndex).toLowerCase();
    return validExtensions.includes(fileExtension);
  } else {
    return false;
  }
}

const filename1 = "example.jpg";
const filename2 = "document.pdf";
const filename3 = "script.js";
const filename4 = "image.png";

console.log(ValidFileExtension(filename1));
console.log(ValidFileExtension(filename2));
console.log(ValidFileExtension(filename3));
console.log(ValidFileExtension(filename4));


//23
function startsWithPrefix(inputString, prefix) {
  return inputString.startsWith(prefix);
}
const str = "Hello,there!";
const prefix = "Hello";
if (startsWithPrefix(str, prefix)) {
  console.log(`The string ${str} starts with the prefix  ${prefix}`);
} else {
  console.log(
    `The string ${str}does not starts with the prefix ${prefix}`
  );
}

//24
function validateUrl(url) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return true;
  } else {
    return false;
  }
}
const url1 = "http://www.example.com";
const url2 = "https://www.example.com";
const url3 = "ftp://www.example.com";
console.log(validateUrl(url1));
console.log(validateUrl(url2));
console.log(validateUrl(url3));

//25.
function trimWhitespace(inputString) {
  return inputString.trim();
}
const stringWithWhitespace = "     Folashade           ";
const trimmedString = trimWhitespace(stringWithWhitespace);
console.log(trimmedString);

//26
function trimStringWithWordBoundary(inputString, maxLength) {
  if (inputString.length <= maxLength) {
    return inputString;
  }
  let inputStr = inputString.trim();
  if (inputStr.length > maxLength) {
    const lastSpaceIndex = inputStr.lastIndexOf(' ', maxLength);
    inputStr = inputStr.substring(0, lastSpaceIndex).trim();
  }
  return inputStr;
}
const inputString = "This is a sample string that needs to be trimmed to a specified maximum length.";
const maxLength = 35;

const stingToTrim = trimStringWithWordBoundary(inputString, maxLength);
console.log(stingToTrim);
{ }
//27.
function trimEndspace(inputString) {
  return inputString.trimEnd();
}
const whitespace = "            Television                   ";
const trimStr = trimEndspace(whitespace);
console.log(trimStr);

//28.
function trimFilePath(filePath) {
  return filePath.trimEnd("/");
}
const filePath = "/path/to/some/directory/";
const trimmedPath = trimFilePath(filePath);
console.log(trimmedPath);

//29.

function trimEndspace(inputString) {
  return inputString.trimStart();
}
const whiteSpaceFrStart = "                 Storyset                   ";
const trimStart = trimEndspace(whiteSpaceFrStart);
console.log(trimStart);

//30.
function trimUsernames(usernames) {
  return usernames.map((username) => username.trimStart());
}
const usernames = ["bidemi", " iwahlola", "peter"];
const trimmedUsernames = trimUsernames(usernames);
console.log("Usernames after removing leading spaces:");
console.log(trimmedUsernames);

// 31.
function repeatStr(inputStr, timestoBeRepeated) {
  return inputStr.repeat(timestoBeRepeated);
}
const originalStrig = " spoon";
const repeatedString = repeatStr(originalStrig, 5);
console.log(originalStrig);
console.log(repeatedString);

//32
function repeatString(stringWanttoRepeat, times) {
  return stringWanttoRepeat.repeat(times);
}
const helloStr = "Hello String, ";
const stringRepeated = repeatString(helloStr, 3);
console.log("Original string:");
console.log(helloStr);
console.log("String repeated 3 times:");
console.log(stringRepeated);

// 33.
function replaceSubstring(inputString, oldSubstring, newSubstring) {
  if (!inputString || !oldSubstring) {
    return inputString;
  }
  return inputString.split(oldSubstring).join(newSubstring);
}
const originalString = "Hello, world! Hello, universe!";
const substringToReplace = "Hello";
const replacementString = "Hi";
const originalStrigRslt = replaceSubstring(originalString, substringToReplace, replacementString);
console.log(originalStrigRslt);
// 34.
const phoneNumber = "09090042156";
const formattedNumber = formatPhoneNumber(phoneNumber);
console.log(formattedNumber);
function formatPhoneNumber(phoneNumber) {
  if (phoneNumber.length === 11) {
    const areaCode = phoneNumber.slice(0, 3);
    const centralOfficeCode = phoneNumber.slice(3, 6);
    const lineNumber = phoneNumber.slice(6);
    return areaCode + '-' + centralOfficeCode + '-' + lineNumber;
  } else {
    return "Invalid phone number";
  }
}
// 35.
const originalStr = "universal";
const paddedString = padLeft(originalStr, 20, '*');
console.log(paddedString);
function padLeft(inputString, desiredLength, padCharacter) {
  if (inputString.length >= desiredLength) {
    return inputString;
  }
  const padding = padCharacter.repeat(desiredLength - inputString.length);
  return padding + inputString;
}


// 36.
const inputTime = "15:5";
console.log(inputTime);
const formattedTime = formatTime(inputTime);
console.log(formattedTime);
function formatTime(time) {
  const [hours, minutes] = time.split(':');

  const formattedHours = hours.padStart(2, '0');
  const formattedMinutes = minutes.padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}
//37.

//38
const stingToPad = "PhoneGadget";
const paddingstr = padRight(stingToPad, 15, '*');
function padRight(inputString, desiredLength, padCharacter) {
  if (inputString.length >= desiredLength) {
    return inputString;
  }

  const padding = padCharacter.repeat(desiredLength - inputString.length);
  return inputString + padding;
}
console.log(paddingstr);

// 39.
function extractEmails(text) {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const matches = text.match(emailPattern);

  return matches || [];
}
const textSample = "Please contact olayiwolapamilerin34@gmail.com for more information or erin.joy@email.com for assistance.";
const emails = extractEmails(textSample);

console.log("Extracted emails:", emails);

// 40.
const textSamplee = "This is a sample text. This text contains the word 'sample' multiple times.";
const wordToCount = 'sample';
const occurrences = countWordOccurrences(textSamplee, wordToCount);

function countWordOccurrences(text, targetWord) {
  const words = text.split(/\s+/);
  console.log(words);
  let count = 0;

  for (const word of words) {

    if (word.toLowerCase() === targetWord.toLowerCase()) {
      count++;
    }
  }
  return count;
}
console.log(`The word '${wordToCount}' occurs ${occurrences} times in the text.`);

// 41.
const mainStr = "Hello, World! This is an example.";
const substringToFind = "World";
const mainStrRslt = findSubstring(mainStr, substringToFind);
function findSubstring(mainString, substring) {
  const index = mainString.indexOf(substring);
  return index;
}
if (mainStrRslt !== -1) {
  console.log(`The substring ${substringToFind} was found at index ${mainStrRslt} .`);
} else {
  console.log(`The substring  ${substringToFind} was not found.`);
}

// 42.

//43.
const targetStr = "Banking, finances, and investing are important.";
const targetCharacter = "investing";
const targetStrRslt = findIndexOfCharacter(targetStr, targetCharacter);
function findIndexOfCharacter(targetStr, targetCharacter) {
  const index = targetStr.indexOf(targetCharacter);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
console.log(targetStrRslt);

// 44.
const sampleText = "This is a sample text.";
const wordToFind = "sample";
const indexRslt = findWordIndex(sampleText, wordToFind);
console.log(indexRslt);
function findWordIndex(sampleText, wordToFind) {
  const indexOfWord = sampleText.indexOf(wordToFind);
  if (indexOfWord !== -1) {
    return indexOfWord;
  } else {
    return -1;
  }
}
// 45.
const inputStrin = "standard";
const characterToFind = "a";

const lastIndex = lastIndexOfChar(inputStrin, characterToFind);

function lastIndexOfChar(inputStrin, characterToFind) {
  const lastIndex = inputStrin.lastIndexOf(characterToFind);
  if (lastIndex !== -1) {
      return lastIndex;
  } else {
      return -1;
  }
}
if (lastIndex !== -1) {
  console.log(`Last occurrence of '${characterToFind}' is at index ${lastIndex}`);
} else {
  console.log(`'${characterToFind}' not found in the string`);
}

// 46.
const textStr = "This sample text is a sample text.";
const wordToSearch = "text";
const lasTestIndex= lastIndexOfWord(textStr, wordToSearch);
function lastIndexOfWord(textStr, wordToSearch) {
  const lastIndex = textStr.lastIndexOf(wordToSearch);

  if (lastIndex !== -1) {
    return lastIndex;
  } else {
    return -1; 
  }
}

if (lasTestIndex !== -1) {
  console.log(`Last occurrence of "${wordToSearch}" is at index ${lasTestIndex}`);
} else {
  console.log(`"${wordToSearch}" not found in the text.`);
}
//  47.
const myStr = "Believe you can and you're halfway there.";
const index1 = 27;
const index2 = 45;
function getCharacterAtIndex(myStr, index) {
  if (index < 0 || index >= myStr.length) {
      return "Index out of bounds";
  }
  return myStr.charAt(index);
}
console.log(getCharacterAtIndex(myStr, index1));
console.log(getCharacterAtIndex(myStr, index2)); 

// 48.
function getMiddleCharacters(inputString) {
  const middleIndex = inputString.length / 2;

  if (inputString.length % 2 === 0) {
      return inputString.charAt(middleIndex - 1) + inputString.charAt(middleIndex);
  } else {
      return inputString.charAt(middleIndex | 0);
  }
}
console.log(getMiddleCharacters("abc"));     
console.log(getMiddleCharacters("abcd"));   
console.log(getMiddleCharacters("abcdef")); 

// 49.
function countVowels(inputString) {

  const inputStringLower = inputString.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < inputStringLower.length; i++) {
    if ('aeiou'.includes(inputStringLower[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}
const worldName = "Hello, World!";
const worldNameRslt = countVowels(worldName);
console.log(`The number of vowels in '${worldName}' is: ${worldNameRslt}`);

// 50.
        function isMultipleOf5(str) {
          return str.length % 5 === 0;
        }
        const testString1 = "abcdefghi"; 
        const testString2 = "abcde"; 
        console.log(isMultipleOf5(testString1));
        console.log(isMultipleOf5(testString2));